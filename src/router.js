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

export default function RouterMapping({
  womensClothes,
  favorite,
  toggleFavorite,
  searchTerm,
  cart,
  setCart,
}) {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/product/:productId"
        element={
          <ItemPage
            womensClothes={womensClothes}
            favorite={favorite}
            toggleFavorite={toggleFavorite}
            searchTerm={searchTerm}
            cart={cart}
            setCart={setCart}
          />
        }
      />
      <Route
        path="/products"
        element={
          <AllProducts
            womensClothes={womensClothes}
            favorite={favorite}
            toggleFavorite={toggleFavorite}
            searchTerm={searchTerm}
            cart={cart}
            setCart={setCart}
          ></AllProducts>
        }
      />
      <Route
        path="/favorites"
        element={
          <Favorite
            favorite={favorite}
            toggleFavorite={toggleFavorite}
            cart={cart}
            setCart={setCart}
            searchTerm={searchTerm}
          />
        }
      ></Route>
      <Route
        path="/cart"
        element={
          <Cart
            cart={cart}
            setCart={setCart}
            favorite={favorite}
            toggleFavorite={toggleFavorite}
            searchTerm={searchTerm}
          />
        }
      ></Route>
      <Route
        path="/newcollection"
        element={
          <NewCollection
            womensClothes={womensClothes}
            favorite={favorite}
            toggleFavorite={toggleFavorite}
            searchTerm={searchTerm}
            cart={cart}
            setCart={setCart}
          />
        }
      />

      <Route
        path="/clothing"
        element={
          <Clothing
            womensClothes={womensClothes}
            favorite={favorite}
            toggleFavorite={toggleFavorite}
            searchTerm={searchTerm}
            cart={cart}
            setCart={setCart}
          />
        }
      />
      <Route
        path="/coats"
        element={
          <Coats
            womensClothes={womensClothes}
            favorite={favorite}
            toggleFavorite={toggleFavorite}
            searchTerm={searchTerm}
            cart={cart}
            setCart={setCart}
          />
        }
      />
      <Route
        path="/dresses"
        element={
          <Dresses
            womensClothes={womensClothes}
            favorite={favorite}
            toggleFavorite={toggleFavorite}
            searchTerm={searchTerm}
            cart={cart}
            setCart={setCart}
          />
        }
      />
      <Route
        path="/jeans"
        element={
          <Jeans
            womensClothes={womensClothes}
            favorite={favorite}
            toggleFavorite={toggleFavorite}
            searchTerm={searchTerm}
            cart={cart}
            setCart={setCart}
          />
        }
      />
      <Route
        path="/shoes"
        element={
          <Shoes
            womensClothes={womensClothes}
            favorite={favorite}
            toggleFavorite={toggleFavorite}
            searchTerm={searchTerm}
            cart={cart}
            setCart={setCart}
          />
        }
      />
      <Route
        path="/sneakers"
        element={
          <Sneakers
            womensClothes={womensClothes}
            favorite={favorite}
            toggleFavorite={toggleFavorite}
            searchTerm={searchTerm}
            cart={cart}
            setCart={setCart}
          />
        }
      />
      <Route
        path="/pumps"
        element={
          <Pumps
            womensClothes={womensClothes}
            favorite={favorite}
            toggleFavorite={toggleFavorite}
            searchTerm={searchTerm}
            cart={cart}
            setCart={setCart}
          />
        }
      />
      <Route
        path="/boots"
        element={
          <Boots
            womensClothes={womensClothes}
            favorite={favorite}
            toggleFavorite={toggleFavorite}
            searchTerm={searchTerm}
            cart={cart}
            setCart={setCart}
          />
        }
      />
      <Route
        path="/accessories"
        element={
          <Accessories
            womensClothes={womensClothes}
            favorite={favorite}
            toggleFavorite={toggleFavorite}
            searchTerm={searchTerm}
            cart={cart}
            setCart={setCart}
          />
        }
      />
      <Route
        path="/activewear"
        element={
          <ActiveWear
            womensClothes={womensClothes}
            favorite={favorite}
            toggleFavorite={toggleFavorite}
            searchTerm={searchTerm}
            cart={cart}
            setCart={setCart}
          />
        }
      />
      <Route
        path="/gifts&living"
        element={
          <GiftsAndLiving
            womensClothes={womensClothes}
            favorite={favorite}
            toggleFavorite={toggleFavorite}
            searchTerm={searchTerm}
            cart={cart}
            setCart={setCart}
          />
        }
      />
      <Route
        path="inspiration"
        element={
          <Inspiration
            womensClothes={womensClothes}
            favorite={favorite}
            toggleFavorite={toggleFavorite}
            searchTerm={searchTerm}
            cart={cart}
            setCart={setCart}
          />
        }
      />
    </Routes>
  );
}
