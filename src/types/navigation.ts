// types/navigation.ts (or similar)
import { Walk } from './walk';

export type RootStackParamList = {
  WalkDetails: { walk: Walk };
  Home: undefined;
  SavedWalks: undefined;
};
