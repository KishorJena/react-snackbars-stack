export const SNACKBAR_SPACING = 60;

import type { DirectionTypes } from '../types';

export const SnackbarDefaults = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left'
  } , 
  
  maxSnackbars: 3,
  theme: 'light',
  transitionType: 'slide'
} as const;

export const OPPOSITE_DIRECTIONS: Record<DirectionTypes, DirectionTypes> = {
  left: 'right',
  right: 'left',
  up: 'down',
  down: 'up'
} as const;