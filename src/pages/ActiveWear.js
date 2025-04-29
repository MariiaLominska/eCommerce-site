import ItemsGrid from "../components/ItemsGrid";

export default function ActiveWear({
  womensClothes,
  favorite,
  toggleFavorite,
  searchTerm,
  cart,
  setCart,
}) {
  const filteredItems = womensClothes.filter(
    (item) =>
      item.category.includes("activewear") &&
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
