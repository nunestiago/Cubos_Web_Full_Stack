import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { SideBar } from '../components';
import { AuthProvider } from '../context/AuthContext';
import { AddProducts, Home, Login, Register, StoreProducts } from '../pages';

function Routes() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <SideBar>
            <Route path='/store' component={StoreProducts} />
            <Route path='/addproduct' component={AddProducts} />
          </SideBar>
          {/* 
          <Route path='/store/editproduct' component={EditProduct} />
          <Route path='/store/editstoreprofile' component={EditStoreProfile} />
          <Route path='/store/storeproducts' component={StoreProducts} />
        <Route path='/store/profile' component={StoreProfile} /> */}
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default Routes;
