import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { createSessionSlice } from './sessionSlice';
import { Slices } from './slices';

export const useStore = create<Slices>()(
  persist(
    devtools((...x) => ({
      ...createSessionSlice(...x),
    })),
    { name: 'vitrine-state' }
  )
);
