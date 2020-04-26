import React from 'react';
import { Redirect } from 'react-router-dom';
import '../styles/PickupConfirmation.css';
import image from "../assets/image3.png";
import Header from "../components/CustomerHeader";
import { Button } from '@material-ui/core'; 

function PickupConfirmation(props) {
  const { user, loggedIn } = props;
  console.log(user)
  return (
    <div>
      {
        loggedIn === false
        ? (
          <Redirect to="/login" />
        )
        : null
      }
      {
        user !== null
        ? (
          <div className="PickupConfirmation">
            <h1>Your goods will be delivered shortly!<br></br>Your unique code for pickup is:<br></br> {user.code}!</h1>
            <form>
                <Button variant="contained" color="secondary" onClick={() => {this.window.location.href = '/customerpurchasex'}}>Return To Discovery</Button>
            </form>
            <img className="farmer-image"src={image}></img>
          </div>
        )
        : null
      }
    </div>
  );
}
  
export default PickupConfirmation;