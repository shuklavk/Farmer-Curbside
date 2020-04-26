import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../styles/custom.scss';

class ViewPurchase extends Component {

    constructor(props){
        super(props);
        this.state = {
            Purchases: [
                {
                    name: "David",
                    item: {
                        name: "Apples",
	                    description: "Crab Apples grown from my farm in Riverside, California.",
	                    price: "5.99",
	                    quantity: "10"
                    },
                    readyForPickup: false
                },
                {
                    name: "Joe",
                    item: {
                        name: "Banana",
	                    description: "Crab Bananas grown from my farm in Riverside, California.",
                        price: 4.99,
	                    quantity: 5
                    },
                    readyForPickup: false
                }
            ]
        }
    }

    decreaseQuantity(index){
        const { Purchases } = this.state;
        Purchases[index].item.quantity--;
        this.setState({ Purchases });
    }
    
    increaseQuantity(index){
        const { Purchases } = this.state;
        Purchases[index].item.quantity++;
        this.setState({ Purchases });
    }
    
    removeItem(index){
        const { Purchases } = this.state;
        delete Purchases[index];
        this.setState({ Purchases });
    }

    render(){
        return (
            <div className="ViewPurchase"> 
            {
                this.state.Purchases.map((data, index) => (
                    <Card class="bg-light">
                        <CardContent>
                            <Typography variant="h4">{data.item.name} - Farmer {data.name}</Typography>
                            <Typography variant="h5">${data.item.price}/each</Typography>
                            <Typography variant="h5" color="textSecondary">{data.item.description}</Typography>
                            <Button onClick={() => this.decreaseQuantity(index)} className="btn btn-primary">-</Button>
                            <Typography variant="h5" style={{display: "inline-block"}}>{data.item.quantity}</Typography>
                            <Button onClick={() => this.increaseQuantity(index)} className="btn btn-primary">+</Button>
                        </CardContent>
                        <CardActions>
                            <Button onClick={() => this.removeItem(index)} size="small">Remove</Button>
                        </CardActions>
                    </Card>
                ))
            }
            </div>
        );
   }

}



export default ViewPurchase;