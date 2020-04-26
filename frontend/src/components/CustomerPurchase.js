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
          this.setState({ dataFetched: true, farmerData: res.data.results !== undefined ? res.data.results : [] })
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
            {farmerData.map((item, index) => {
              return (<FarmerCard item={item} user={user} />)
            })}
          </div>
        </div>
      );
    }
}
  
export default CustomerPurchase;