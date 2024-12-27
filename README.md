# React Snackbars Stack
A customizable and easy-to-use snackbar (toast) notification stack for React applications.

![alt text](<Frame 4.png>)

![alt text](image.png)

## Installation

Install the package using npm or yarn:

```bash
npm install react-snackbars-stack
# or
yarn add react-snackbars-stack
```

## Usage

Import the `SnackbarProvider` and wrap your application with it. Use the `useSnackbar` hook to show snackbars.

> **🚀 Important Note::** You don't need to wrap your entire application with the SnackbarProvider context. You can use it directly in any component by placing it inside the render method, such as the return statement in a function component or the render method in a class component
 
```jsx
import React from 'react';
import { SnackbarProvider, useSnackbar } from 'react-snackbars-stack';

function App() {
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar({ 
      message: 'This is a snackbar message!', 
      severity: 'success'
    });
  };

  return (
    <SnackbarProvider>
      <button onClick={handleClick}>Show Snackbar</button>
    </SnackbarProvider>
  );
}

export default App;
```

## API

### `enqueueSnackbar` Method

The `enqueueSnackbar` method is used to show a snackbar notification.

| Option   | Type   | Description                  | Default |
|----------|--------|------------------------------|---------|
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
| icon            | boolean | hide the icon in the snackbar       | true    |

#### TODO
- Add a custom hook `useSnackbar`

## Connect with Us
Feel free to reach out.
- [Twitter](https://x.com/heyKSR)
- [LinkedIn](https://www.linkedin.com/in/kishorjena)

## Contribution
Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

