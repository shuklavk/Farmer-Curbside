import React, { Component } from 'react';
import FarmerCard from './FarmerCard';
import Header from './CustomerHeader';
import axios from 'axios';
import '../styles/CustomerPurchase.css'

class CustomerPurchase extends Component {
    constructor(props) {
      super(props);
      this.state = {
        farmerData: [],
        dataFetched: false
      }
    }
  
    fetchItems() {
      const { user } = this.props;
      if (user) {
        axios.get(`/api/showAll/items`)
        .then((res) => {
          console.log(res)
          this.setState({ dataFetched: true, productData: res.data.results[0].items })
        })
        .catch((err) => {
          console.log(err)
          this.setState({ dataFetched: true })
        })
      }
    }
  
    render() {
      const { farmerData, dataFetched } = this.state;
      const { user } = this.props;
      if (user && !dataFetched) {
        this.fetchItems();
      }
      return (
        <div>
          <Header />
          <div className="CustomerPurchase">
            {farmerData.map((farmer) => (<FarmerCard name={farmer.name} product={farmer.product} price={farmer.price}/>))}
          </div>
        </div>
      );
    }
}
  
export default CustomerPurchase;

    // let farmerData = [
    //   {
    //     name: "David",
    //     product: "Apples",
    //     price: 5.99,
    //   },
    //   {
    //     name: "Joe",
    //     product: "Tomatoes",
    //     price: 4.99,
    //   },{
    //     name: "Joe",
    //     product: "Pears",
    //     price: 4.99,
    //   },{
    //     name: "Joe",
    //     product: "Grapes",
    //     price: 4.99,
    //   },
    //   {
    //     name: "Joe",
    //     product: "Bananas",
    //     price: 4.99,
    //   },
    //   {
    //     name: "Joe",
    //     product: "Bananas",
    //     price: 4.99,
    //   },
    //   {
    //     name: "Joe",
    //     product: "Bananas",
    //     price: 4.99,
    //   },
    // ];