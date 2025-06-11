import ItemCard from "./ItemCard";

export default function ItemsGrid({ womensClothes, searchTerm }) {
  return (
    <div className="products-box">
      {womensClothes.map(({ title, price, size, image, color, id }) => {
        return (
          <ItemCard
            key={id}
            title={title}
            price={price}
            size={size}
            image={image}
            color={color}
            id={id}
          />
        );
      })}
    </div>
  );
}
