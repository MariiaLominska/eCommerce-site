export default function OrderWrapper({ cart }) {
  return (
    <div className="order-wrapper">
      <div className="bill">
        <div className="bill-title-wrapper">
          <h2>Your order</h2>
        </div>
        <div className="bill-info">
          <ul>
            {Object.values(cart).map((cartItem) => {
              const { title, price, amount, color, size } = cartItem;
              return (
                <li>
                  <div className="order-field">
                    <div className="title-field">
                      {title}, {color}, {size}
                    </div>
                    <div className="price-field">
                      {amount == 1
                        ? `${price} UAH`
                        : `${amount} * ${price} UAH = ${amount * price} UAH`}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="total-price-field">
            Total price is:{" "}
            {Object.values(cart).reduce((acc, item) => {
              return acc + item.price * item.amount;
            }, 0)}{" "}
            UAH
          </div>
        </div>
        <button className="add-to-cart-button order-button">
          Make an order
        </button>
      </div>
    </div>
  );
}
