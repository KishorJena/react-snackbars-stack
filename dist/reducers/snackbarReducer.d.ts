import { SnackbarAction, SnackbarPayload } from '../types';
export declare const snackbarReducer: (state: SnackbarPayload[], action: SnackbarAction, maxSnackbars: number) => SnackbarPayload[];
