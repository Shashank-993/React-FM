import { images } from "./images";
import t1 from "../images/image-product-1-thumbnail.jpg";
import t2 from "../images/image-product-2-thumbnail.jpg";
import t3 from "../images/image-product-3-thumbnail.jpg";
import t4 from "../images/image-product-4-thumbnail.jpg";
const thumbnails = [t1, t2, t3, t4];
export const product = {
  id: crypto.randomUUID(),
  company: "sneaker company",
  title: "Fall Limited Edition Sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll  withstand everything the weather can offer.",
  price: 125.00,
  images: images,
  thumbnails: thumbnails,
};
