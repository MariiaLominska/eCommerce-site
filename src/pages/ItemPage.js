import { useSearchParams, useParams } from "react-router-dom";
import { useState } from "react";

export default function ItemPage({
  womensClothes,
  favorite,
  toggleFavorite,
  searchTerm,
  cart,
  setCart,
}) {
  const [searchParams] = useSearchParams();

  // вытягиваем из URL страницы данные
  const currentId = searchParams.get("id");
  const currentColor = searchParams.get("color");
  const currentSize = searchParams.get("size");

  const currentItem = womensClothes.find((item) => {
    return item.id == currentId;
  });

  const { title, price, size, details, image, category, color, materials, id } =
    currentItem;

  const { productId } = useParams();

  // начальный стейт - цвет из URL
  const [colorChange, setColorChange] = useState(currentColor);

  const handleColorChange = (e) => {
    setColorChange(e.target.value);
  };

  const [sizeChange, setSizeChange] = useState(currentSize);

  const handleSizeChange = (e) => {
    setSizeChange(e.target.value);
  };

  const [amountChange, setAmountChange] = useState(1);

  const handleAmountChange = (e) => {
    setAmountChange(e.target.value);
  };

  const isCarted = cart[currentId];
  const isFavorited = favorite.includes(id);

  if (!currentItem) return <div>Product not found</div>;

  // для кнопки заказа - она Disabled если цвет, размер и количество товара в корзине соответствует стейтам
  // цвета, размера и количества
  const isDisabled =
    cart[id]?.color === colorChange &&
    cart[id]?.size === sizeChange &&
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
          onClick={(e) => {
            console.log("click");
            // меняется стейт корзины, возвращается старый стейт + id и количество товаров, которое добавили,
            // нажав на кнопку
            setCart((prev) => {
              return {
                ...prev,
                [id]: {
                  title,
                  price,
                  size: sizeChange,
                  color: colorChange,
                  amount: amountChange,
                },
              };
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
