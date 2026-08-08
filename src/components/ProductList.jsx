
import React from "react";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import { Link } from "react-router-dom";

import { addItem } from "../redux/CartSlice";

import "./ProductList.css";


const plants = [

  {
    id: 1,
    name: "Snake Plant",
    category: "Indoor Plants",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae1bb8?auto=format&fit=crop&w=600&q=80",
    description:
      "A beautiful, low-maintenance plant that is perfect for bedrooms and offices.",
  },

  {
    id: 2,
    name: "Peace Lily",
    category: "Indoor Plants",
    price: 22,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80",
    description:
      "An elegant flowering plant that adds freshness and beauty to any room.",
  },

  {
    id: 3,
    name: "Monstera",
    category: "Tropical Plants",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80",
    description:
      "A popular tropical plant with large, distinctive leaves and a bold appearance.",
  },

  {
    id: 4,
    name: "Aloe Vera",
    category: "Succulents",
    price: 18,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
    description:
      "A useful and attractive succulent that thrives with minimal care.",
  },

  {
    id: 5,
    name: "Golden Pothos",
    category: "Indoor Plants",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1614594575836-4b6c0e5a6f68?auto=format&fit=crop&w=600&q=80",
    description:
      "A fast-growing trailing plant with beautiful green and golden leaves.",
  },

  {
    id: 6,
    name: "ZZ Plant",
    category: "Indoor Plants",
    price: 28,
    image:
      "https://images.unsplash.com/photo-1632207691148-8e3b7a1a6f2c?auto=format&fit=crop&w=600&q=80",
    description:
      "A hardy plant with glossy leaves that is excellent for beginners.",
  },

  {
    id: 7,
    name: "Rubber Plant",
    category: "Indoor Plants",
    price: 30,
    image:
      "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=600&q=80",
    description:
      "A striking indoor plant known for its large, glossy green leaves.",
  },

  {
    id: 8,
    name: "Calathea",
    category: "Tropical Plants",
    price: 32,
    image:
      "https://images.unsplash.com/photo-1616768105538-7b3c7e6d8c2a?auto=format&fit=crop&w=600&q=80",
    description:
      "A decorative tropical plant with beautiful patterned foliage.",
  },

];


function ProductList() {

  const dispatch = useDispatch();


  const cartItems = useSelector(
    (state) => state.cart.items
  );


  const getQuantity = (plantId) => {

    const item = cartItems.find(
      (item) => item.id === plantId
    );

    return item
      ? item.quantity
      : 0;

  };


  const handleAddToCart = (plant) => {

    dispatch(
      addItem(plant)
    );

  };


  return (

    <main className="product-list-page">


      {/* =====================================================
          HEADER
          ===================================================== */}

      <section className="products-header">

        <div className="products-brand">
          🌿 PARADISE NURSERY
        </div>


        <h1>
          Our Plant Collection
        </h1>


        <p>
          Discover beautiful plants carefully
          selected to bring nature, freshness,
          and life into your space.
        </p>

      </section>


      {/* =====================================================
          SHOPPING CART LINK
          IMPORTANT:
          Link prevents full page reload
          ===================================================== */}

      <div className="cart-bar">

        <span>

          🌱 {cartItems.length}{" "}

          {cartItems.length === 1
            ? "plant"
            : "plants"}

          {" "}in your cart

        </span>


        <Link
          to="/cart"
          className="view-cart-button"
        >

          🛒 View Cart

        </Link>

      </div>


      {/* =====================================================
          PRODUCT LISTING
          ===================================================== */}

      <section className="product-grid">

        {plants.map((plant) => {

          const quantity =
            getQuantity(plant.id);


          return (

            <article
              className="product-card"
              key={plant.id}
            >


              {/* IMAGE */}

              <div className="product-image-container">

                <img
                  src={plant.image}
                  alt={plant.name}
                  className="product-image"
                />


                <span className="category-badge">

                  {plant.category}

                </span>

              </div>


              {/* INFORMATION */}

              <div className="product-info">

                <h2>
                  {plant.name}
                </h2>


                <p className="product-description">

                  {plant.description}

                </p>


                <div className="product-bottom">


                  <span className="product-price">

                    ${plant.price.toFixed(2)}

                  </span>


                  <button
                    className="add-cart-button"
                    onClick={() =>
                      handleAddToCart(plant)
                    }
                  >

                    {quantity > 0
                      ? `Added (${quantity})`
                      : "Add to Cart"}

                  </button>


                </div>

              </div>


            </article>

          );

        })}

      </section>


    </main>

  );

}


export default ProductList;

