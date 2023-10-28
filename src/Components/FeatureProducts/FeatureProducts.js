import React from "react";
import "./FeatureProducts.css";
import { Link } from "react-router-dom";

const FeatureProducts = (props) => {
  const { featureItem } = props;
  // console.log(featureItem)

  return (
    <>
      <div className="container">
        <h1>Featured Products</h1>
        <div className="d-flex flex-row mb-3 justify-content-center align-content-start flex-wrap">
          <div className="row row-cols-4 g-4">
            {featureItem.slice(20, 60).map((item) => (
              <div className="col col-6 col-md-3">
                <div className="card h-100">
                  <img src={item.img} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.seller}</h5>
                    <p className="card-text">
                    <Link to={'/product/'+item.key}>{item.name}</Link>
                    </p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted"><b>Price: {item.price}</b></small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureProducts;
