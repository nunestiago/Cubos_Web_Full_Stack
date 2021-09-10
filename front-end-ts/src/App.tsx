import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';

import theme from './config/theme';
import Routes from './Routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
