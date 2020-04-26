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
import ViewProducts from './components/ViewProducts';
import FulfillmentCard from './components/FulFillmentCard'
import axios from 'axios';
import Radar from 'radar-sdk-js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loggedIn: null,
      closestFarmersMarket: [],
    }
    this.setClosestFarmersMarket = this.setClosestFarmersMarket.bind(this);
  }

  setClosestFarmersMarket(longitude, latitude){
    this.setState({
      closestFarmersMarket: [longitude, latitude]
    })
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
      Radar.initialize("prj_test_pk_01a1c84daec7742d8edf59f59fbdfb5c31e98cf3");
      // Replace with user_id for dynamic
      Radar.setUserId("5ea571a5d8e6e70404208b14");
  
      Radar.setDescription("test user");
      Radar.searchGeofences({
        radius: 1000,
        tags: ['farmers market'],
        limit: 10
      }, (err, result) => {
        if (!err) {
          let latitude = (result.geofences[0].geometryCenter.coordinates[1]);
          let longitude = (result.geofences[0].geometryCenter.coordinates[0]);
          console.log(this);
          this.setClosestFarmersMarket(longitude, latitude);
          // this.setState({
          //   closestFarmersMarket:443
          // });
          console.log(result)
        }else{
          console.log(err);
        }
      });
  }

  render() {
    console.log(this.state.closestFarmersMarket);
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
          <Route path="/viewproducts">
            <ViewProducts loggedIn={loggedIn} user={user} />
          </Route>
          <Route path="/fulfillment">
            <FulfillmentCard loggedIn={loggedIn} user={user} arrOfOrders={"placeholder string"} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
