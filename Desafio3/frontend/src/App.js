import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';

import { LoggedBar } from './components';
import theme from './config/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LoggedBar />
    </ThemeProvider>
  );
}

export default App;
