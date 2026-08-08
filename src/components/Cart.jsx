
import React from "react";

import {
  Link,
} from "react-router-dom";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import {
  clearCart,
} from "../redux/CartSlice";

import CartItems from "./CartItems";

import "./Cart.css";


function Cart() {

  const dispatch = useDispatch();


  /* =====================================================
     GET CART ITEMS FROM REDUX
     ===================================================== */

  const items = useSelector(
    (state) => state.cart.items
  );


  /* =====================================================
     TOTAL NUMBER OF ITEMS
     ===================================================== */

  const totalItems = items.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );


  /* =====================================================
     TOTAL PRICE
     ===================================================== */

  const totalPrice = items.reduce(
    (total, item) =>
      total +
      Number(item.price) *
      item.quantity,
    0
  );


  /* =====================================================
     EMPTY CART
     ===================================================== */

  if (items.length === 0) {

    return (

      <main className="cart-page">


        {/* NAVIGATION */}

        <nav className="cart-navbar">

          <Link
            to="/"
            className="cart-brand"
          >

            <span>
              🌿
            </span>

            Paradise Nursery

          </Link>


          <div className="cart-nav-links">

            <Link to="/">
              Home
            </Link>


            <Link to="/plants">
              Plants
            </Link>


            <Link
              to="/cart"
              className="active-cart-link"
            >
              🛒 Cart
            </Link>

          </div>

        </nav>


        {/* EMPTY CART */}

        <section className="empty-cart-container">

          <div className="empty-cart-icon">
            🛒
          </div>


          <span className="empty-cart-leaf">
            🌱
          </span>


          <h1>
            Your Cart is Empty
          </h1>


          <p>
            Your little piece of paradise is
            waiting for some beautiful plants.
          </p>


          <p className="empty-cart-subtext">
            Explore our collection and find
            the perfect plant for your space.
          </p>


          <Link
            to="/plants"
            className="shop-now-button"
          >

            🌿 Explore Plants

            <span>
              →
            </span>

          </Link>

        </section>


      </main>

    );

  }


  /* =====================================================
     SHOPPING CART WITH ITEMS
     ===================================================== */

  return (

    <main className="cart-page">


      {/* =================================================
          NAVIGATION
          ================================================= */}

      <nav className="cart-navbar">

        <Link
          to="/"
          className="cart-brand"
        >

          <span>
            🌿
          </span>

          Paradise Nursery

        </Link>


        <div className="cart-nav-links">

          <Link to="/">
            Home
          </Link>


          <Link to="/plants">
            Plants
          </Link>


          <Link
            to="/cart"
            className="active-cart-link"
          >

            🛒 Cart ({totalItems})

          </Link>

        </div>

      </nav>


      {/* =================================================
          PAGE HEADER
          ================================================= */}

      <header className="cart-page-header">

        <span className="cart-small-title">
          🌱 YOUR PLANT COLLECTION
        </span>


        <h1>
          Your Shopping Cart
        </h1>


        <p>
          Your selected plants are ready
          to find a new home.
        </p>

      </header>


      {/* =================================================
          CART CONTENT
          ================================================= */}

      <section className="cart-content">


        {/* =================================================
            CART ITEMS
            ================================================= */}

        <div className="cart-items-section">


          <div className="items-header">

            <div>

              <h2>
                Your Plants
              </h2>


              <span>

                {totalItems}{" "}

                {totalItems === 1
                  ? "plant"
                  : "plants"}

              </span>

            </div>


            {/* CLEAR CART */}

            <button
              type="button"
              className="clear-cart-button"
              onClick={() =>
                dispatch(clearCart())
              }
            >

              🗑 Clear Cart

            </button>

          </div>


          {/* =================================================
              CART ITEM COMPONENTS
              ================================================= */}

          <div className="cart-items">

            {items.map((item) => (

              <CartItems
                key={item.id}
                item={item}
              />

            ))}

          </div>


          {/* CONTINUE SHOPPING */}

          <Link
            to="/plants"
            className="continue-shopping"
          >

            ← Continue Shopping

          </Link>


        </div>


        {/* =================================================
            ORDER SUMMARY
            ================================================= */}

        <aside className="order-summary">


          <div className="summary-decoration">
            🌿
          </div>


          <h2>
            Order Summary
          </h2>


          <p className="summary-subtitle">
            A little more green for your home.
          </p>


          <div className="summary-details">


            {/* NUMBER OF PLANTS */}

            <div className="summary-row">

              <span>
                Plants
              </span>

              <strong>
                {totalItems}
              </strong>

            </div>


            {/* SUBTOTAL */}

            <div className="summary-row">

              <span>
                Subtotal
              </span>

              <strong>
                ${totalPrice.toFixed(2)}
              </strong>

            </div>


            {/* DELIVERY */}

            <div className="summary-row">

              <span>
                Delivery
              </span>

              <strong className="free-delivery">
                FREE
              </strong>

            </div>


          </div>


          <div className="summary-divider"></div>


          {/* FINAL TOTAL */}

          <div className="summary-total">

            <span>
              Total
            </span>

            <strong>
              ${totalPrice.toFixed(2)}
            </strong>

          </div>


          {/* CHECKOUT */}

          <button
            type="button"
            className="checkout-button"
            onClick={() =>
              alert(
                "Thank you for shopping with Paradise Nursery! 🌿"
              )
            }
          >

            Proceed to Checkout

            <span>
              →
            </span>

          </button>


          <div className="secure-checkout">

            🔒 Secure & Safe Checkout

          </div>


        </aside>


      </section>


    </main>

  );

}


export default Cart;

