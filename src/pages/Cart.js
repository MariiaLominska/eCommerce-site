import OrderWrapper from "../components/OrderWrapper";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import data from "../data/data";

export default function Cart() {
  const cart = useSelector((state) => state.cartReducer);
  // const cartString = localStorage.getItem("cart");
  // const cart = JSON.parse(cartString) || {};
  const searchTerm = useSelector((state) => state.searchTermReducer);

  const cartedItems = data.filter(
    (item) =>
      cart[item.id] &&
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="cart-title">
        {Object.keys(cart).length <= 0 && (
          <h2 className="cart-title">
            Your Cart is empty. The items you add will appear here.
          </h2>
        )}
        {Object.keys(cart).length >= 1 && (
          <h2 className="cart-title">Your Cart</h2>
        )}
      </div>

      {Object.keys(cart).length >= 1 && (
        <div className="products-box">
          {cartedItems.map((cartedItem) => {
            return <CartItem cartedItem={cartedItem} />;
          })}
        </div>
      )}
      {Object.keys(cart).length >= 1 && (
        <OrderWrapper cart={cart}></OrderWrapper>
      )}
    </div>
  );
}
