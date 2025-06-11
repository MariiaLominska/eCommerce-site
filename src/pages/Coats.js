import ItemsGrid from "../components/ItemsGrid";
import { useSelector } from "react-redux";
import womensClothes from "../data/data";

export default function Coats() {
  const searchTerm = useSelector((state) => state.searchTermReducer);

  const filteredItems = womensClothes.filter(
    (item) =>
      item.category.includes("Coats") &&
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return <ItemsGrid womensClothes={filteredItems} />;
}
