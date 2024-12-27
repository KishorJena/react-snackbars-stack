
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

export interface SnackbarProviderProps { 
  anchorOrigin?: { vertical: 'top' | 'bottom', horizontal: 'left' | 'right' };
  maxSnackbars?: number;
  preventDuplicate?: boolean;
  icon?: boolean;
}

export type SnackbarAction = 
  | { type: 'ADD_SNACKBAR'; payload: SnackbarItem }
  | { type: 'CLOSE_SNACKBAR'; payload: number }
  | { type: 'REMOVE_SNACKBAR'; payload: number }
  | { type: 'CLEAR_ALL' };
