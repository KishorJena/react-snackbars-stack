import { Alert, Portal, ThemeProvider, Zoom } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import React, { useEffect, useReducer, useRef } from 'react';
import { MAX_SNACKBARS, SNACKBAR_SPACING } from '../constants';
import { eventEmitter } from '../event';
import { snackbarReducer } from '../reducers';
import { darkTheme, lightTheme } from '../theme';
import { Transition } from '../transition/Transition';
import { SnackbarAction, SnackbarItem, SnackbarProviderProps } from '../types';
import { 
  Slide, SlideProps, 
  Grow, GrowProps, 
  Fade, FadeProps ,
  Zoom, ZoomProps
} from '@mui/material';

type Direction = 'left' | 'right' | 'up' | 'down';

const oppositeDirections: { [key in Direction]: Direction } = {
  left: 'right',
  right: 'left',
  up: 'down',
  down: 'up',
};

type TransitionType = 'slide' | 'grow' | 'fade' | 'zoom' | 'default';

const transitionComponents: { [key in TransitionType]: React.ComponentType<any> } = {
  'slide': Slide,
  'grow': Grow,
  'fade': Fade,
  'zoom': Zoom,
  'default': Slide,
};

// Main component
export const SnackbarProvider: React.FC<SnackbarProviderProps> = ({ 
  anchorOrigin = { vertical: 'bottom', horizontal: 'left' }, 
  maxSnackbars = MAX_SNACKBARS, 
  icon, 
  theme,
  transitionType = 'slide',
}) => {
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

    return ()=>{
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
  
  const SnakbarTransition = transitionComponents[transitionType] || transitionComponents.default;
  const transitionProps = transitionType === 'slide' ? { direction: oppositeDirections[anchorOrigin.horizontal] } : {};

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>

    <Portal>
      <div 
        data-snackbar-provider={instanceId.current}
        style={{ 
          position: 'fixed', 
          [anchorOrigin.vertical]: 0, 
          [anchorOrigin.horizontal]: 0, 
          zIndex: 9999,
          pointerEvents: 'none' ,
        }}
      >
        {snackbars.map((snackbar, index) => (
            <Snackbar
            key={snackbar.id}
            open={snackbar.open}
            // TransitionComponent={props=> <Transition {...props} transitionType='slide' anchorOrigin={anchorOrigin} />}
            TransitionComponent={SnakbarTransition}
            TransitionProps={transitionProps}
            autoHideDuration={snackbar.duration}
            onClose={handleClose(snackbar.id)}
            anchorOrigin={anchorOrigin}
            sx={{
              '& .MuiSnackbar-root': {
                position: 'static',
              },
              pointerEvents: 'auto',
              transition: 'all 0.08s ease-in-out',
              [anchorOrigin.vertical]: `${(index * SNACKBAR_SPACING) + 24}px !important`,
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
    </ThemeProvider>
  );
};