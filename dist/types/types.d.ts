/// <reference types="react" />
export declare type Severity = 'info' | 'success' | 'warning' | 'error';
export declare type DirectionTypes = 'left' | 'right' | 'up' | 'down';
export interface SnackbarOptions {
    severity?: Severity;
    duration?: number;
    preventDuplicate?: boolean;
}
export declare type EnqueueSnackbar = (message: string, options?: SnackbarOptions) => void;
export interface SnackbarPayload {
    id: number;
    open: boolean;
    message: string;
    severity?: Severity;
    duration?: number;
    preventDuplicate?: boolean;
}
export declare type TransitionType = 'slide' | 'grow' | 'fade' | 'zoom' | 'default';
export declare type AnchorOrigin = {
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'right';
};
export declare type SnackbarTheme = 'light' | 'dark';
export interface SnackbarProviderProps {
    transitionType?: TransitionType;
    anchorOrigin?: AnchorOrigin;
    maxSnackbars?: number;
    theme?: SnackbarTheme;
    icon?: boolean;
    children?: React.ReactNode;
}
export declare type SnackbarAction = {
    type: 'ADD_SNACKBAR';
    payload: SnackbarPayload;
} | {
    type: 'CLOSE_SNACKBAR';
    payload: number;
} | {
    type: 'REMOVE_SNACKBAR';
    payload: number;
} | {
    type: 'CLEAR_ALL';
};
export declare type SnackbarContextType = {
    enqueueSnackbar: EnqueueSnackbar;
};
