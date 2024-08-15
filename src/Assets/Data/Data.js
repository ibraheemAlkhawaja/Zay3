import img1 from "../img/category_img_01.jpg";
import img2 from "../img/category_img_02.jpg";
import img3 from "../img/category_img_03.jpg";

import img4 from "../img/feature_prod_01.jpg";
import img5 from "../img/feature_prod_02.jpg";
import img6 from "../img/feature_prod_03.jpg";
const DataCategories = [
  {
    id: 0,
    img: img1,
    title: "Watches",
  },
  {
    id: 1,
    img: img2,
    title: "Shoes",
  },
  {
    id: 2,
    img: img3,
    title: "Accessories",
  },
];
// data  featured-products

const DataFeatured = [
  {
    id: 0,
    img: img4,
    price: 240.0,
    title: "Gym Weight",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.",
    Reviews: 24,
  },
  {
    id: 1,
    img: img5,
    price: 480.0,
    title: "Cloud Nike Shoes",
    description:
      "Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper.",
    Reviews: 48,
  },
  {
    id: 2,
    img: img6,
    price: 360.0,
    title: "Summer Addides Shoes",
    description:
      "Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.",
    Reviews: 74,
  },
];
export { DataFeatured };
export default DataCategories;
