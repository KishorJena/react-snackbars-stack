import { DirectionTypes, Severity } from '../types';

export const SnackbarDefaults = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left',
  },
  maxSnackbars: 4,
  theme: 'light',
  transitionType: 'slide',
} as const;

export const OPPOSITE_DIRECTIONS: Record<DirectionTypes, DirectionTypes> = {
  left: 'right',
  right: 'left',
  up: 'down',
  down: 'up',
} as const;

export const DEFAULT_OPTIONS = {
  severity: 'info' as Severity,
  duration: 3000,
  preventDuplicate: false,
} as const;
