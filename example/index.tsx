import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
// import { Thing } from '../.';
import { Typography, Button, Alert,createTheme,  ThemeProvider } from '@mui/material';

// import { SnackbarProvider, enqueueSnackbar } from '../.';
import { 
  enqueueSnackbar,
  SnackbarProvider, 
  useSnackbar 
} from '../.';

import {AppDirect} from './SampleDirect';
import {AppHook} from './SampleHook';

const DURATION = 5500

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

const lightTheme = createTheme({ 
  palette: {
    mode: 'light'
  }
})

const App = () => {
  // const {enqueueSnackbar} = useSnackbar();
  console.log('App.tsx Run ')
  const handleCLick = () => {
    enqueueSnackbar({ 
      message: 'This is a snackbar message!', 
      severity:'info',
      duration: DURATION, 
      preventDuplicate: false 
    })
  }
  return (
    <ThemeProvider theme={lightTheme} >

    <div style={{  height: '100vh', backgroundColor: '#333', color: '#fff' }}>
    {/* <AppDirect/>      */}
    <AppHook/>     
    {/* <SnackbarProvider 
      maxSnackbars={4} 
      theme={'light'} 
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      transitionType={'slide'}
    /> */}

     <Button
        color='info'
        variant={'contained'}
        onClick={() => {
          enqueueSnackbar({ 
            message: 'This is a snackbar message!', 
            severity:'info',
            duration: DURATION, 
            preventDuplicate: false 
          })
        }}
      >
        info
      </Button>
      <Button
        color='success'
        variant={'contained'}
        onClick={() => {
          enqueueSnackbar({ 
            message: 'This is a snackbar message', 
            severity:'success',
            duration: DURATION, 
            preventDuplicate: false,
          })
        }}
      >
        Success
      </Button>
      <Button
        color='warning'
        variant={'contained'}
        onClick={() => {
          enqueueSnackbar({ 
            message: 'This is a snackbar message', 
            severity:'warning',
            duration: DURATION, 
            preventDuplicate: false,
          })
        }}
      >
        warning
      </Button>
      <Button
        color='error'
        variant={'contained'}
        onClick={() => {
          enqueueSnackbar({ 
            message: 'This is a snackbar message', 
            severity:'error',
            duration: DURATION, 
            preventDuplicate: false,
          })
        }}
      >
        error
      </Button>
 


    </div>
     </ThemeProvider>

  );
};

const App2 = () => {
  return (
    <SnackbarProvider 
      maxSnackbars={4} 
      theme={'dark'} 
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transitionType={'slide'}
    >
      <App />
    </SnackbarProvider>
  )
}
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement); // Create a root
  root.render(<App />); // Use root.render
} else {
  console.error("Root element not found");
}