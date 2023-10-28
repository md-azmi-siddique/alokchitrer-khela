import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import './ProductDetail.css'
// import FeatureProducts from "../FeatureProducts/FeatureProducts";

const ProductDetail = () => {
  const { productKey } = useParams();

  const url =
    "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON";
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
  console.log("this is" + product);

  return (
    <div className="container">
      <div className="card mb-3 card-body">
        <img src={product.img} className="img-fluid img-thumbnail rounded mx-auto" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.seller}</h5>
          <p className="card-text">{product.name}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              <b>Only {product.stock} items left, Hurry UP!!</b>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
