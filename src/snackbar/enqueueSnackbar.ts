import { eventEmitter } from '../event';
import { SnackbarConfig } from '../types';

// Helper function to enqueue snackbars
export const enqueueSnackbar = ({
  message,
  severity = 'info',
  duration = 5000,
  preventDuplicate = true,
}: SnackbarConfig): void => {
  eventEmitter.emit({
    id: Date.now(),
    message,
    severity,
    duration,
    open: true,
    preventDuplicate: preventDuplicate,
  });
};
