import React from 'react';
// import Apple from './Images/apples.jpg'
import { Button, Card, CardHeader, Typography, CardContent } from '@material-ui/core';
import '../styles/FarmerCard.css'
import Unsplash from 'unsplash-js';
import { toJson } from "unsplash-js";
import axios from 'axios';
import { useState } from 'react';
const unsplash = new Unsplash({
  accessKey: "8h9wdatDrugd4YLMhWPGyDl-QL2UBQnSrJ3Sn3GKoaU",
  secret: "nxRA_GcpDwKOMpj19ltHwkQ52VTyaEnbM7pbz98tUvA"
});



function FarmerCard(props) {
  console.log(props);
  const { item } = props;
  // const getImages = (search) => {
  //   unsplash.search.photos(search, 1, 20, { orientation: "landscape" })
  //     .then(toJson)
  //     .then(json => {
  //       setImageURL( json.results[0].urls.raw);
  //     });
  // }
  const [imageURL, setImageURL] = useState('');

  const makePurchase = () => {
    const { item, user } = props;
    axios.post(`/api/add/purchase/${user._id}`, {
      item_id: item._id,
      farmer_id: item.farmer._id,
      item: item,
      quantity: 1,
      readyPickup: false
    })
  }

  // getImages(item.productName);
  // console.log('HERE: ', imageURL);
  return (
    <div className="FarmerCard">
      <Card raised={true}>
        <CardHeader title={item.productName} subheader={`Supplied by: Farmer ${item.farmer.firstName} ${item.farmer.lastName}`} />
        {/* <img className='cardImage' src={imageURL}></img> */}
        <CardContent>
          <Typography gutterBottom variant="h4">
            {item.price}/{item.productName}
          </Typography>
          <button type="submit" className="btn btn-block btn-primary" onClick={() => makePurchase()}>Add to Cart</button>
        </CardContent>
      </Card>
    </div>
  );
}

export default FarmerCard;