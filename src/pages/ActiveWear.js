import ItemsGrid from "../components/ItemsGrid";
import { useSelector } from "react-redux";
import womensClothes from "../data/data";

export default function ActiveWear() {
  // получаем состояние с помощью хука, параметром принимает функцию, а она
  // принимает уже состояние, из нее получаем переменную
  const searchTerm = useSelector((state) => state.favoriteReducer);

  const filteredItems = womensClothes.filter(
    (item) =>
      item.category.includes("activewear") &&
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return <ItemsGrid womensClothes={filteredItems} />;
}
