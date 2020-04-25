import React from 'react';
// import Apple from './Images/apples.jpg'
import { Button, Card, CardHeader, Typography, CardContent } from '@material-ui/core'; 

function FarmerCard({farmerData}) {
    return (
      <div className="FarmerCard">
        <Card>
          <CardHeader title={farmerData.product} subheader={`Supplied by: Farmer ${farmerData.name}`} />
          {/* <img src={Apple} height='250px' alt="apples"></img> */}
          <CardContent>
            <Typography gutterBottom variant="h4">
              {farmerData.price}/{farmerData.product}
            </Typography>
            <Button variant="contained" color="secondary">Add to Cart</Button>
          </CardContent>
        </Card>
      </div>
    );
}
  
export default FarmerCard;