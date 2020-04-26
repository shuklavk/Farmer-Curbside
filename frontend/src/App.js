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
import FulfillmentCard from './components/FulFillmentCard';

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
        <Route path="/additems">
          <Header />
          <FarmerAddItems />
        </Route>
        <Route path="/fulfill">
          <Header/>
          <FulfillmentCard />
          {/* <FulfillmentCard /> */}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
