import { DEFAULT_ENQUEUE_OPTIONS } from '../constants';
import { eventEmitter } from '../event';
import { EnqueueSnackbar, SnackbarPayload } from '../types';

// Helper function to enqueue snackbars
export const enqueueSnackbar: EnqueueSnackbar = (message, options = {}) => {
  const snackbarEventEmit: SnackbarPayload = {
    id: Date.now(),
    open: true,
    message,
    severity: options.severity || DEFAULT_ENQUEUE_OPTIONS.severity,
    duration: options.duration || DEFAULT_ENQUEUE_OPTIONS.duration,
    preventDuplicate:
      options.preventDuplicate || DEFAULT_ENQUEUE_OPTIONS.preventDuplicate,
  };

  eventEmitter.emit(snackbarEventEmit);
};
