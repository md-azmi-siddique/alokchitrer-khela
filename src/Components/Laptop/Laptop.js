import React from "react";
import "./Laptop.css";
import { Link } from "react-router-dom";

const Laptop = (props) => {
  const { laptop } = props;
  console.log(props)
  return (
    <div className="container">
      <div className="laptopProduct">
          <h1 style={{textAlign:'left'}}>Laptop</h1>
        <div className="row">
          {laptop
          .filter((item) => item.category === "laptop") // Filter items with the category "laptop"
          .map((item) => (
            <div className="col-6 col-md-3" key={item.key}>
              <div className="card h-100">
                <img src={item.img} class="card-img-top img-fluid rounded" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.seller}</h5>
                  <p className="card-text">
                    {item.name}
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary">
                    Available: {item.stock} items
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Laptop;
