import React from "react";

const Android = (props) => {
  const { android } = props;
  return (
    <div className="container" style={{marginTop: '200px'}}>
      <h1 style={{textAlign:'left'}}>Android</h1>
      <div className="grid gap-x-8 gap-y-4 grid-cols-3">
        {android
          .filter((item) => item.category === "android")
          .map((item) => (
            <div>
              <div>
                <img src={item.img} alt="" />
                <h6>{item.name}</h6>
              </div>
              <div>
                <h6>Only {item.stock} items left</h6>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Android;
