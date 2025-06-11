import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Favorite from "./components/Favorite";
import Clothing from "./pages/Clothing";
import Shoes from "./pages/Shoes";
import Accessories from "./pages/Accessories";
import ActiveWear from "./pages/ActiveWear";
import GiftsAndLiving from "./pages/GiftsAndLiving";
import Inspiration from "./pages/Inspiration";
import NewCollection from "./pages/NewCollection";
import Cart from "./pages/Cart";
import AllProducts from "./pages/All Products";
import ItemPage from "./pages/ItemPage";
import Coats from "./pages/Coats";
import Dresses from "./pages/Dresses";
import Sneakers from "./pages/Sneakers";
import Jeans from "./pages/Jeans";
import Pumps from "./pages/Pumps";
import Boots from "./pages/Boots";

export default function RouterMapping({ searchTerm }) {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:productId" element={<ItemPage />} />
      <Route path="/products" element={<AllProducts></AllProducts>} />
      <Route path="/favorites" element={<Favorite />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/new-in" element={<NewCollection />} />

      <Route path="/clothing" element={<Clothing />} />
      <Route path="/coats" element={<Coats />} />
      <Route path="/dresses" element={<Dresses />} />
      <Route path="/jeans" element={<Jeans />} />
      <Route path="/shoes" element={<Shoes />} />
      <Route path="/sneakers" element={<Sneakers />} />
      <Route path="/pumps" element={<Pumps />} />
      <Route path="/boots" element={<Boots />} />
      <Route
        path="/accessories"
        element={<Accessories searchTerm={searchTerm} />}
      />
      <Route
        path="/activewear"
        element={<ActiveWear searchTerm={searchTerm} />}
      />
      <Route
        path="/gifts-living"
        element={<GiftsAndLiving searchTerm={searchTerm} />}
      />
      <Route
        path="inspiration"
        element={<Inspiration searchTerm={searchTerm} />}
      />
    </Routes>
  );
}
