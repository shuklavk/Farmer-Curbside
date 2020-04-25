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
        <Router path="/customerpurchases">
          <CustomerPurchase />
        </Router>
      </Switch>
    </Router>
  );
}

export default App;
