import ItemCard from "./ItemCard";

export default function ItemsGrid({
  womensClothes,
  favorite,
  toggleFavorite,
  cart,
  setCart,
  searchTerm,
  inCart,
}) {
  return (
    <div className="products-box">
      {womensClothes.map(
        ({
          title,
          price,
          size,
          details,
          image,
          category,
          color,
          materials,
          id,
        }) => {
          return (
            <ItemCard
              key={id}
              title={title}
              price={price}
              size={size}
              details={details}
              image={image}
              category={category}
              color={color}
              materials={materials}
              id={id}
              isFavorited={favorite.includes(id)}
              toggleFavorite={toggleFavorite}
              cart={cart}
              setCart={setCart}
              searchTerm={searchTerm}
              inCart={inCart}
            />
          );
        }
      )}
    </div>
  );
}
