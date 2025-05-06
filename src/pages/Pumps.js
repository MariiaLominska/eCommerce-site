import ItemsGrid from "../components/ItemsGrid";

export default function Pumps({
  womensClothes,
  favorite,
  toggleFavorite,
  searchTerm,
  cart,
  setCart,
}) {
  const filteredItems = womensClothes.filter(
    (item) =>
      item.category.includes("Pumps") &&
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
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
