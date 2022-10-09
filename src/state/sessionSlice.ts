import { StateCreator } from 'zustand';
import { Middlewares } from './middlewares';
import { Slices } from './slices';

type Session = {
  token: string;
};

export type SessionSlice = {
  session: Session;
  setSession: (session: Session) => void;
};

export const createSessionSlice: StateCreator<Slices, Middlewares, [], SessionSlice> = (set) => ({
  session: { token: '' },
  setSession: (session) => set(() => ({ session })),
});
