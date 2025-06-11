import logo from "../images/logo.svg";
import flash from "../images/nav-icons/flash.png";
import clothing from "../images/nav-icons/clothing.png";
import shoes from "../images/nav-icons/shoes.png";
import bag from "../images/nav-icons/case.png";
import acrobat from "../images/nav-icons/acrobat.png";
import gift from "../images/nav-icons/gift.png";
import diamond from "../images/nav-icons/diamond.png";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar({ menuIsOpen, closeBurgerMenu }) {
  // получаем адрес страницы из url
  const location = useLocation();
  const currentPath = location.pathname;

  const sidebarNavList = [
    { name: "New In", image: flash, path: "/new-in" },
    { name: "Clothing", image: clothing, path: "/clothing" },
    { name: "Shoes", image: shoes, path: "/shoes" },
    { name: "Accessories", image: bag, path: "/accessories" },
    { name: "Activewear", image: acrobat, path: "/activewear" },
    { name: "Gifts & Living", image: gift, path: "/gifts-living" },
    { name: "Inspiration", image: diamond, path: "/inspiration" },
  ];
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

        <nav className="sidebar-nav">
          <Link to="/products">
            <h2 className="nav-title" onClick={closeBurgerMenu}>
              Explore
            </h2>
          </Link>
          <ul className="nav-list">
            {sidebarNavList.map(({ name, image, path }) => {
              return (
                // навешиваем дополнительный класс active если адрес страницы совпадает с ссылкой в
                // меню навигации (добавляем / и + для сравнения, это строка)
                <li
                  key={name}
                  className={"sidebar-nav-item"}
                  onClick={closeBurgerMenu}
                >
                  <Link
                    to={path}
                    onClick={closeBurgerMenu}
                    className={"sidebar-nav-item-a"}
                  >
                    <img src={image} alt={name} />{" "}
                    <span
                      className={`sidebar-nav-item-a-text ${
                        currentPath === path && "sidebar-nav-item-a-text-active"
                      }`}
                    >
                      {name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}
