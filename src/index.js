import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import "./index.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import RouterMapping from "./router";
import { useState } from "react";
import favoriteReducer from "./states/favoriteReducer";
import cartReducer from "./states/cartReducer";
import searchTermReducer from "./states/searchTermReducer";

const rootReducer = combineReducers({
  cartReducer,
  favoriteReducer,
  searchTermReducer,
});

// передаем функцию редюсер стору, а стор передаем провайдеру из модуля react-redux
const store = createStore(rootReducer);

// подписка на изменения cart
store.subscribe(() => {
  const cart = store.getState().cartReducer;
  localStorage.setItem("cart", JSON.stringify(cart));
});

export default function App() {
  // создаем диспатч для редукс с помощью хука
  // const dispatch = useDispatch();

  // бургер меню для мобильных устройств
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const openBurgerMenu = () => setMenuIsOpen(true);
  const closeBurgerMenu = () => setMenuIsOpen(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar
          menuIsOpen={menuIsOpen}
          openBurgerMenu={openBurgerMenu}
          closeBurgerMenu={closeBurgerMenu}
        />
        <div className="main">
          <Header
            menuIsOpen={menuIsOpen}
            openBurgerMenu={openBurgerMenu}
            closeBurgerMenu={closeBurgerMenu}
          />
          <RouterMapping />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
