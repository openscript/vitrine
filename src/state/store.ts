import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { CONFIGURATION } from '../configuration';
import { createMyProjectSlice } from './myProjectsSlice';
import { createProfileSlice } from './profileSlice';
import { createSessionSlice } from './sessionSlice';
import { Slices } from './slices';
import { createStatusSlice } from './statusSlice';

export const useStore = create<Slices>()(
  persist(
    devtools((...x) => ({
      ...createMyProjectSlice(...x),
      ...createProfileSlice(...x),
      ...createSessionSlice(...x),
      ...createStatusSlice(...x),
    })),
    {
      name: CONFIGURATION.STATE.NAME,
      partialize: (state) => Object.fromEntries(Object.entries(state).filter(([key]) => !['session', 'isLoading'].includes(key))),
    }
  )
);
