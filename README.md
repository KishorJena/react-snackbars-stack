# React Snackbars Stack
A customizable and easy-to-use snackbar (toast) notification stack for React applications.

![alt text](./Frame%204.png)

![alt text](./image.png)

## Installation

Install the package using npm or yarn:

```bash
npm install react-snackbars-stack
# or
yarn add react-snackbars-stack
```

## Usage
#### Option 1: Direct use
Import the `SnackbarProvider` and wrap your application with it. Use the `useSnackbar` hook to show snackbars.

> **🚀 Important Note:** You don't need to wrap your entire application with the SnackbarProvider context. You can use it directly in any component by placing it inside the render method, such as the return statement in a function component or the render method in a class component

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
      <SnackbarProvider/> // check API for options
      <button onClick={handleClick}>Show Snackbar</button>
    </>
  );
}

export default App;
```
#### Option 2 : hook
Wrap your Root App or specific parent app with context Provider. Import hook in child component to use method to show snackbars.
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
      <button onClick={handleClick}>
        Show Snackbar
      </button>
    </>
  );
}

const App = () => (
  <SnackbarProvider>
    <MyComponent/>
  </SnackbarProvider>
)
export default App;
```
## API

### `enqueueSnackbar` Method

The `enqueueSnackbar` method is used to show a snackbar notification. If there are already some snackbars being displayed, it adds the snackbar above or below the existing snackbars in the stack.

| Option          | Type    | Description                          | Default |
|-----------------|---------|--------------------------------------|---------|
| message         | string  | The message to display               | -       |
| severity        | string  | The severity of the message          | 'info'  |
| preventDuplicate| boolean | Prevent duplicate messages           | false   |
| duration        | number  | Duration to show the snackbar (ms)   | 3000    |

### `SnackbarProvider` Component

The `SnackbarProvider` component is used to wrap your application and provide the snackbar context.

| Option          | Type    | Description                        | Default |
|-----------------|---------|------------------------------------|---------|
| maxSnackbars    | number  | Maximum number of snackbars to show | 3       |
| autoHideDuration| number  | Duration to auto-hide the snackbar  | 3000    |
| icon            | boolean | Hide the icon in the snackbar       | true    |
| theme           | string  | Theme of the snackbar ('dark' or 'light') | 'light' |
| anchorOrigin    | object  | Position of the snackbar            | { vertical: 'bottom', horizontal: 'left' } |
| transitionType  | string  | Transition type for the snackbar ('slide', 'grow', 'fade', 'zoom') | 'slide' |

#### TODO
- [x] Custom hook support
- [ ] Custom themes support
- [ ] Freedom of content design
- [ ] Freedom to customise the transitions

## Connect with Us
Feel free to reach out.
- [Twitter](https://x.com/heyKSR)
- [LinkedIn](https://www.linkedin.com/in/kishorjena)

## Contribution
Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

