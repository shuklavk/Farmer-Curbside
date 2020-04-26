import React from 'react';
import Header from './FarmerHeader';
import '../styles/FarmerAddItems.css'
import { Redirect } from 'react-router';
import axios from 'axios';

class FarmerAddItems extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      productName : '',
      productDescription :'',
      quantity : 0,
      price : 0,
      address:'',
    }
    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    e.preventDefault();
    const { productName, productDescription, quantity, price } = this.state;
    const { user } = this.props;
    console.log(user)
    axios.post(`/api/add/${user._id}`, {
      productName,
      productDescription,
      quantity,
      price,
      user
    }).then((res) => {
      if (res.statusCode === 200) {
        console.log('success');
        window.location.reload();
      }
    }).catch((err) => {
      console.log(err);
    })
  }

  onProductNameChange(value) {
    this.setState({
      productName: value,
    })
  }

  onProductAddressChange(value) {
    this.setState({
      address: value,
    })
  }

  onProductDescriptionChange(value) {
    this.setState({
      productDescription: value,
    })
  }

  onQuantityChange(value){
    this.setState({
      quantity: value,
    })
  }

  onPriceChange(value){
    this.setState({
      price: value,
    })
  }

  render() {
    const { user, loggedIn } = this.props;
    return (
      <div>
        {
          loggedIn === false
          ? (
            <Redirect to="/login" />
          )
          : null
        }
        {
          user
          ? (
            <div className="farmeradd">
              <Header />
              <form action="/" method="get" onSubmit={this.addItem}>
                <div className='inputSlot'>
                  <input type="text" id="productName" placeholder="Product Name" required onChange={(e) => { this.onProductNameChange(e.target.value) }} />
                </div>
                <div className='inputSlot'>
                  <input type="text" placeholder="Product Description" id="productDescription" required onChange={(e) => { this.onProductDescriptionChange(e.target.value) }} />
                </div>
                <div className='inputSlot'>
                  <input type="text" placeholder="Address" id="address" required onChange={(e) => { this.onProductAddressChange(e.target.value) }} />
                </div>
                <div className='inputSlot'>
                  <input type="number" placeholder="Quantity" id="quantity" required onChange={(e) => { this.onQuantityChange(e.target.value)}} />
                </div>
                <div className='inputSlot'>
                  <input type="number" min="0.00" max="10000.00" step="0.01" placeholder="Price (in dollars)" id="price" onChange={(e) => {this.onPriceChange(e.target.value)}} />
                </div>
                <div className='inputSlot'>
                  <input className='btn_1' type="submit" value="Add Product" onClick={this.addItem} />
                </div>
              </form>
            </div>
          )
          : null
        }
      </div>
    )
  }
}

export default FarmerAddItems;