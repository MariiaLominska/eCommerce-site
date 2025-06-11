import ItemsGrid from "../components/ItemsGrid";
import { useSelector } from "react-redux";
import womensClothes from "../data/data";

export default function Accessories() {
  // получаем состояние с помощью хука, параметром принимает функцию, а она
  // принимает уже состояние, из нее получаем переменную
  const searchTerm = useSelector((state) => state.searchTermReducer);

  const filteredItems = womensClothes.filter(
    (item) =>
      item.category.includes("accessories") &&
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return <ItemsGrid womensClothes={filteredItems} />;
}
