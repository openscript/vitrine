import { Session } from '@supabase/supabase-js';
import { StateCreator } from 'zustand';
import { Middlewares } from './middlewares';
import { Slices } from './slices';

export type SessionSlice = {
  session?: Session | null;
  setSession: (session: Session | null) => void;
};

export const createSessionSlice: StateCreator<Slices, Middlewares, [], SessionSlice> = (set) => ({
  setSession: (session) => set(() => ({ session })),
});
