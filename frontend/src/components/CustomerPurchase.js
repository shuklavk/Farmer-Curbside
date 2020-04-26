import React from 'react';
import FarmerCard from './FarmerCard';
import '../styles/CustomerPurchase.css'
import CustomerHeader from '../components/CustomerHeader';

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
        <CustomerHeader />
        {farmerData.map((farmer) => (<FarmerCard name={farmer.name} product={farmer.product} price={farmer.price}/>))}
      </div>
    );
}
  
export default CustomerPurchase;