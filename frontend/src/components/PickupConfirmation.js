import React from 'react';
import '../styles/PickupConfirmation.css'
import image from "../assets/image3.png";
import { Button } from '@material-ui/core'; 

function PickupConfirmation(props) {
  const { user } = props;
  return (
    <div>
      <div className="PickupConfirmation">
        <h1>Your goods will be delivered shortly!<br></br>Your unique code for pickup is:<br></br> {user.code}!</h1>
        <form>
            <Button variant="contained" color="secondary" onClick={() => {this.window.location.href = '/customerpurchasex'}}>Return To Discovery</Button>
        </form>
        <img className="farmer-image"src={image}></img>
      </div>
    </div>
  );
}
  
export default PickupConfirmation;