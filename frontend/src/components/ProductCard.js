import React from 'react';
import { Button, Card, CardHeader, Typography, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { borderRight } from '@material-ui/system';
import '../styles/ProductCard.css'
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      float: borderRight,
      paddingRight: '10px',
    },
  },
}));

function ProductCard(props) {
  const classes = useStyles();
  const { product } = props;
  return (
    <div className="FarmerCard">
      <Card raised={true}>
        <CardContent>
          <Typography variant="h4">
            {product.productName}
          </Typography>
          <Typography gutterBottom variant="body2">
            {product.productDescription}
          </Typography>
          <Typography variant="h5">
            Quantity
          </Typography>
          <Typography gutterBottom variant="body2">
            {product.quantity}
          </Typography>
          <Typography variant="h5">
            Price
          </Typography>
          <Typography gutterBottom variant="body2">
            ${product.price}
          </Typography>
          <div className="button_cont" align="center">
            <a
              className="editBtn"
              target="_blank"
              rel="nofollow noopener"
              onClick={() => {}}
            >Edit</a>
            {" "}
            <a
              className="deleteBtn"
              target="_blank"
              rel="nofollow noopener"
              onClick={() => { (props.deleteProduct(product.productName)) }}
            >Remove</a>
          </div>

        </CardContent>
      </Card>
    </div>
  );
}

export default ProductCard;