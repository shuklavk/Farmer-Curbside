import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import ViewPurchase from './components/ViewPurchase';
import CustomerPurchase from './components/CustomerPurchase';
import FarmerAddItems from './components/FarmerAddItems';
import Header from './components/Header';
import CustomerPickup from './components/CustomerPickup';
import PickupConfirmation from './components/PickupConfirmation';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/viewpurchase">
          <ViewPurchase />
        </Route>
        <Route path="/customerpurchase">
          <CustomerPurchase />
        </Route>
        <Route path="/customerpickup">
          <CustomerPickup />
        </Route>
        <Route path="/pickupconfirmation">
          <PickupConfirmation />
        </Route>
        <Route path="/additems">
          <Header />
          <FarmerAddItems />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
