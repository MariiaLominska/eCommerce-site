import search from "../images/search.svg";
import basket from "../images/icons/basket.svg";
import person from "../images/icons/person.svg";
import heart from "../images/icons/heart.svg";
import { Link } from "react-router-dom";

export default function Header({
  searchTerm,
  handleSearchChange,
  amountFavorite,
  amountCart,
}) {
  return (
    <header className="header">
      <form className="search">
        <label className="search-label">
          <img className="search-icon" src={search} alt="Search" />
          <input
            className="search-input"
            type="text"
            placeholder="Search store"
            value={searchTerm}
            // когда в поиске что-то менятеся, вызываем функцию handleGenreChange, которая является state
            onChange={handleSearchChange}
          />
        </label>
      </form>
      <nav className="nav-header">
        <ul className="nav-header-list">
          <li className="nav-header-link-text active">
            <Link to="/products">products</Link>
          </li>
          <li className="nav-header-link-text">
            <Link to="/story">story</Link>
          </li>
          <li className="nav-header-link-text">
            <Link to="/manufacturing">manufacturing</Link>
          </li>
          <li className="nav-header-link-text">
            <Link to="/packaging">packaging</Link>
          </li>
        </ul>
      </nav>
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
            <img src={basket} alt="Cart" />
          </Link>
        </li>
        <li className="nav-header-link-icon">
          <Link to="/profile">
            <img src={person} alt="Profile" />
          </Link>
        </li>
      </ul>
    </header>
  );
}
