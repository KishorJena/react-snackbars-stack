export type Severity = 'info' | 'success' | 'warning' | 'error';
export type DirectionTypes = 'left' | 'right' | 'up' | 'down';

export interface SnackbarOptions {
  severity?: Severity;
  duration?: number;
  preventDuplicate?: boolean; // Optional
}

export type EnqueueSnackbar = (
  message: string,
  options?: SnackbarOptions
) => void;

export interface SnackbarPayload {
  id: number;
  open: boolean;
  message: string;
  severity?: Severity;
  duration?: number;
  preventDuplicate?: boolean;
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
  | { type: 'ADD_SNACKBAR'; payload: SnackbarPayload }
  | { type: 'CLOSE_SNACKBAR'; payload: number }
  | { type: 'REMOVE_SNACKBAR'; payload: number }
  | { type: 'CLEAR_ALL' };

export type SnackbarContextType = {
  enqueueSnackbar: EnqueueSnackbar;
};
