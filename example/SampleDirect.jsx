import * as React from 'react';

import { Button, createTheme, ThemeProvider } from '@mui/material';

// import { SnackbarProvider, enqueueSnackbar } from '../.';
import { enqueueSnackbar, SnackbarProvider } from 'react-snackbars-stack';

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

const AppDirect = () => {
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
     <h1>Direct event based</h1>
    <SnackbarProvider 
      maxSnackbars={4} 
      theme={'light'} 
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      transitionType={'slide'}
    />

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



export  {AppDirect};
