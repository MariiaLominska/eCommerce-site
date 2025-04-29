import womensClothes from "../data/data";
import ItemsGrid from "./ItemsGrid";

export default function Favorite({
  favorite,
  toggleFavorite,
  cart,
  setCart,
  searchTerm,
}) {
  const favoritedItems = womensClothes.filter(
    (item) =>
      favorite.includes(item.id) &&
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="favorites-title">
        {favorite.length <= 0 ? (
          <h1 className="favorites-title">
            Your list is empty. May be it's time for shopping?
          </h1>
        ) : (
          <h1 className="favorites-title">Your list of favorite products</h1>
        )}
      </div>

      <ItemsGrid
        womensClothes={favoritedItems}
        favorite={favorite}
        toggleFavorite={toggleFavorite}
        cart={cart}
        setCart={setCart}
        searchTerm={searchTerm}
      />
    </div>
  );
}
