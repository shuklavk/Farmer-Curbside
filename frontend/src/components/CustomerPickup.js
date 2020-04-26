import React from 'react';
import '../styles/CustomerPickup.css'
import image from "../assets/image8.png";
import { Button } from '@material-ui/core'; 

function CustomerPickup() {
    return (
      <div className="CustomerPickup">
        <h1>Thank you for your purchase!<br></br>What Parking Space are you located at?</h1>
        <form>
            <input className="customer-input"></input>
            <br></br>
            <Button variant="contained" color="secondary">Submit</Button>
        </form>
        <img className="cart-image"src={image}></img>
      </div>
    );
}
  
export default CustomerPickup;