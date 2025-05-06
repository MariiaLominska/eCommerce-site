import { Link } from "react-router-dom";

export default function SearchPopupItem({
  womensClothes,
  isOpenPopup,
  closePopup,
}) {
  // если кнопка заказа нажата, получает статус isOpen, если статус не isOpen,
  // возвращает ничего и, соответственно, не появляется
  if (!isOpenPopup) {
    return null;
  }

  return (
    <>
      <div className="search-popup-blur" onClick={closePopup}></div>
      <div className="search-popup">
        {womensClothes.length ? (
          womensClothes.map(
            ({
              title,
              image,
              category,
              categoryImage,
              id,
              color,
              size,
              isCategory,
            }) => (
              <Link
                to={
                  isCategory
                    ? `/${category[0].toLowerCase()}`
                    : `/product/${title}?id=${id}&color=${color[0]}&size=${size[0]}`
                }
              >
                {isCategory && (
                  <p className="search-popup-text-category">Category: </p>
                )}
                <div
                  key={id}
                  className={
                    isCategory
                      ? "search-popup-category-card"
                      : "search-popup-item-card"
                  }
                  onClick={closePopup}
                >
                  <div className="search-popup-image-wrapper">
                    <img
                      className="search-popup-item-image"
                      alt={title}
                      src={isCategory ? categoryImage : image}
                    />
                  </div>
                  <span className="search-popup-item-title">
                    {isCategory ? category[0] : title}
                  </span>
                </div>
              </Link>
            )
          )
        ) : (
          <p className="search-popup-text-category">Item Not found</p>
        )}
      </div>
    </>
  );
}
