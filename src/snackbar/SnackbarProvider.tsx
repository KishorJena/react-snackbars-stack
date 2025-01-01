import { Alert, Fade, Grow, Portal, Slide, ThemeProvider, Zoom } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import { TransitionProps } from '@mui/material/transitions';
import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
} from 'react';
import { SNACKBAR_SPACING, SnackbarDefaults } from '../constants';
import { SnackbarContext } from '../context';
import { eventEmitter } from '../event';
import { snackbarReducer } from '../reducers';
import { darkTheme, lightTheme } from '../theme';
import {
  AnchorOrigin,
  DirectionTypes,
  SnackbarAction,
  SnackbarConfig,
  SnackbarItem,
  SnackbarProviderProps,
  TransitionType,
} from '../types';


const oppositeDirections: { [key in DirectionTypes]: DirectionTypes } = {
  left: 'right',
  right: 'left',
  up: 'down',
  down: 'up',
};


const transitionComponents = (
  transitionType: TransitionType,
  anchorOrigin: AnchorOrigin
): React.ComponentType<any> => {
  switch (transitionType) {
    case 'slide':
      return (props: TransitionProps & { children: React.ReactElement }) => (
        <Slide
          {...props}
          direction={oppositeDirections[anchorOrigin.horizontal]}
        />
      );
    case 'grow':
      return Grow;
    case 'fade':
      return Fade;
    case 'zoom':
      return Zoom;
    default:
      return Slide;
  }
};

// Main component
const Provider: React.FC<SnackbarProviderProps> = ({
  anchorOrigin = SnackbarDefaults.anchorOrigin,
  maxSnackbars = SnackbarDefaults.maxSnackbars,
  theme=SnackbarDefaults.theme,
  transitionType = SnackbarDefaults.transitionType,
  icon,
  children,
}) => {
  const [snackbars, dispatch] = useReducer(
    (state: SnackbarItem[], action: SnackbarAction) =>
      snackbarReducer(state, action, maxSnackbars),
    []
  );
  const instanceId = useRef(Date.now());

  useEffect(() => {
    // Check for multiple instances
    const providers = document.querySelectorAll('[data-snackbar-provider]');
    if (providers.length > 1) {
      console.warn('Multiple SnackbarProvider instances detected!');
    }

    // Setup event listener
    eventEmitter.setActive(true);
    const unsubscribe = eventEmitter.subscribe(newSnackbar => {
      console.log('EVENT | newSnackbar adding paylod:', newSnackbar);
      dispatch({ type: 'ADD_SNACKBAR', payload: newSnackbar });
    });

    return () => {
      eventEmitter.setActive(false);
      unsubscribe();
      dispatch({ type: 'CLEAR_ALL' });
    };
  }, []);

  const handleClose = useCallback((id: number) => (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') return;

    dispatch({ type: 'CLOSE_SNACKBAR', payload: id });

    setTimeout(() => {
      dispatch({ type: 'REMOVE_SNACKBAR', payload: id });
    }, 150);
  }, []);

  const SnakbarTransition = useMemo(
    () => transitionComponents(transitionType, anchorOrigin),
    [transitionType, anchorOrigin.vertical, anchorOrigin.horizontal]
  );

  const enqueueSnackbar = useCallback(
    ({
      message,
      severity = 'info',
      duration = 5000,
      preventDuplicate = true,
    }: SnackbarConfig): void => {
      const payload = {
        id: Date.now(),
        message,
        severity,
        duration,
        open: true,
        preventDuplicate: preventDuplicate,
      };
      dispatch({ type: 'ADD_SNACKBAR', payload });
    },
    []
  );

  return (
    <SnackbarContext.Provider value={{ enqueueSnackbar }}>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <Portal>
          <div
            data-snackbar-provider={instanceId.current}
            style={{
              position: 'fixed',
              [anchorOrigin.vertical]: 0,
              [anchorOrigin.horizontal]: 0,
              zIndex: 9999,
              pointerEvents: 'none',
            }}
          >
            {snackbars.map((snackbar, index) => (
              <Snackbar
                key={snackbar.id}
                open={snackbar.open}
                TransitionComponent={SnakbarTransition}
                autoHideDuration={snackbar.duration}
                onClose={handleClose(snackbar.id)}
                anchorOrigin={anchorOrigin}
                sx={{
                  '& .MuiSnackbar-root': {
                    position: 'static',
                  },
                  pointerEvents: 'auto',
                  transition: 'all 0.08s ease-in-out',
                  [anchorOrigin.vertical]: `${index * SNACKBAR_SPACING +
                    24}px !important`,
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
                  {"+"+snackbar.message}
                </Alert>
              </Snackbar>
            ))}
          </div>
        </Portal>
      </ThemeProvider>

      {children}
    </SnackbarContext.Provider>
  );
};

export const SnackbarProvider = memo(Provider);