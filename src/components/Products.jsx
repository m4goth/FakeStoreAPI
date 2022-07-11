import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="products-container" key={product.id} className="card">

      {loading && (
        <div>
          {" "}
          <h1>Loading...</h1>
        </div>
      )}
      
      {data.map((product)=> ( 
        <div className="card-description">           
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              
              <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt=""
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {`Preço: ${product.price}`}
                </br>
                {`Categoria: ${product.category}`}
                </Typography>
              </CardContent>
              
            </CardActionArea>
          </Card>
        </div>
      );    
    </div>    
};

export default Products;