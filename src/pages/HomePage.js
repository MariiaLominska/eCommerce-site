import card1 from "../images/cards/card-1.jpg";
import card2 from "../images/cards/card-2.jpg";
import card3 from "../images/cards/card-3.jpg";
import card4 from "../images/cards/card-4.jpg";
import bg_image1 from "../images/cards/vector-1.svg";
import bg_image2 from "../images/cards/vector-2.svg";
import { Link } from "react-router-dom";

export default function CardWrapper() {
  return (
    <div className="cards-wrapper">
      <div className="cards-wrapper-row">
        <div className="cards-wrapper-col col-vertical">
          <div className="card card-horizontal card-sale" src={bg_image1}>
            <span>GET UP TO 50% OFF</span>
          </div>

          <div className="card card-horizontal card-sale" src={bg_image2}>
            <span>Summer sale</span>
          </div>
        </div>

        <div className="cards-wrapper-col col-horizontal">
          <Link to="/clothing">
            <div className="card card-vertical card-product">
              <p className="card-vertical-title">Clothing</p>
              <div className="card-product-link">
                <img
                  className="card-product-img"
                  src={card1}
                  alt="Clothing"
                ></img>
              </div>
            </div>
          </Link>
          <Link to="/accessories">
            <div className="card card-vertical card-product">
              <p className="card-vertical-title">Accessories</p>
              <div className="card-product-link">
                <img
                  className="card-product-img"
                  src={card2}
                  alt="Accessories"
                ></img>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="cards-wrapper-row">
        <div className="cards-wrapper-col col-horizontal">
          <Link to="/gifts&living">
            <div className="card card-vertical card-product">
              <p className="card-vertical-title">Gifts & Living</p>
              <div className="card-product-link">
                <img
                  className="card-product-img"
                  src={card3}
                  alt="Gifts & Living"
                ></img>
              </div>
            </div>
          </Link>

          <div className="card card-vertical card-product">
            <div className="card-product-link">
              <img className="card-product-img" src={card4} alt="Product"></img>
            </div>
          </div>
        </div>

        <div className="cards-wrapper-col col-vertical">
          <div className="card card-horizontal card-section">
            <h4 className="card-section-title">Trending & Hot</h4>
            <p className="card-section-desc">
              A collection of most trending items.
            </p>
          </div>
          <Link to="/newcollection">
            <div className="card card-horizontal card-section card-section-red">
              <h4 className="card-section-title">Buy it for the first time</h4>
              <p className="card-section-desc">
                New in store. Try it before anyone else.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
