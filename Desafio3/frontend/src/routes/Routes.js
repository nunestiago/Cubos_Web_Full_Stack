import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { SideMenu } from '../components';
import { AddProducts, EditProduct, EditStoreProfile, Home, Login, Register, StoreProducts, StoreProfile } from '../pages';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/store' component={SideMenu} />
        <Route path='/store/addproduct' component={AddProducts} />
        <Route path='/store/editproduct' component={EditProduct} />
        <Route path='/store/editstoreprofile' component={EditStoreProfile} />
        <Route path='/store/storeproducts' component={StoreProducts} />
        <Route path='/store/profile' component={StoreProfile} />

        <Route path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default Routes;
