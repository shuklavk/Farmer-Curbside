import React from 'react';
import { Button, Card, CardHeader, Typography, CardContent } from '@material-ui/core'; 

function ProductCard(props) {
  return (
    <div className="FarmerCard">
      <Card raised={true}>
        <CardContent>
          <Typography variant="h4">
            {props.name}
          </Typography>
          <Typography gutterBottom variant="body2">
            {props.description}
          </Typography>
          <Typography variant="h5">
            Quantity
          </Typography>
          <Typography gutterBottom variant="body2">
            {props.quantity}
          </Typography>
          <Typography variant="h5">
            Price
          </Typography>
          <Typography gutterBottom variant="body2">
            ${props.price}
          </Typography>
          {/* <Button variant="contained" color="secondary">Add to Cart</Button> */}
        </CardContent>
      </Card>
    </div>
  );
}
  
export default ProductCard;