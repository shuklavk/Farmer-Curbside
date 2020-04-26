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
                <div className="container">                
                    {
                        this.state.Purchases.map((data, index) => (
                            <Card className="mt-5">
                                <CardContent className="bg-danger text-light">
                                    <Typography variant="h4">{data.item.name} - Farmer {data.name}</Typography>
                                    <Typography variant="h5">${data.item.price}/each</Typography>
                                    <Typography variant="h5" className="text-dark">{data.item.description}</Typography>
                                    
                                </CardContent>
                                <CardActions className="bg-white mt-2 mb-2">
                                    <button onClick={() => this.removeItem(index)} className="btn btn-primary">Remove</button>
                                    <div className="float-right">
                                        <button onClick={() => this.decreaseQuantity(index)} className="btn btn-primary ml-5">-</button>
                                        <Typography variant="h5" style={{display: "inline-block"}} className="ml-2 mr-2">{data.item.quantity}</Typography>
                                        <button onClick={() => this.increaseQuantity(index)} className="btn btn-primary">+</button>
                                    </div>   
                                </CardActions>
                            </Card>
                        ))
                    }
                </div>
            </div>
        );
   }

}



export default ViewPurchase;