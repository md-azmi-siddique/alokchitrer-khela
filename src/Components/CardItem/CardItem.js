import React from "react";
import "./CardItem.css";

const CardItem = (props) => {
  const { cardItemList } = props;
  // console.log(cardItemList);

  return (
    <div className="container ">
      <div className="heading">
        <h5>Featured Category</h5>
        <h6>Get Your Desired Product from Featured Category!</h6>
      </div>

      <div className="container">
        <div class="d-flex flex-row mb-3 justify-content-center align-content-start flex-wrap">
          {
            cardItemList.slice(1,10).map(item => 
              <div class="p-2 sm-2 category">
                <img src={item.img} alt="" />
                <h5>{item.seller}</h5>
              </div>
              )
          }
        </div>
      </div>
    </div>
  );
};

export default CardItem;
