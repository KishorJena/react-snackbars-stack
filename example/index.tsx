import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
// import { Thing } from '../.';
import { SnackbarProvider, enqueueSnackbar } from '../.';
import { Typography, Button, Alert } from '@mui/material';

const DURATION = 1500

const App = () => {
  console.log('App.tsx Run')
  const handleCLick = () => {
    enqueueSnackbar({ 
      message: 'This is a snackbar message!', 
      severity:'info',
      duration: 1500, 
      preventDuplicate: false 
    })
  }
  return (
    <div style={{ width:'100vw', height: '100vh', backgroundColor: '#333', color: '#fff' }}>
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
 
      <SnackbarProvider maxSnackbars={4} />

      <Alert
              variant="filled"
              
              severity={'warning'}
              sx={{ 
                width: '100%',
                color: 'white',
              }}

            >
              🔼123 
            </Alert>
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement); // Create a root
  root.render(<App />); // Use root.render
} else {
  console.error("Root element not found");
}