import logo from "../images/logo.svg";
import flash from "../images/nav-icons/flash.png";
import clothing from "../images/nav-icons/clothing.png";
import shoes from "../images/nav-icons/shoes.png";
import bag from "../images/nav-icons/case.png";
import acrobat from "../images/nav-icons/acrobat.png";
import gift from "../images/nav-icons/gift.png";
import diamond from "../images/nav-icons/diamond.png";
import { Link } from "react-router-dom";

export default function Sidebar({
  menuIsOpen,
  openBurgerMenu,
  closeBurgerMenu,
}) {
  return (
    <>
      <div
        className={`sidebar-blur ${menuIsOpen && "sidebar-blur-active"}`}
        onClick={closeBurgerMenu}
      ></div>
      <div className={`sidebar ${menuIsOpen && "sidebar-active"}`}>
        <div className="close-sidebar" onClick={closeBurgerMenu}>
          X
        </div>
        <div className="sidebar-logo">
          <div className="logo">
            <Link to="/products">
              <img src={logo} alt="Caped logo" onClick={closeBurgerMenu} />
            </Link>
          </div>
        </div>

        <nav className="sidebar-nav nav">
          <Link to="/products">
            <h2 className="nav-title" onClick={closeBurgerMenu}>
              Explore
            </h2>
          </Link>
          <ul className="nav-list">
            <li>
              <Link to="/newcollection" onClick={closeBurgerMenu}>
                <img src={flash} alt="New Collection" />
                New In
              </Link>
            </li>
            <li>
              <Link to="/clothing" onClick={closeBurgerMenu}>
                <img src={clothing} alt="Clothing" />
                Clothing
              </Link>
            </li>
            <li>
              <Link to="/shoes" onClick={closeBurgerMenu}>
                <img src={shoes} alt="Shoes" />
                Shoes
              </Link>
            </li>
            <li>
              <Link to="/accessories" onClick={closeBurgerMenu}>
                <img src={bag} alt="Accesories" />
                Accessories
              </Link>
            </li>
            <li>
              <Link to="/activewear" onClick={closeBurgerMenu}>
                <img src={acrobat} alt="Activewear" />
                Activewear
              </Link>
            </li>
            <li>
              <Link to="/gifts&living" onClick={closeBurgerMenu}>
                <img src={gift} alt="Gifts & Livivng" />
                Gifts & Living
              </Link>
            </li>
            <li>
              <Link to="/inspiration" onClick={closeBurgerMenu}>
                <img src={diamond} alt="Inspiration" />
                Inspiration
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
