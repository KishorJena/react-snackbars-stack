import { createContext } from 'react';
import { SnackbarContextType } from '../types';

export const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined);
