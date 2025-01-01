export type Severity = 'info' | 'success' | 'warning' | 'error';
export type DirectionTypes = 'left' | 'right' | 'up' | 'down';

export interface SnackbarConfig {
  message: string;
  severity?: Severity;
  duration?: number;
  preventDuplicate?: boolean;
}

export interface SnackbarItem extends Required<SnackbarConfig> {
  id: number;
  open: boolean;
}

export type TransitionType = 'slide' | 'grow' | 'fade' | 'zoom' | 'default';

export type AnchorOrigin = {
  vertical: 'top' | 'bottom';
  horizontal: 'left' | 'right';
};

export type SnackbarTheme = 'light' | 'dark';

export interface SnackbarProviderProps {
  transitionType?: TransitionType;
  anchorOrigin?: AnchorOrigin;
  maxSnackbars?: number;
  theme?: SnackbarTheme;
  icon?: boolean;
  children?: React.ReactNode;
}

export type SnackbarAction =
  | { type: 'ADD_SNACKBAR'; payload: SnackbarItem }
  | { type: 'CLOSE_SNACKBAR'; payload: number }
  | { type: 'REMOVE_SNACKBAR'; payload: number }
  | { type: 'CLEAR_ALL' };

export type SnackbarContextType = {
  enqueueSnackbar: (param: SnackbarConfig) => void;
};
