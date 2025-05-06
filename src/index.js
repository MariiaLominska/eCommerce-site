import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import RouterMapping from "./router";
import { useState } from "react";
import womensClothes from "./data/data";

export default function App() {
  const [favorite, setFavorite] = useState([]);
  const amountFavorite = favorite.length;

  const toggleFavorite = (itemId) => {
    setFavorite(
      (prev) =>
        // ? - если товар есть в прошлом состоянии, удали товар по itemId из Favorite
        prev.includes(itemId)
          ? prev.filter((id) => id !== itemId)
          : // или если item не находится в Favorite, добавь его в Favorite
            [...prev, itemId] // в массив prev добавить еще itemId
    );
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const [cart, setCart] = useState({});
  const amountCart = Object.keys(cart).length;

  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <div className="main">
          <Header
            searchTerm={searchTerm}
            handleSearchChange={setSearchTerm}
            amountFavorite={amountFavorite}
            amountCart={amountCart}
          />
          <RouterMapping
            womensClothes={womensClothes}
            favorite={favorite}
            toggleFavorite={toggleFavorite}
            searchTerm={searchTerm}
            handleSearchChange={handleSearchChange}
            cart={cart}
            setCart={setCart}
          />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
