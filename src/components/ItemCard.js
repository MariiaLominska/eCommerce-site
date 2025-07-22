import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function ItemCard({ title, price, size, image, color, id }) {
  const dispatch = useDispatch();

  const toggleFavorite = (itemId) => {
    dispatch({ type: "favorite", payload: itemId });
  };

  const isFavorited = useSelector((state) =>
    state.favoriteReducer.favorite.includes(id)
  );

  const cart = useSelector((state) => state.cartReducer);

  // const cartString = localStorage.getItem("cart");
  // const cart = JSON.parse(cartString) || {};

  const isCarted = cart[id];

  return (
    <div className="item-card" id={id}>
      <Link to={`/product/${title}?id=${id}&color=${color[0]}&size=${size[0]}`}>
        <div className="item-card-stop-propogation"></div>
      </Link>
      <label
        className={`card-product-fav-btn ${
          isFavorited && "card-product-fav-btn-active"
        }`}
        htmlFor={`isFavorited${id}`}
      >
        <svg
          width="15"
          height="14"
          viewBox="0 0 15 14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7.85293 2.23726L8.42959 1.64303C9.74052 0.290397 11.8283 0.101266 13.2084 1.27703C14.824 2.65601 14.9109 5.13801 13.4608 6.63449L7.79659 12.4831C7.62714 12.658 7.35815 12.658 7.18871 12.4831L1.5246 6.63459C0.0772874 5.1381 0.164165 2.65614 1.77968 1.27715C3.15989 0.101085 5.25089 0.291 6.55863 1.64303L7.13529 2.23726L7.49411 2.607L7.85293 2.23726Z" />
        </svg>

        <input
          className="visually-hidden"
          type="checkbox"
          id={`isFavorited${id}`}
          // проверка состояния
          checked={isFavorited}
          onChange={() => toggleFavorite(id)}
        ></input>
      </label>
      <h3 className="item-title">{title}</h3>
      <div className="item-card-box-img">
        <img className="item-image" src={image} alt={title} />
      </div>
      <p className="item-card-info">{price} UAH</p>
      <div className="item-card-top-info">
        <p>Available sizes: {size.join(", ")}</p>
        <p>Available colors: {color.join(", ")}</p>
      </div>
      <button
        className="add-to-cart-button"
        onClick={() => {
          // меняется стейт корзины, возвращается старый стейт + id и количество товаров, которое добавили,
          // нажав на кнопку
          dispatch({
            type: "addToCart",
            payload: {
              id,
              title,
              price,
              size: [size[0]],
              color: [color[0]],
              amount: 1,
            },
          });
        }}
      >
        {isCarted ? "In Cart" : "Add to Cart"}
      </button>
    </div>
  );
}

export default React.memo(ItemCard);
