import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { createProfileSlice } from './profileSlice';
import { createSessionSlice } from './sessionSlice';
import { Slices } from './slices';
import { createStatusSlice } from './statusSlice';

export const useStore = create<Slices>()(
  persist(
    devtools((...x) => ({
      ...createProfileSlice(...x),
      ...createSessionSlice(...x),
      ...createStatusSlice(...x),
    })),
    {
      name: 'vitrine-state',
      partialize: (state) => Object.fromEntries(Object.entries(state).filter(([key]) => !['session', 'isLoading'].includes(key))),
    }
  )
);
