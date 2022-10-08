import { StateCreator } from 'zustand';
import { Slices } from './slices';

type Session = {
  token: string;
};

export type SessionSlice = {
  session: Session;
  setSession: (session: Session) => void;
};

export const createSessionSlice: StateCreator<Slices, [['zustand/persist', unknown], ['zustand/devtools', never]], [], SessionSlice> = (
  set
) => ({
  session: { token: '' },
  setSession: (session) => set(() => ({ session })),
});
