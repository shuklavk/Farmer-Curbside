import React from 'react';
// import Apple from './Images/apples.jpg'
import { Button, Card, CardHeader, Typography, CardContent } from '@material-ui/core';
import '../styles/FarmerCard.css'
import Unsplash from 'unsplash-js';
import { toJson } from "unsplash-js";
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

  // getImages(item.productName);
  // console.log('HERE: ', imageURL);
  return (
    <div className="FarmerCard">
      <Card>
        <CardHeader title={item.productName} subheader={`Supplied by: Farmer ${item.farmer.firstName} ${item.farmer.lastName}`} />
        {/* <img className='cardImage' src={imageURL}></img> */}
        <CardContent>
          <Typography gutterBottom variant="h4">
            {item.price}/{item.productName}
          </Typography>
          <Button variant="contained" color="secondary">Add to Cart</Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default FarmerCard;