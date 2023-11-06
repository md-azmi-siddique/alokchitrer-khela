import React from "react";
import "./CardItem.css";
import { Link } from "react-router-dom";
import battery from "../../Assets/images/ProductCategory/battery.png";
import adapter from "../../Assets/images/ProductCategory/adapter.png";
import cleaningAccessories from "../../Assets/images/ProductCategory/wipe.png";
import filter from "../../Assets/images/ProductCategory/filter.png";
import phoneAccessories from "../../Assets/images/ProductCategory/holder.png";
import cardBox from "../../Assets/images/ProductCategory/cardboard.png";
import ledLight from "../../Assets/images/ProductCategory/led.png";
import strap from "../../Assets/images/ProductCategory/cameraStrap.png";

const CardItem = (props) => {
  const { cardItemList } = props;
  // console.log(cardItemList);

  return (
    <div className="container">
      <div className="categoryItem">
        <h5>Featured Category</h5>
        <h6>Get Your Desired Product from Featured Category!</h6>
        <br></br>
        <div className="d-flex flex-row mb-3 justify-content-center align-content-start flex-wrap productCategory">
          <Link to="/battery">
            <div className="p-2 sm-2 category">
              <img src={battery} alt="" />
              <h5>Battery</h5>
            </div>
          </Link>
          <Link to="/adapter">
            <div className="p-2 sm-2 category">
              <img src={adapter} alt="" />
              <h5>Charger</h5>
            </div>
          </Link>
          <Link to="/cleaningAccessories">
            <div className="p-2 sm-2 category">
              <img src={cleaningAccessories} alt="" />
              <h5>Cleaning Accessories</h5>
            </div>
          </Link>
          <Link to="/filter">
            <div className="p-2 sm-2 category">
              <img src={filter} alt="" />
              <h5>Filter</h5>
            </div>
          </Link>
          <Link to="/phoneAccessories">
            <div className="p-2 sm-2 category">
              <img src={phoneAccessories} alt="" />
              <h5>Phone Accessories</h5>
            </div>
          </Link>
          <Link to="/storage">
            <div className="p-2 sm-2 category">
              <img src={cardBox} alt="" />
              <h5>Storage</h5>
            </div>
          </Link>
          <Link to="/ledLight">
            <div className="p-2 sm-2 category">
              <img src={ledLight} alt="" />
              <h5>Led Light</h5>
            </div>
          </Link>
          <Link to="/strap">
            <div className="p-2 sm-2 category">
              <img src={strap} alt="" />
              <h5>Strap</h5>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
