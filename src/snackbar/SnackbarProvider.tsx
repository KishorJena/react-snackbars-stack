import React, { useEffect, useRef, useReducer } from 'react';
import Snackbar from '@mui/material/Snackbar';
import { Alert, Portal } from '@mui/material';
import { SlideTransition } from '../transition/SlideTransition';
import { eventEmitter } from '../event';
import { snackbarReducer } from '../reducers';
import { MAX_SNACKBARS, SNACKBAR_SPACING } from '../constants';
import { SnackbarAction, SnackbarItem, SnackbarProviderProps } from '../types';

// Main component
export const SnackbarProvider: React.FC<SnackbarProviderProps> = ({ anchorOrigin, maxSnackbars = MAX_SNACKBARS, icon }) => {
  const [snackbars, dispatch] = useReducer((state: SnackbarItem[], action: SnackbarAction) => snackbarReducer(state, action, maxSnackbars), []);
  const instanceId = useRef(Date.now());

  useEffect(() => {
    // Check for multiple instances
    const providers = document.querySelectorAll('[data-snackbar-provider]');
    if (providers.length > 1) {
      console.warn('Multiple SnackbarProvider instances detected!');
    }

    // Setup event listener
    eventEmitter.setActive(true);
    const unsubscribe = eventEmitter.subscribe((newSnackbar) => {
      dispatch({ type: 'ADD_SNACKBAR', payload: newSnackbar });
    });

    return () => {
      eventEmitter.setActive(false);
      unsubscribe();
      dispatch({ type: 'CLEAR_ALL' });
    };
  }, []);

  const handleClose = (id: number) => (_event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return;

    dispatch({ type: 'CLOSE_SNACKBAR', payload: id });
    setTimeout(() => {
      dispatch({ type: 'REMOVE_SNACKBAR', payload: id });
    }, 150);
  };

  return (
    <Portal>
      <div 
        data-snackbar-provider={instanceId.current}
        style={{ 
          position: 'fixed', 
          bottom: 0, 
          left: 0, 
          zIndex: 9999,
          pointerEvents: 'none' ,
        }}
      >
        {snackbars.map((snackbar, index) => (
          <Snackbar
            key={snackbar.id}
            open={snackbar.open}
            TransitionComponent={SlideTransition}
            autoHideDuration={snackbar.duration}
            onClose={handleClose(snackbar.id)}
            anchorOrigin={anchorOrigin || { vertical: 'bottom', horizontal: 'left' }}
            sx={{
              '& .MuiSnackbar-root': {
                position: 'static',
              },
              pointerEvents: 'auto',
              transition: 'all 0.08s ease-in-out',
              bottom: `${(index * SNACKBAR_SPACING) + 24}px !important`,
            }}
          >
            <Alert
              variant="filled"
              onClose={handleClose(snackbar.id)}
              severity={snackbar.severity}
              sx={{ 
                width: '100%',
              }}
              icon={icon === true ? undefined : icon}
            >
              {snackbar.message}
            </Alert>
          </Snackbar>
        ))}
      </div>
    </Portal>
  );
};