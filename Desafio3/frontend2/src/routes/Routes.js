import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { SideBar } from '../components';
import { AddProducts, Home, Login, Register, StoreProducts } from '../pages';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <SideBar>
          <Route path='/store' component={AddProducts} />
          <Route path='/addproduct' component={StoreProducts} />
        </SideBar>
        <Route path='/' component={Home} />
        {/* 
        <Route path='/store/editproduct' component={EditProduct} />
        <Route path='/store/editstoreprofile' component={EditStoreProfile} />
        <Route path='/store/storeproducts' component={StoreProducts} />
        <Route path='/store/profile' component={StoreProfile} /> */}
      </Switch>
    </Router>
  );
}

export default Routes;
