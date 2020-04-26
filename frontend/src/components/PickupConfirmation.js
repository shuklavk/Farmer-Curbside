import React from 'react';
import '../styles/PickupConfirmation.css'
import image from "../assets/image3.png";
import { Button } from '@material-ui/core'; 

function PickupConfirmation() {
    return (
      <div className="PickupConfirmation">
        <h1>Your goods will be delivered shortly!<br></br>Your unique code for pickup is:<br></br> A3B6!</h1>
        <form>
            <Button variant="contained" color="secondary">Return To Discovery</Button>
        </form>
        <img className="farmer-image"src={image}></img>
      </div>
    );
}
  
export default PickupConfirmation;