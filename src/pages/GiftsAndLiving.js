import ItemsGrid from "../components/ItemsGrid";
// import { useSelector } from "react-redux";
import womensClothes from "../data/data";

export default function GiftsAndLiving({ searchTerm }) {
  // получаем состояние с помощью хука, параметром принимает функцию, а она
  // принимает уже состояние, из нее получаем переменную
  // const favorite = useSelector((state) => state.favoriteReducer.favorite);

  const filteredItems = womensClothes.filter(
    (item) =>
      item.category.includes("giftsandlivivng") &&
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <ItemsGrid
      womensClothes={filteredItems}
      // favorite={favorite}
      // toggleFavorite={toggleFavorite}
      // cart={cart}
      // setCart={setCart}
    />
  );
}
