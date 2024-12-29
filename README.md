# React Snackbars Stack
A customizable and ready-to-use snackbar (toast) notification stack for React applications. Comes with a hook and direct usage without a hook. Built with MUI (@mui/material).

<p align="center">
  <img src="assets/Frame 5.png" alt="logo"/>
  <br/>
  <img alt="CI Status" src="https://github.com/KishorJena/react-snackbars-stack/actions/workflows/main.yml/badge.svg">
  <img alt="NPM Version" src="https://img.shields.io/npm/v/react-snackbars-stack">
  <img alt="X (formerly Twitter) Follow" src="https://img.shields.io/twitter/follow/heyKSR">
</p>

## Installation

Install the package using npm or yarn:

```bash
npm install react-snackbars-stack
# or
yarn add react-snackbars-stack
```

## Usage

### Option 1: Direct Use

Import the `SnackbarProvider` and wrap your application with it. Use the `enqueueSnackbar` method to show snackbars.

> **🚀 Important Note:** You don't need to wrap your entire application with the `SnackbarProvider` context. You can use it directly in any component by placing it inside the render method, such as the return statement in a function component or the render method in a class component.

```jsx
import React from 'react';
import { SnackbarProvider, enqueueSnackbar } from 'react-snackbars-stack';

function App() {
  const handleClick = () => {
    enqueueSnackbar({ 
      message: 'This is a snackbar message!', 
      severity: 'success'
    });
  };

  return (
    <>
      <SnackbarProvider /> {/* Check API for options */}
      <button onClick={handleClick}>Show Snackbar</button>
    </>
  );
}

export default App;
```

### Option 2: Using Hook

Wrap your root app or a specific parent app with the `SnackbarProvider` context. Import the hook in a child component to use the method to show snackbars.

```jsx
import React from 'react';
import { SnackbarProvider, useSnackbar } from 'react-snackbars-stack';

function MyComponent() {
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar({ 
      message: 'This is a snackbar message!', 
      severity: 'success'
    });
  };

  return (
    <>
      <button onClick={handleClick}>Show Snackbar</button>
    </>
  );
}

const App = () => (
  <SnackbarProvider>
    <MyComponent />
  </SnackbarProvider>
);

export default App;
```

## Screenshot

![screenshot](assets/screenshot.png)

## API

### `enqueueSnackbar` Method

The `enqueueSnackbar` method is used to show a snackbar notification. If there are already some snackbars being displayed, it adds the snackbar above or below the existing snackbars in the stack.

| Option           | Type    | Description                          | Default |
|------------------|---------|--------------------------------------|---------|
| message          | string  | The message to display               | -       |
| severity         | string  | The severity of the message          | 'info'  |
| preventDuplicate | boolean | Prevent duplicate messages           | false   |
| duration         | number  | Duration to show the snackbar (ms)   | 3000    |

### `SnackbarProvider` Component

The `SnackbarProvider` component is used to wrap your application and provide the snackbar context.

| Option           | Type    | Description                          | Default |
|------------------|---------|--------------------------------------|---------|
| maxSnackbars     | number  | Maximum number of snackbars to show  | 3       |
| autoHideDuration | number  | Duration to auto-hide the snackbar   | 3000    |
| icon             | boolean | Hide the icon in the snackbar        | true    |
| theme            | string  | Theme of the snackbar ('dark' or 'light') | 'light' |
| anchorOrigin     | object  | Position of the snackbar             | { vertical: 'bottom', horizontal: 'left' } |
| transitionType   | string  | Transition type for the snackbar ('slide', 'grow', 'fade', 'zoom') | 'slide' |

## TODO

- [x] Custom hook support
- [x] Theme switching (MUI based)
- [ ] Filled icons option
- [ ] Custom theming support
- [ ] Custom transitions

## Connect with Us

Feel free to reach out:
- [Twitter](https://x.com/heyKSR)
- [LinkedIn](https://www.linkedin.com/in/kishorjena)

## Contribution

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

