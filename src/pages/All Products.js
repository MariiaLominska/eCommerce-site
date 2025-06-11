import ItemsGrid from "../components/ItemsGrid";
import womensClothes from "../data/data";
import { useSelector } from "react-redux";

export default function AllProducts() {
  const searchTerm = useSelector((state) => state.searchTermReducer);

  const filteredItems = womensClothes.filter(
    (item) =>
      item && item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return <ItemsGrid womensClothes={filteredItems} />;
}
