import { CssBaseline, ThemeProvider } from '@material-ui/core';

import theme from './config/theme';
import { ProductsProvider } from './context/ProductContext';
import Routes from './routes/Routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ProductsProvider>
        <CssBaseline />
        <Routes />
      </ProductsProvider>
    </ThemeProvider>
  );
}

export default App;
