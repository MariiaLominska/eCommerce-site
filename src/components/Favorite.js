import womensClothes from "../data/data";
import ItemsGrid from "./ItemsGrid";
import { useSelector } from "react-redux";

export default function Favorite() {
  const favorite = useSelector((state) => state.favoriteReducer.favorite);
  const searchTerm = useSelector((state) => state.searchTermReducer);

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

      <ItemsGrid womensClothes={favoritedItems} searchTerm={searchTerm} />
    </div>
  );
}
