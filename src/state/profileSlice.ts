import { StateCreator } from 'zustand';
import { supabase } from '../utils/supabaseClient';
import { Middlewares } from './middlewares';
import { Slices } from './slices';

type Profile = {
  forename?: string;
  surname?: string;
  username?: string;
  biography?: string;
  avatarUrl?: string;
};

export type ProfileSlice = {
  avatar?: string;
  profile?: Profile;
  fetchAvatar: () => void;
  fetchProfile: () => void;
  updateAvatar: (avatar: File) => void;
  updateProfile: (profile: Profile) => void;
};

export const createProfileSlice: StateCreator<Slices, Middlewares, [], ProfileSlice> = (set, get) => ({
  fetchAvatar: async () => {
    const avatarUrl = get().profile?.avatarUrl;

    set({ isLoading: true });

    if (avatarUrl) {
      const { data } = await supabase.storage.from('avatars').download(avatarUrl);
      if (data) {
        set({ avatar: URL.createObjectURL(data) });
      }
    }

    set({ isLoading: false });
  },
  fetchProfile: async () => {
    const session = get().session;

    set({ isLoading: true });

    if (session?.user.id) {
      const { data } = await supabase
        .from('profiles')
        .select('forename, surname, username, biography, avatar_url')
        .eq('id', session.user.id)
        .single();

      if (data) {
        set({
          profile: {
            forename: data.forename || '',
            surname: data.surname || '',
            biography: data.biography || '',
            username: data.username || '',
            avatarUrl: data.avatar_url || '',
          },
        });
        get().fetchAvatar();
      }
    }

    set({ isLoading: false });
  },
  updateProfile: async (profile) => {
    const session = get().session;

    set({ isLoading: true });

    if (session) {
      const newProfile = {
        id: session.user.id,
        forename: profile.forename,
        surname: profile.surname,
        username: profile.username,
        biography: profile.biography,
        avatar_url: profile.avatarUrl,
        updated_at: new Date().toISOString(),
      };

      const { error } = await supabase.from('profiles').upsert(newProfile);
      if (!error) {
        set({ profile });
      }
    }

    set({ isLoading: false });
  },
  updateAvatar: async (avatar) => {
    const session = get().session;

    set({ isLoading: true });

    if (session?.user.id) {
      const fileExt = avatar.name.split('.').pop();
      const fileName = `${session.user.id}.${fileExt}`;
      const { data } = await supabase.storage.from('avatars').upload(fileName, avatar);
      if (data?.path) {
        const { error } = await supabase.from('profiles').update({ avatar_url: data.path }).eq('id', session.user.id);

        if (!error) {
          get().fetchAvatar();
        }
      }
    }

    set({ isLoading: false });
  },
});
