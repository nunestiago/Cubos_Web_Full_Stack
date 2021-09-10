import { createContext, useContext, useState } from 'react';

export const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const [products, setProducts] = useState('');
  // TODO deslogar

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}

function useProducts() {
  const { products, setProducts } = useContext(ProductsContext);
  return { products, setProducts };
}

export { ProductsProvider, useProducts };
