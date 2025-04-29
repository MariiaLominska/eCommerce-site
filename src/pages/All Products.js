import ItemsGrid from "../components/ItemsGrid";

export default function AllProducts({
  womensClothes,
  favorite,
  toggleFavorite,
  searchTerm,
  cart,
  setCart,
}) {
  const filteredItems = womensClothes.filter(
    (item) =>
      item && item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <ItemsGrid
      womensClothes={filteredItems}
      favorite={favorite}
      toggleFavorite={toggleFavorite}
      cart={cart}
      setCart={setCart}
    />
  );
}
