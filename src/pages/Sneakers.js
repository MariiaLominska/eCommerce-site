import ItemsGrid from "../components/ItemsGrid";
import { useSelector } from "react-redux";
import womensClothes from "../data/data";

export default function Sneakers() {
  const searchTerm = useSelector((state) => state.searchTermReducer);

  const filteredItems = womensClothes.filter(
    (item) =>
      item.category.includes("Sneakers") &&
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return <ItemsGrid womensClothes={filteredItems} />;
}
