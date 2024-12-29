export type Severity = 'info' | 'success' | 'warning' | 'error';

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

export type TransitionType = 'slide' | 'grow' | 'fade';

export type AnchorOrigin = {
  vertical: 'top' | 'bottom';
  horizontal: 'left' | 'right';
};

export type theme = 'light' | 'dark';

export interface SnackbarProviderProps {
  maxSnackbars?: number;
  preventDuplicate?: boolean;
  icon?: boolean;
  theme?: theme;
  anchorOrigin?: AnchorOrigin;
  transitionType?: TransitionType;
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
