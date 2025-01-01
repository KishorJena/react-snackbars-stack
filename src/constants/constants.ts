export const SNACKBAR_SPACING = 60;

import type { DirectionTypes, Severity, SnackbarOptions } from '../types';

export const SnackbarDefaults = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left'
  } , 
  
  maxSnackbars: 5,
  theme: 'light',
  transitionType: 'slide'
} as const;

export const OPPOSITE_DIRECTIONS: Record<DirectionTypes, DirectionTypes> = {
  left: 'right',
  right: 'left',
  up: 'down',
  down: 'up'
} as const;

export const DEFAULT_OPTIONS:SnackbarOptions  = {
  severity: 'info' as Severity,
  duration: 3000 as number,
  preventDuplicate: false as boolean,
}