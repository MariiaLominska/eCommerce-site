import React from "react";
import trash from "../images/icons/trash.svg";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CartItem({ cartedItem }) {
  const { title, price, size, image, color, id } = cartedItem;
  const dispatch = useDispatch();

  const toggleFavorite = (itemId) => {
    dispatch({ type: "favorite", payload: itemId });
  };

  const cart = useSelector((state) => state.cartReducer);
  // const cartString = localStorage.getItem("cart");
  // const cart = JSON.parse(cartString) || {};

  const deleteFromCart = () => {
    dispatch({ type: "deleteFromCart", payload: { id } });
  };

  const changeAmountInCart = (e) => {
    dispatch({ type: "changeAmount", payload: { amount: e.target.value, id } });
  };

  const changeSizeInCart = (e) => {
    dispatch({ type: "changeSize", payload: { size: e.target.value, id } });
  };

  const changeColorInCart = (e) => {
    dispatch({ type: "changeColor", payload: { color: e.target.value, id } });
  };

  const isFavorited = useSelector((state) =>
    state.favoriteReducer.favorite.includes(id)
  );
  return (
    <div className="item-card" id={id}>
      <Link
        to={`/product/${title}?id=${id}&color=${cart[id].color}&size=${cart[id].size}`}
      >
        <div className="item-card-stop-propogation"></div>
      </Link>
      <button className="delete-from-cart-button" onClick={deleteFromCart}>
        <div className="delete-from-cart-button-img-wrapper">
          <img src={trash} alt="delete from cart"></img>
        </div>
      </button>
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
      <div className="item-amount-wrapper">
        <span className="item-amount-text" htmlFor="item-amount">
          Amount:
        </span>
        <input
          type="number"
          value={cart[id]?.amount}
          className="item-amount-input"
          id="item-amount"
          min={1}
          onChange={changeAmountInCart}
        />
      </div>

      <div className="item-card-size-picker-wrapper">
        <label htmlFor="item-size">Select Size:</label>
        <select
          value={cart[id]?.size}
          className="item-size"
          id="item-size"
          onChange={changeSizeInCart}
        >
          {size.map((sizeInfo, index) => (
            <option key={index} value={sizeInfo}>
              {sizeInfo}
            </option>
          ))}
        </select>
      </div>

      <div className="item-card-color-picker-wrapper">
        <label htmlFor="item-color">Select Color:</label>
        <select
          value={cart[id].color}
          className="item-color"
          id="item-color"
          onChange={changeColorInCart}
        >
          {color.map((colorInfo, index) => (
            <option key={index} value={colorInfo}>
              {colorInfo}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default React.memo(CartItem);
