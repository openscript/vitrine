import { StateCreator } from 'zustand';
import { Database } from '../../supabase';
import { supabase } from '../utils/supabaseClient';
import { Middlewares } from './middlewares';
import { Slices } from './slices';

type Project = {
  title: string;
  shortDescription: string;
  description?: string | null;
};

export type MyProjectsSlice = {
  myProject?: Project;
  myProjects?: Project[];
  fetchMyProjects: () => void;
  updateMyProject: (project: Project) => void;
};

export const createMyProjectSlice: StateCreator<Slices, Middlewares, [], MyProjectsSlice> = (set, get) => ({
  fetchMyProjects: async () => {
    set({ isLoading: true });
    const session = get().session;

    if (session) {
      const { data, error } = await supabase.from('projects').select().eq('author', session.user.id);
      if (!error && data) {
        set({
          myProjects: data.map((project) => ({
            title: project.title,
            shortDescription: project.short_description,
            description: project.description,
          })),
        });
      }
    }
    set({ isLoading: false });
  },
  updateMyProject: async (project) => {
    set({ isLoading: true });
    const session = get().session;

    if (session) {
      const newProject: Database['public']['Tables']['projects']['Insert'] = {
        title: project.title,
        short_description: project.shortDescription,
        description: project.description,
        author: session.user.id,
      };

      const { data, error } = await supabase.from('projects').upsert(newProject).select();
      if (!error && data && data.length >= 1) {
        const currentProjects = get().myProjects || [];
        set({
          myProjects: [
            ...currentProjects,
            { title: data[0].title, shortDescription: data[0].short_description, description: data[0].description },
          ],
        });
      }
    }

    set({ isLoading: false });
  },
});
