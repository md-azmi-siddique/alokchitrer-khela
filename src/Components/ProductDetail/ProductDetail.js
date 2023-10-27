import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import FeatureProducts from "../FeatureProducts/FeatureProducts";

const ProductDetail = () => {

  const { productKey } = useParams();
  
  const url = "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON";
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const product = data.find((pd) => pd.key === productKey);
        setProduct(product);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [productKey]);

  return (
    <div>
      {/* <h1>{productKey} Details</h1> */}
      {product ? <FeatureProducts showAddToCart={true} product={product} /> : <p>Loading...</p>}
    </div>
  );
}


export default ProductDetail;
