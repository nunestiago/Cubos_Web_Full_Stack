import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';

import theme from './config/theme';
import { Home } from './pages';
import Routes from './routes/Routes';

function App() {
  return (
    <Routes>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Home />
      </ThemeProvider>
    </Routes>
  );
}

export default App;
