import { faker, tr } from "@faker-js/faker";
import type { Product } from "./types";

export let cart: Product[] = [];

export const products: Product[] = [
  {
    id: faker.string.uuid(),
    name: "Sugat",
    price: "$56.00",
    category: "Betsin Maalat",
    imageUrl:
      "https://cdn-images.farfetch-contents.com/16/06/97/27/16069727_30146621_2048.jpg",
    description: faker.commerce.productDescription(),
    quantity: 1,
    size: "36mm",
    hasCart: false,
  },

  {
    id: faker.string.uuid(),
    name: "Kulangot",
    price: "$67.00",
    category: "Salt",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM0DL0LLJp4yrN_JvDkl4KNoDOQIanv7QlWg&s",
    description: faker.commerce.productDescription(),
    quantity: 1,
    size: "36mm",
    hasCart: true,
  },
  // Add quantity property to other items
];
