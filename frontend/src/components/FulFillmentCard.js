import React, { Component } from 'react';
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
import axios from 'axios';
import {
  withStyles,
} from "@material-ui/core/styles";

const styles = theme => ({
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
});

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

class FulFillmentCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      purchases: [],
      dataFetched: false
    }
  }

  fetchItems() {
    const { user } = this.props;
    axios.get(`/api/showAll/purchasesReady/${user._id}`)
    .then((res) => {
        console.log(res);
        this.setState({ dataFetched: true, purchases: res.data.results !== undefined ? res.data.results : [] });
    })
    .catch((err) => {
        console.log(err);
        this.setState({ dataFetched: true });
    })
  }

  fulfillOrder(index) {
    const { purchases } = this.state;
    const purchase = purchases[index];
    axios.post(`/api/add/purchase/${purchase.buyer_id}`, {
      item_id: purchase.item_id,
      farmer_id: purchase.farmer_id,
      item: purchase.item,
      fulfilled: true
    }).then((res) => {
      console.log(res);
      this.fetchItems()
    }).catch((err) => {
      console.log(err);
    })
  }

  render() {
    const { classes } = this.props;
    const { purchases, dataFetched } = this.state;
    const { user } = this.props;
    if (user && !dataFetched) {
      this.fetchItems();
    }
    
    return (
      <div>
        <Header />
        <div className={classes.root}>
          <Grid container spacing={3} 
            // direction="column"
            justify="space-evenly"
            alignItems="center"
          >
            {purchases.map((purchase, index) => {
              return (
                <Grid item xs={12}>
                  <Paper justify="space-evenly" className={classes.paper}>Deliver {purchase.quantity} {purchase.item.productName} to parking spot #{purchase.parkingSpot}      
                  <span className='codeSpan'> <span className= 'code'>CODE: {purchase.buyer[0].code}</span>
                  <ColorButton className = {classes.button} variant="contained" size='large' onClick={() => { this.fulfillOrder(index) }}>Fulfill Order</ColorButton>
                  </span>
                  </Paper>
                </Grid>
              )
            })}
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(FulFillmentCard);