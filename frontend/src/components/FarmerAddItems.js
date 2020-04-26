import React from 'react';
import '../styles/FarmerAddItems.css'

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

  render(){
    return (
      <div className="farmeradd">
        <form action="/" method="get" onSubmit={() => console.log('yeet')}>
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
            <input className='btn_1' type="submit" value="Add Product" />
          </div>
        </form>
      </div>
    )
  }
}

export default FarmerAddItems;