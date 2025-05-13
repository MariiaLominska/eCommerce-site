import search from "../images/search.svg";
import basket from "../images/icons/basket.svg";
import person from "../images/icons/person.svg";
import heart from "../images/icons/heart.svg";
import { Link, useLocation } from "react-router-dom";
import SearchPopupItem from "./SearchPopupItem";
import womensClothes from "../data/data";

export default function Header({
  searchTerm,
  handleSearchChange,
  amountFavorite,
  amountCart,
  menuIsOpen,
  openBurgerMenu,
  closeBurgerMenu,
}) {
  // попап закрывается, переписывая стейт поиска, чтобы, когда ничего в поиске не введено, и попапа не было
  const closePopup = () => {
    handleSearchChange("");
  };

  const filteredByCategory = womensClothes.find((item) =>
    item.category[0].toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredItems = womensClothes.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // если в поиске есть соответствие по названию категории, пушим в базу filteredItems первый же объект, который
  // соответствует названию категории
  if (filteredByCategory) {
    filteredItems.push({ ...filteredByCategory, isCategory: true });
  }

  // получаем адрес страницы из url
  const location = useLocation();
  const currentPath = location.pathname;

  // меню навигации
  const navList = ["products", "story", "manufacturing", "packaging"];
  console.log(currentPath);
  return (
    <header className="header">
      <div className="burger-menu" onClick={openBurgerMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <form className="search">
        <label className="search-label" htmlFor="search-input">
          <img className="search-icon" src={search} alt="Search" />
          <div className="search-wrapper">
            <input
              id="search-input"
              className="search-input"
              type="text"
              placeholder="Search store"
              value={searchTerm}
              // если из-за попапа searchTerm становится строкой, в инпуте изменение стейта не срабыватывает,
              // потому что инпут ждет ивент, а не строку, так что нужно в onChange вызвать функцию, сразу
              // передавая ей ивент
              onChange={(e) => handleSearchChange(e.target.value)}
            />
            <SearchPopupItem
              womensClothes={filteredItems}
              isOpenPopup={searchTerm}
              closePopup={closePopup}
              searchTerm={searchTerm}
            />
          </div>
        </label>
      </form>
      <nav className="nav-header">
        <ul className="nav-header-list">
          {navList.map((nav) => {
            return (
              // навешиваем дополнительный класс active если адрес страницы совпадает с ссылкой в
              // меню навигации (добавляем / и + для сравнения, это строка)
              <li
                className={`nav-header-link-text ${
                  currentPath == "/" + nav && "nav-header-link-text-active"
                }`}
              >
                <Link to={nav}>{nav}</Link>
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons-list">
          <li className="nav-header-link-icon">
            <Link to="/favorites">
              {!!amountFavorite && (
                <span className="items-count">{amountFavorite}</span>
              )}
              <img src={heart} alt="Favorites" />
            </Link>
          </li>
          <li className="nav-header-link-icon">
            <Link to="/cart">
              {amountCart > 0 && (
                <span className="items-count">{amountCart}</span>
              )}
              <img className="nav-header-basket-img" src={basket} alt="Cart" />
            </Link>
          </li>
          <li className="nav-header-link-icon">
            <Link to="/profile">
              <img
                className="nav-header-profile-img"
                src={person}
                alt="Profile"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
