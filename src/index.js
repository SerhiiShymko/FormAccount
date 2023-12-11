import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { App } from './components/App';
import { GlobalStyle } from './components/GlobalStyle';

const theme = {
  colors: {
    black: '#212121',
    white: '#fff',
    success: 'green',
    warning: 'orange',
    error: 'red',
  },
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
