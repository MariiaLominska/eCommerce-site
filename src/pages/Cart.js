import OrderWrapper from "../components/OrderWrapper";
import ItemsGrid from "../components/ItemsGrid";

import data from "../data/data";

export default function Cart({
  cart,
  setCart,
  favorite,
  toggleFavorite,
  searchTerm,
}) {
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

      <ItemsGrid
        womensClothes={cartedItems}
        favorite={favorite}
        toggleFavorite={toggleFavorite}
        cart={cart}
        setCart={setCart}
        // inCart - карточка добавлена в карт, у нее будет рисоваться
        // крестик для удаления ее из cart
        inCart={true}
      />
      {Object.keys(cart).length >= 1 && (
        <OrderWrapper cart={cart}></OrderWrapper>
      )}
    </div>
  );
}
