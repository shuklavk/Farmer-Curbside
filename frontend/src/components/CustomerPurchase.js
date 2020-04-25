import React from 'react';
import FarmerCard from './FarmerCard';

function CustomerPurchase() {
  const data = {
    farmerData: [
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
    ]
  }
    return (
      <div className="CustomerPurchase">
        {farmerData.map(farmer => (<FarmerCard data={data} />))}
      </div>
    );
}
  
export default CustomerPurchase;