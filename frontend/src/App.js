import React, { Component } from 'react';
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
import CustomerPickup from './components/CustomerPickup';
import PickupConfirmation from './components/PickupConfirmation';
import FulfillmentCard from './components/FulFillmentCard'
import axios from 'axios';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loggedIn: null
    }
  }

  componentDidMount() {
		axios
			.get("/auth/user")
			.then(response => {
				console.log(response.data);
				if (!!response.data.user) {
					console.log("THERE IS A USER");
					this.setState({
						loggedIn: true,
						user: response.data.user
					});
				} else {
					this.setState({
						loggedIn: false,
						user: null
					});
				}
			})
			.catch(err => {
				console.log(err)
			})
  }

  render() {
    const { loggedIn, user } = this.state;
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
            <ViewPurchase loggedIn={loggedIn} user={user} />
          </Route>
          <Route path="/customerpurchase">
            <CustomerPurchase loggedIn={loggedIn} user={user} />
          </Route>
          <Route path="/customerpickup">
            <CustomerPickup loggedIn={loggedIn} user={user} />
          </Route>
          <Route path="/pickupconfirmation">
            <PickupConfirmation loggedIn={loggedIn} user={user} />
          </Route>
          <Route path="/additems">
            <FarmerAddItems loggedIn={loggedIn} user={user} />
          </Route>
          <Route path="/fulfillment">
            <Header/>
            <FulfillmentCard arrOfOrders={"placeholder string"}/>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
