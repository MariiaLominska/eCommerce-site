import React, { useState } from "react";
import trash from "../images/icons/trash.svg";
import { Link } from "react-router-dom";

function ItemCard({
  category,
  title,
  price,
  size,
  details,
  image,
  color,
  materials,
  favorite,
  id,
  toggleFavorite,
  isFavorited,
  cart = {},
  setCart,
  inCart,
}) {
  const isCarted = cart[id];

  function deleteFromCart() {
    // нельзя напрямую менять стейт, его нужно деструктуризировать,
    // создавая его копию, и уже оттуда удаляя товар по его id
    setCart((prev) => {
      const newState = { ...prev };
      delete newState[id];
      return newState;
    });
  }

  return (
    <div className="item-card" id={id}>
      <Link to={`/product/${title}?id=${id}&color=${color[0]}&size=${size[0]}`}>
        <div className="item-card-stop-propogation"></div>
      </Link>
      {inCart && (
        <button
          className="delete-from-cart-button"
          onClick={(e) => {
            deleteFromCart();
          }}
        >
          <img src={trash} alt="delete from cart"></img>
        </button>
      )}
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
      {!inCart && (
        <div className="item-card-top-info">
          <p>Available sizes: {size.join(", ")}</p>
          <p>Available colors: {color.join(", ")}</p>
        </div>
      )}
      {inCart && (
        <div className="item-amount-wrapper">
          <span className="item-amount-text" htmlFor="item-amount">
            Amount:
          </span>
          <input
            type="number"
            value={cart[id].amount}
            className="item-amount-input"
            id="item-amount"
            min={1}
            onChange={(e) => {
              // идем в старый стейт корзины, ищем в нем по [id] эту конкретную карточку, не трогаем старый стейт,
              // а дописываем к нему в нужнй ид новую информацию из селекта в поле amount
              setCart((prev) => {
                return {
                  ...prev,
                  [id]: { ...prev[id], amount: e.target.value },
                };
              });
            }}
          />
        </div>
      )}
      {inCart && (
        <div className="item-card-size-picker-wrapper">
          <label htmlFor="item-size">Select Size:</label>
          <select
            value={cart[id].size}
            className="item-size"
            id="item-size"
            onChange={(e) => {
              // идем в старый стейт корзины, ищем в нем по [id] эту конкретную карточку, не трогаем старый стейт,
              // а дописываем к нему в нужнй ид новую информацию из селекта в поле size
              setCart((prev) => {
                return {
                  ...prev,
                  [id]: { ...prev[id], size: e.target.value },
                };
              });
            }}
          >
            {size.map((sizeInfo, index) => (
              <option key={index} value={sizeInfo}>
                {sizeInfo}
              </option>
            ))}
          </select>
        </div>
      )}
      {inCart && (
        <div className="item-card-color-picker-wrapper">
          <label htmlFor="item-color">Select Color:</label>
          <select
            value={cart[id].color}
            className="item-color"
            id="item-color"
            onChange={(e) => {
              // идем в старый стейт корзины, ищем в нем по [id] эту конкретную карточку, не трогаем старый стейт,
              setCart((prev) => {
                return {
                  // а дописываем к нему в нужный id новую информацию из селекта в поле color
                  ...prev,
                  [id]: { ...prev[id], color: e.target.value },
                };
              });
            }}
          >
            {color.map((colorInfo, index) => (
              <option key={index} value={colorInfo}>
                {colorInfo}
              </option>
            ))}
          </select>
        </div>
      )}
      {!inCart && (
        <button
          className="add-to-cart-button"
          onClick={(e) => {
            // меняется стейт корзины, возвращается старый стейт + id и количество товаров, которое добавили,
            // нажав на кнопку
            setCart((prev) => {
              return {
                ...prev,
                [id]: {
                  title,
                  price,
                  size: [size[0]],
                  color: [color[0]],
                  amount: 1,
                },
              };
            });
          }}
        >
          {isCarted ? "In Cart" : "Add to Cart"}
        </button>
      )}
    </div>
  );
}

export default React.memo(ItemCard);
