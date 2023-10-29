// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
// import "./ProductDetail.css";

// const ProductDetail = () => {
//   const { productKey } = useParams();

//   const url =
//     "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON";
//   const [product, setProduct] = useState(null); // Initialize as null

//   useEffect(() => {
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => {
//         const product = data.find((pd) => pd.key === productKey);
//         setProduct(product);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, [productKey]);

//   const [cartProduct, setCartProduct] = useState([]);

//   // Function to add a product to the cart
//   const addToCart = () => {
//     if (product) { // Check if product is available
//       const newCart = [...cartProduct, product];
//       setCartProduct(newCart);
//       // console.log("Product added to cart");
//       // console.log(product);
//       alert(product.name + ' \nadded to cart')
//     }
//   };

//   return (
//     <div className="container">
//       {product ? (
//         <div className="card mb-3 card-body">
//           <img
//             src={product.img}
//             className="img-fluid img-thumbnail rounded mx-auto"
//             alt="..."
//           />
//           <div className="card-body">
//             <h5 className="card-title">{product.seller}</h5>
//             <p className="card-text">{product.name}</p>
//             <p className="card-text">
//               <small className="text-muted">
//                 <b>Only {product.stock} items left, Hurry UP!!</b>
//               </small>
//             </p>
//             <button onClick={addToCart} className="button">
//               <FontAwesomeIcon icon={faCartShopping} /> Add to Cart
//             </button>
//           </div>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default ProductDetail;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./ProductDetail.css";
import { useCart } from "../CartContext/CartContext"; // Import the useCart hook

const ProductDetail = () => {
  const { productKey } = useParams();
  const { addToCart } = useCart(); // Use the addToCart function from CartContext

  const url =
    "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON";
  const [product, setProduct] = useState(null);

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
    <div className="container">
      {product ? (
        <div className="card mb-3 card-body">
          <img
            src={product.img}
            className="img-fluid img-thumbnail rounded mx-auto"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{product.seller}</h5>
            <p className="card-text">{product.name}</p>
            <p className="card-text">
              <small className="text-muted">
                <b>Only {product.stock} items left, Hurry UP!!</b>
              </small>
            </p>
            <button onClick={() => addToCart(product)} className="button">
              <FontAwesomeIcon icon={faCartShopping} /> Add to Cart
            </button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetail;
