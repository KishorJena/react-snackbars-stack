import { DEFAULT_OPTIONS } from '../constants';
import { eventEmitter } from '../event';
import { EnqueueSnackbar, SnackbarPayload } from '../types';


// Helper function to enqueue snackbars
export const enqueueSnackbar:EnqueueSnackbar = (
  message,
  options = DEFAULT_OPTIONS
) => {
  const snackbarEventEmit: SnackbarPayload = {
    id: Date.now(),
    open: true,
    message,
    severity: options.severity,
    duration: options.duration,
    preventDuplicate: options.preventDuplicate,
  };

  eventEmitter.emit(snackbarEventEmit);
};
