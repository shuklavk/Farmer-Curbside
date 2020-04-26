import React, { Component } from 'react';
import ProductCard from './ProductCard';
import Header from './FarmerHeader';
import axios from 'axios';
import '../styles/CustomerPurchase.css'

class ViewProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: [],
      dataFetched: false
    }
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  // PUT AXIOS DELETE CALL IN THIS FUNCTION 
  deleteProduct(productName){
    const { productData } = this.state;
    let deleteIndex = -1;
    for(let i = 0; i < productData.length; i++){
      if(productData[i].productName === productName){
        deleteIndex = i;
        break;
      }
    }
    if(deleteIndex>=0){
      this.setState({
        productData: this.state.productData.filter((_, i) => i !== deleteIndex)
      });
    }

  }

  fetchItems() {
    const { user } = this.props;
    if (user) {
      axios.get(`/api/showAll/items/${user._id}`)
        .then((res) => {
          console.log(res)
          this.setState({ dataFetched: true, productData: res.data.results !== undefined ? res.data.results[0].items : [] })
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
          {productData.map((product) => (
            <ProductCard
              product={product}
              deleteProduct ={this.deleteProduct} 
            />
            ))}
        </div>
      </div>
    );
  }
}

export default ViewProducts;