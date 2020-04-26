import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Header from './FarmerHeader';
import '../styles/FulFillmentCard.css'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {
  withStyles,
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '40px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    fontSize: '35px',
  },
}));

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText('#000'),
    backgroundColor: "#5EA270",
    float: 'right',
    fontSize: '20px',
  }
}))(Button);

// ******NEED PASSED DATA TO BE IN THIS FORMAT******
const testArr = [{ productName: 'oranges', soldQuantity: 10, parkingSpot: 'Z54', deliveryCode: '34234' },
{ productName: 'apples', soldQuantity: 52, parkingSpot: 'B34', deliveryCode: '6920' }
];
// ***************************************************

export default function FulFillmentCard() {
  // Keeping an array of completed tasks 
  const [finishedTasks, setFinishedTasks] = useState([]);
  const classes = useStyles();
  let ordersArr = testArr.map((order, i) => {
    // if task is already in completed task (checking by seeing if id in array) then have a disabled buttong
    if (finishedTasks.includes(i)) {
      return (
        <Grid item xs={12}>
          <Paper justify="space-evenly" className={classes.paper}>Deliver {order.soldQuantity} {order.productName} to parking spot #{order.parkingSpot}
            <span className='codeSpan'> <span className='code'>CODE: {order.deliveryCode}</span>
              <ColorButton
                id={i}
                className={classes.button}
                variant="contained"
                size='large'
                onClick={(e) => {
                  setFinishedTasks([...finishedTasks, i]);
                  console.log(finishedTasks)
                }}
                disabled
              >---Fulfilled---</ColorButton>
            </span>
          </Paper>
        </Grid>
      )
    } 
    // if task isnt complete yet, make a clickable button
    else {

      return (
        <Grid item xs={12}>
          <Paper justify="space-evenly" className={classes.paper}>Deliver {order.soldQuantity} {order.productName} to parking spot #{order.parkingSpot}
            <span className='codeSpan'> <span className='code'>CODE: {order.deliveryCode}</span>
              <ColorButton
                id={i}
                className={classes.button}
                variant="contained"
                size='large'
                onClick={(e) => {
                  setFinishedTasks([...finishedTasks, i]);
                }}
                disabled={false}
              >Fulfill Order</ColorButton>
            </span>
          </Paper>
        </Grid>
      )
    }
  })

  return (
    <div>
      <Header />
      <div className={classes.root}>
        <Grid container spacing={3}
          justify="space-evenly"
          alignItems="center"
        >
          {ordersArr}
        </Grid>
      </div>
    </div>
  );
}

// export default SimpleCard;