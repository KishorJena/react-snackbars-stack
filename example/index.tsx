import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Thing } from '../.';
console.log('index.ts Run')
const App = () => {
  console.log('App.tsx Run')
  return (
    <div style={{ padding: 20 }}>
      <Thing />
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