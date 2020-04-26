import React from 'react';
import { Button, Card, CardHeader, Typography, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { borderRight } from '@material-ui/system';
import '../styles/ProductCard.css'

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
          <div className="button_cont" align="center"><a className="editBtn" href="add-website-here" target="_blank" rel="nofollow noopener">Edit</a>
          {" "}
          <a className="deleteBtn" href="add-website-here" target="_blank" rel="nofollow noopener">Remove</a>
          </div>

        </CardContent>
      </Card>
    </div>
  );
}

export default ProductCard;