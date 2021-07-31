import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';

import theme from './config/theme';
import { Register } from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Register />
    </ThemeProvider>
  );
}

export default App;
