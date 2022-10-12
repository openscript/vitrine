import { StateCreator } from 'zustand';
import { Middlewares } from './middlewares';
import { Slices } from './slices';

export type StatusSlice = {
  isLoading: boolean;
};

export const createStatusSlice: StateCreator<Slices, Middlewares, [], StatusSlice> = (set) => ({
  isLoading: false,
});
