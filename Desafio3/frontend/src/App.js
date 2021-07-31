import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';

import { LoggedBar } from './components';
import theme from './config/theme';
import { Register } from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LoggedBar />
      <Register />
    </ThemeProvider>
  );
}

export default App;
