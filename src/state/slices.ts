import { MyProjectsSlice } from './myProjectsSlice';
import { ProfileSlice } from './profileSlice';
import { SessionSlice } from './sessionSlice';
import { StatusSlice } from './statusSlice';

export type Slices = MyProjectsSlice & ProfileSlice & SessionSlice & StatusSlice;
