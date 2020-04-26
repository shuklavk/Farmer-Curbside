import React, { Component } from 'react';
import ProductCard from './ProductCard';
import Header from './FarmerHeader';
import axios from 'axios';
import '../styles/CustomerPurchase.css'

class ViewProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: [],
      dataFetched: false
    }
  }

  fetchItems() {
    const { user } = this.props;
    if (user) {
      axios.get(`/api/showAll/items/${user._id}`)
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
    const { productData, dataFetched } = this.state;
    const { user } = this.props;
    if (user && !dataFetched) {
      this.fetchItems();
    }

    return (
      <div>
        <Header />
        <div className="CustomerPurchase">
          {productData.map((product) => (<ProductCard name={product.productName} description={product.productDescription} quantity={product.quantity} price={product.price}/>))}
        </div>
      </div>
    );
  }
}
  
export default ViewProducts;