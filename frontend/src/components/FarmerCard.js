import React from 'react';
import { Button, Card, CardHeader, Typography, CardContent } from '@material-ui/core'; 

function FarmerCard(props) {
    return (
      <div className="FarmerCard">
        <Card raised={true}>
          <CardHeader title={props.product} subheader={`Supplied by: Farmer ${props.name}`} />
          <CardContent>
            <Typography gutterBottom variant="h4">
              {props.price}/{props.product}
            </Typography>
            <Button variant="contained" color="secondary">Add to Cart</Button>
          </CardContent>
        </Card>
      </div>
    );
}
  
export default FarmerCard;