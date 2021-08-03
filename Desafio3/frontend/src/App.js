import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';

import { LoggedMenu } from './components';
import theme from './config/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LoggedMenu />
    </ThemeProvider>
  );
}

export default App;
