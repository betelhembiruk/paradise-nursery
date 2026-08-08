
import React from "react";
import { useDispatch } from "react-redux";

import {
  removeItem,
  updateQuantity,
} from "../redux/CartSlice";

import "./Cart.css";


function CartItem({ item }) {

  const dispatch = useDispatch();


  /* =====================================================
     DECREASE QUANTITY
     ===================================================== */

  const handleDecrease = () => {

    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity - 1,
      })
    );

  };


  /* =====================================================
     INCREASE QUANTITY
     ===================================================== */

  const handleIncrease = () => {

    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );

  };


  /* =====================================================
     REMOVE ITEM
     ===================================================== */

  const handleRemove = () => {

    dispatch(
      removeItem(item.id)
    );

  };


  /* =====================================================
     ITEM TOTAL
     ===================================================== */

  const itemTotal =
    Number(item.price) *
    item.quantity;


  return (

    <article className="cart-item-card">


      {/* =================================================
          PRODUCT IMAGE
          ================================================= */}

      <div className="cart-product-image">

        {item.image ? (

          <img
            src={item.image}
            alt={item.name}
          />

        ) : (

          <span>
            🌱
          </span>

        )}

      </div>


      {/* =================================================
          PRODUCT INFORMATION
          ================================================= */}

      <div className="cart-product-info">

        <span className="cart-product-category">

          {item.category ||
            "Indoor Plant"}

        </span>


        <h3>
          {item.name}
        </h3>


        <p>

          {item.description ||
            "Beautiful plant for your home."}

        </p>


        <strong className="cart-product-price">

          ${Number(item.price).toFixed(2)}

        </strong>

      </div>


      {/* =================================================
          QUANTITY CONTROLS
          ================================================= */}

      <div className="quantity-section">

        <span>
          Quantity
        </span>


        <div className="quantity-controls">


          <button
            type="button"
            onClick={handleDecrease}
            aria-label={`Decrease ${item.name} quantity`}
          >
            −
          </button>


          <strong>
            {item.quantity}
          </strong>


          <button
            type="button"
            onClick={handleIncrease}
            aria-label={`Increase ${item.name} quantity`}
          >
            +
          </button>


        </div>

      </div>


      {/* =================================================
          ITEM TOTAL
          ================================================= */}

      <div className="cart-item-total">

        <span>
          Total
        </span>


        <strong>

          $
          {itemTotal.toFixed(2)}

        </strong>


        <button
          type="button"
          className="remove-item-button"
          onClick={handleRemove}
        >
          Remove
        </button>

      </div>


    </article>

  );

}


export default CartItem;

