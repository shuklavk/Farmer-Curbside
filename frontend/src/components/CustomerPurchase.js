import React from 'react';
import FarmerCard from './FarmerCard';
import '../styles/CustomerPurchase.css'

function CustomerPurchase() {
    let farmerData = [
      {
        name: "David",
        product: "Apples",
        price: 5.99,
      },
      {
        name: "Joe",
        product: "Bananas",
        price: 4.99,
      },
    ];
    return (
      <div className="CustomerPurchase">
        {farmerData.map((farmer) => (<FarmerCard name={farmer.name} product={farmer.product} price={farmer.price}/>))}
      </div>
    );
}
  
export default CustomerPurchase;