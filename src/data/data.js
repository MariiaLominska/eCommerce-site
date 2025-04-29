import bootcut_jeans_blue from "../images/items-photos/bootcut-jeans-blue.webp";
import skinny_jeans_blue from "../images/items-photos/skinny-jeans-blue.jpg";
import high_waisted_jeans_grey from "../images/items-photos/high-waisted-jeans-grey.avif";
import boyfriend_jeans_blue from "../images/items-photos/boyfriend-jeans-blue.avif";
import maxi_dress_white from "../images/items-photos/maxi-dress-white.jpeg";
import wrap_dress_pink from "../images/items-photos/wrap-dress-pink.jpg";
import floral_summer_dress_red from "../images/items-photos/floral-summer-dress-red.avif";
import wool_peacoat_beige from "../images/items-photos/wool-peacoat-beige.webp";
import puffer_jacket_black from "../images/items-photos/puffer-jacket-black.avif";
import trench_coat_beige from "../images/items-photos/trench-coat-beige.avif";
import winter_coat_black from "../images/items-photos/winter-coat-black.avif";
import classic_pumps_beige from "../images/items-photos/classic_pumps_beige.jpg";
import nude_patent_leather_pumps from "../images/items-photos/nude_patent_leather_pumps.webp";
import red_suede_pumps from "../images/items-photos/red_suede_pumps.webp";
import metallic_silver_pumps from "../images/items-photos/metallic_silver_pumps.avif";
import leather_sneakers_white from "../images/items-photos/white_leather_sneakers.webp";
import high_top_sneakers_black from "../images/items-photos/high_top_sneakers_black.webp";
import running_shoes_pink from "../images/items-photos/running_shoes_pink.webp";
import slipon_sneakers_gray from "../images/items-photos/slipon_sneakers_gray.jpg";
import ankle_chelsea_boots_black from "../images/items-photos/ankle_chelsea_boots_black.avif";
import black_combat_boots from "../images/items-photos/black_combat_boots.jpg";
import knee_high_boots from "../images/items-photos/knee_high_boots.webp";
import heeled_ankle_boots from "../images/items-photos/heeled_ankle_boots.avif";

const womensClothes = [
  // Coats
  {
    id: 1,
    title: "Winter Coat",
    price: 1500,
    image: winter_coat_black,
    category: ["Coats", "clothing"],
    size: ["S", "M", "L"],
    color: ["black", "white", "grey"],
    details:
      "A stylish and warm winter coat made with high-quality materials, perfect for chilly days.",
    materials: ["Wool", "Polyester", "Viscose", "Nylon"],
  },
  {
    id: 2,
    title: "Trench Coat",
    price: 1800,
    image: trench_coat_beige,
    category: ["Coats", "clothing"],
    size: ["XS", "S", "M", "L"],
    color: ["beige", "black", "navy"],
    details:
      "A classic trench coat with a belted waist and water-resistant fabric, ideal for rainy weather.",
    materials: ["Cotton", "Polyester", "Spandex"],
  },
  {
    id: 3,
    title: "Puffer Jacket",
    price: 1300,
    image: puffer_jacket_black,
    category: ["Coats", "clothing"],
    size: ["S", "M", "L", "XL"],
    color: ["red", "blue", "green"],
    details:
      "A lightweight yet warm puffer jacket with a hood, perfect for winter adventures.",
    materials: ["Nylon", "Polyester", "Down", "Feathers"],
  },
  {
    id: 4,
    title: "Wool Peacoat",
    price: 1600,
    image: wool_peacoat_beige,
    category: ["Coats", "clothing"],
    size: ["S", "M", "L"],
    color: ["navy", "black", "beige"],
    details:
      "A double-breasted wool peacoat that adds a touch of elegance to any outfit.",
    materials: ["Wool", "Cashmere", "Polyester", "Acetate"],
  },

  // Dresses
  {
    id: 5,
    title: "Floral Summer Dress",
    price: 850,
    image: floral_summer_dress_red,
    category: ["Dresses", "clothing"],
    size: ["XS", "S", "M", "L"],
    color: ["red", "blue", "yellow"],
    details:
      "A lightweight and breezy floral dress ideal for summer outings and beach holidays.",
    materials: ["Cotton", "Rayon", "Viscose"],
  },
  {
    id: 6,
    title: "Maxi Dress",
    price: 900,
    image: maxi_dress_white,
    category: ["Dresses", "clothing"],
    size: ["S", "M", "L", "XL"],
    color: ["black", "white", "purple"],
    details:
      "A flowing maxi dress with a flattering silhouette, perfect for evening events.",
    materials: ["Chiffon", "Polyester", "Silk"],
  },
  {
    id: 7,
    title: "Wrap Dress",
    price: 950,
    image: wrap_dress_pink,
    category: ["Dresses", "clothing"],
    size: ["XS", "S", "M", "L"],
    color: ["pink", "blue", "white"],
    details:
      "A versatile wrap dress that cinches at the waist, suitable for both casual and formal occasions.",
    materials: ["Jersey", "Cotton", "Elastane"],
  },
  {
    id: 8,
    title: "Bodycon Dress",
    price: 1000,
    image: "https://images.unsplash.com/photo-1521577352947-9bb58764b69a",
    category: ["Dresses", "clothing"],
    size: ["S", "M", "L"],
    color: ["black", "red", "navy"],
    details:
      "A figure-hugging bodycon dress that highlights your curves, ideal for parties.",
    materials: ["Polyester", "Spandex", "Nylon"],
  },

  // Jeans
  {
    id: 9,
    title: "High-Waisted Jeans",
    price: 1100,
    image: high_waisted_jeans_grey,
    category: ["Jeans", "clothing"],
    size: ["S", "M", "L", "XL"],
    color: ["blue", "black"],
    details:
      "Comfortable and flattering high-waisted jeans that pair perfectly with any top or blouse.",
    materials: ["Denim", "Cotton", "Elastane"],
  },
  {
    id: 10,
    title: "Skinny Jeans",
    price: 1050,
    image: skinny_jeans_blue,
    category: ["Jeans", "clothing"],
    size: ["XS", "S", "M", "L"],
    color: ["dark blue", "grey", "black"],
    details:
      "Classic skinny jeans with a snug fit, suitable for everyday wear.",
    materials: ["Cotton", "Spandex", "Polyester"],
  },
  {
    id: 11,
    title: "Boyfriend Jeans",
    price: 1150,
    image: boyfriend_jeans_blue,
    category: ["Jeans", "clothing"],
    size: ["S", "M", "L"],
    color: ["light blue", "distressed"],
    details:
      "Relaxed-fit boyfriend jeans with a distressed look for a casual, edgy style.",
    materials: ["Denim", "Cotton", "Elastane"],
  },
  {
    id: 12,
    title: "Bootcut Jeans",
    price: 1200,
    image: bootcut_jeans_blue,
    category: ["Jeans", "clothing"],
    size: ["S", "M", "L"],
    color: ["blue", "black"],
    details:
      "Bootcut jeans that flare slightly at the bottom, perfect for pairing with boots.",
    materials: ["Cotton", "Polyester", "Spandex"],
  },
  {
    id: 13,
    title: "Classic Pumps",
    price: 1200,
    image: classic_pumps_beige,
    category: ["pumps", "shoes"],
    size: ["36", "37", "38", "39", "40"],
    color: ["black", "beige"],
    details:
      "Elegant black pumps with a pointed toe and stiletto heel, perfect for formal occasions or office wear.",
    materials: ["Leather", "Rubber", "Synthetic Lining"],
  },
  {
    id: 14,
    title: "Patent Leather Pumps",
    price: 1250,
    image: nude_patent_leather_pumps,
    category: ["pumps", "shoes"],
    size: ["36", "37", "38", "39", "40"],
    color: ["nude"],
    details:
      "Versatile nude patent leather pumps with a sleek design, ideal for both day and evening wear.",
    materials: ["Patent Leather", "Rubber Sole", "Textile Lining"],
  },
  {
    id: 15,
    title: "Suede Pumps",
    price: 1300,
    image: red_suede_pumps,
    category: ["pumps", "shoes"],
    size: ["36", "37", "38", "39", "40"],
    color: ["red"],
    details:
      "Bold red suede pumps with a comfortable heel height, adding a pop of color to any outfit.",
    materials: ["Suede", "Rubber Sole", "Leather Lining"],
  },
  {
    id: 16,
    title: "Metallic Silver Pumps",
    price: 1350,
    image: metallic_silver_pumps,
    category: ["pumps", "shoes"],
    size: ["36", "37", "38", "39", "40"],
    color: ["silver"],
    details:
      "Shiny metallic silver pumps with a modern design, perfect for special occasions.",
    materials: ["Synthetic Leather", "Rubber Sole", "Textile Lining"],
  },

  // Sneakers
  {
    id: 17,
    title: "Leather Sneakers",
    price: 900,
    image: leather_sneakers_white,
    category: ["sneakers", "shoes"],
    size: ["36", "37", "38", "39", "40", "41"],
    color: ["white"],
    details:
      "Comfortable white leather sneakers with a minimalist design, suitable for everyday casual wear.",
    materials: ["Leather", "Rubber", "Foam Insole"],
  },
  {
    id: 18,
    title: "High Top Sneakers",
    price: 950,
    image: high_top_sneakers_black,
    category: ["sneakers", "shoes"],
    size: ["36", "37", "38", "39", "40", "41"],
    color: ["black"],
    details:
      "Stylish black high-top sneakers with a supportive design, perfect for active lifestyles.",
    materials: ["Canvas", "Rubber Sole", "Textile Lining"],
  },
  {
    id: 19,
    title: "Running Shoes",
    price: 980,
    image: running_shoes_pink,
    category: ["sneakers", "shoes"],
    size: ["36", "37", "38", "39", "40", "41"],
    color: ["pink"],
    details:
      "Lightweight pastel pink running shoes with breathable mesh, ideal for workouts and runs.",
    materials: ["Mesh", "Rubber Sole", "Foam Insole"],
  },
  {
    id: 20,
    title: "Slip-On Sneakers",
    price: 920,
    image: slipon_sneakers_gray,
    category: ["sneakers", "shoes"],
    size: ["36", "37", "38", "39", "40", "41"],
    color: ["gray"],
    details:
      "Convenient gray slip-on sneakers with elastic bands, offering comfort and ease for daily wear.",
    materials: ["Knit Fabric", "Rubber Sole", "Textile Lining"],
  },

  // Boots
  {
    id: 21,
    title: "Ankle Chelsea Boots",
    price: 1500,
    image: ankle_chelsea_boots_black,
    category: ["boots", "shoes"],
    size: ["36", "37", "38", "39", "40"],
    color: ["brown", "black"],
    details:
      "Classic brown ankle Chelsea boots with elastic side panels, perfect for autumn and winter outfits.",
    materials: ["Suede", "Rubber Sole", "Textile Lining"],
  },
  {
    id: 22,
    title: "Black Combat Boots",
    price: 1600,
    image: black_combat_boots,
    category: ["boots", "shoes"],
    size: ["36", "37", "38", "39", "40"],
    color: ["black"],
    details:
      "Durable black combat boots with lace-up design, offering both style and functionality.",
    materials: ["Leather", "Rubber Sole", "Textile Lining"],
  },
  {
    id: 23,
    title: "Knee-High Boots",
    price: 1700,
    image: knee_high_boots,
    category: ["boots", "shoes"],
    size: ["36", "37", "38", "39", "40"],
    color: ["tan", "black"],
    details:
      "Elegant tan knee-high riding boots with a low heel, suitable for equestrian-inspired looks.",
    materials: ["Leather", "Rubber Sole", "Textile Lining"],
  },
  {
    id: 24,
    title: "Heeled Ankle Boots",
    price: 1550,
    image: heeled_ankle_boots,
    category: ["boots", "shoes"],
    size: ["36", "37", "38", "39", "40"],
    color: ["beige", "black"],
    details:
      "Chic heeled ankle boots with a sleek silhouette and side zip closure, great for fall outfits.",
    materials: ["Faux Leather", "Rubber Sole", "Synthetic Lining"],
  },
];

export default womensClothes;
