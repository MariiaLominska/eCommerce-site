import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import womensClothes from "../data/data";

export default function ItemPage() {
  const dispatch = useDispatch();

  const toggleFavorite = (itemId) => {
    dispatch({ type: "favorite", payload: itemId });
  };

  const cart = useSelector((state) => state.cartReducer);

  // стейт для получения/изменения информации из URL, это объект
  const [searchParams, setSearchParams] = useSearchParams();

  // вытягиваем из URL страницы данные (/product/Winter%20Coat?id=1&color=black&size=S)
  const currentId = searchParams.get("id");
  const currentColor = searchParams.get("color");
  const currentSize = searchParams.get("size");

  const currentItem = womensClothes.find((item) => {
    return item.id == currentId;
  });

  const { title, price, size, details, image, color, materials, id } =
    currentItem;

  const [colorChange, setColorChange] = useState(currentColor);
  const [sizeChange, setSizeChange] = useState(currentSize);
  const [amountChange, setAmountChange] = useState(1);

  // изменение и цвета товара, и цвета в URL
  const handleColorChange = (e) => {
    setSearchParams((prev) => {
      const chosenColor = e.target.value;
      setColorChange(chosenColor);
      const newParams = new URLSearchParams(prev);
      newParams.set("color", chosenColor);
      return newParams;
    });
  };

  const handleSizeChange = (e) => {
    const chosenSize = e.target.value;
    setSizeChange(chosenSize);
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.set("size", chosenSize);
      return newParams;
    });
  };

  const handleAmountChange = (e) => {
    setAmountChange(e.target.value);
  };

  // получаем состояние с помощью хука, параметром принимает функцию, а она
  // принимает уже состояние, из нее получаем переменную
  const favorite = useSelector((state) => state.favoriteReducer.favorite);

  const isCarted = cart[currentId];
  const isFavorited = favorite.includes(id);

  if (!currentItem) return <div>Product not found</div>;

  // для кнопки заказа - она Disabled если цвет, размер и количество товара в корзине соответствует стейтам
  // цвета, размера и количества

  const isDisabled =
    cart[id]?.color == colorChange &&
    cart[id]?.size == sizeChange &&
    cart[id]?.amount === amountChange;

  return (
    <div className="item-page">
      <div className="item-page-image-wrapper">
        <img src={image} alt={title} className="item-page-image" />
        <label
          className={`item-page-fav-btn ${
            isFavorited && "item-page-fav-btn-active"
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
      </div>
      <div className="item-page-info">
        <h3 className="item-page-title">{title}</h3>
        <p className="item-page-price">{price} UAH</p>
        <p className="item-page-details">{details}</p>
        <p className="item-page-materials">Materials: {materials.join(", ")}</p>
        <div className="item-page-pickers-wrapper">
          <div className="item-page-size-picker-wrapper item-page-size-picker-wrapper">
            <label htmlFor="item-size">Select Size:</label>
            <select
              className="item-size item-page-size"
              id="item-size"
              onChange={handleSizeChange}
              value={sizeChange}
            >
              {size.map((sizeInfo, index) => (
                <option key={index} value={sizeInfo}>
                  {sizeInfo}
                </option>
              ))}
            </select>
          </div>
          <div className="item-page-color-picker-wrapper item-page-color-picker-wrapper">
            <label htmlFor="item-color">Select Color:</label>
            <select
              className="item-color item-page-color"
              id="item-color"
              value={colorChange}
              onChange={handleColorChange}
            >
              {color.map((colorInfo, index) => (
                <option key={index} value={colorInfo}>
                  {colorInfo}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="item-amount-wrapper item-page-amount-wrapper">
          <span className="item-amount-text" htmlFor="item-amount">
            Amount:
          </span>
          <input
            type="number"
            className="item-amount-input"
            id="item-amount"
            min={1}
            value={amountChange}
            onChange={handleAmountChange}
          />
        </div>
        <button
          className="add-to-cart-button item-page-add-to-cart-button"
          disabled={isDisabled}
          onClick={() => {
            dispatch({
              type: "addToCart",
              payload: {
                id,
                title,
                price,
                size: `${sizeChange ? sizeChange : currentSize}`,
                color: `${colorChange ? colorChange : currentColor}`,
                amount: amountChange,
              },
            });
          }}
        >
          {/*  isDisabled - проверка на соответствие цвета и размера в корзине и в карточке товара */}
          {isCarted
            ? isDisabled
              ? "In Cart"
              : "Change item in cart"
            : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
