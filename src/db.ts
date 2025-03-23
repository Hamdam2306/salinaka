import type { Product } from "./types";
import { renderCart } from "./cart";

export const products: Product[] = [
  {
    id: "0af16e20-bc45-4595-a9be-6b237eef53fa",
    name: "Nightmare Abbey",
    price: 77,
    category: "Betsin Maalat",
    imageUrl:
      "https://cdn-images.farfetch-contents.com/16/06/97/27/16069727_30146621_2048.jpg",
    description:
      "New Towels model with 62 GB RAM, 113 GB storage, and entire features",
    quantity: 1,
    size: "36mm",
    hasCart: false,
  },
  {
    id: "69a6c8dc-8359-4de2-a0c1-2267b15d9747",
    name: "The Diary of a Young Girl",
    price: 243,
    category: "Salt",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM0DL0LLJp4yrN_JvDkl4KNoDOQIanv7QlWg&s",
    description:
      "Professional-grade Keyboard perfect for dramatic training and recreational use",
    quantity: 1,
    size: "36mm",
    hasCart: false,
  },
  {
    id: "9e0683e2-7aee-4547-9fe4-2f5f3fb52366",
    name: "David Copperfield",
    price: 164,
    category: "Betsin Maalat",
    imageUrl:
      "https://cdn-images.farfetch-contents.com/16/06/97/27/16069727_30146621_2048.jpg",
    description:
      "The sleek and delectable Keyboard comes with turquoise LED lighting for smart functionality",
    quantity: 1,
    size: "36mm",
    hasCart: false,
  },

  {
    id: "d6e1850b-e38d-4385-b54e-d62e5a16089e",
    name: "The Fountainhead",
    price: 215,
    category: "Salt",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM0DL0LLJp4yrN_JvDkl4KNoDOQIanv7QlWg&s",
    description: "Ergonomic Fish made with Rubber for all-day cuddly support",
    quantity: 1,
    size: "36mm",
    hasCart: false,
  },
  {
    id: "582860e5-ca15-4caa-8d6d-634f9a42bce0",
    name: "Ruth Fielding in Alaska",
    price: 154,
    category: "Betsin Maalat",
    imageUrl:
      "https://cdn-images.farfetch-contents.com/16/06/97/27/16069727_30146621_2048.jpg",
    description:
      "Introducing the Lebanon-inspired Cheese, blending grumpy style with local craftsmanship",
    quantity: 1,
    size: "36mm",
    hasCart: false,
  },
  {
    id: "a67b945c-e080-491b-9851-c2e3e26f7970",
    name: "Of Mice and Men",
    price: 228,
    category: "Salt",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM0DL0LLJp4yrN_JvDkl4KNoDOQIanv7QlWg&s",
    description: "Ergonomic Car made with Wooden for all-day unwieldy support",
    quantity: 1,
    size: "36mm",
    hasCart: false,
  },
  {
    id: "3df7c17a-07d5-49c8-9ec1-7fc82097fa43",
    name: "Harry Potter and the Sorcerer's Stone",
    price: 257,
    category: "Betsin Maalat",
    imageUrl:
      "https://cdn-images.farfetch-contents.com/16/06/97/27/16069727_30146621_2048.jpg",
    description:
      "Stylish Keyboard designed to make you stand out with excellent looks",
    quantity: 1,
    size: "36mm",
    hasCart: false,
  },
  {
    id: "268dad34-bf23-483c-ab78-e95d317a5edf",
    name: "Dora",
    price: 34,
    category: "Salt",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM0DL0LLJp4yrN_JvDkl4KNoDOQIanv7QlWg&s",
    description:
      "Experience the olive brilliance of our Sausages, perfect for agitated environments",
    quantity: 1,
    size: "36mm",
    hasCart: false,
  },
  {
    id: "a9895bf0-b144-4e7b-aea8-6897c34dfcc0",
    name: "Brave New World",
    price: 61,
    category: "Betsin Maalat",
    imageUrl:
      "https://cdn-images.farfetch-contents.com/16/06/97/27/16069727_30146621_2048.jpg",
    description:
      "The sleek and warm Hat comes with red LED lighting for smart functionality",
    quantity: 1,
    size: "36mm",
    hasCart: false,
  },
  {
    id: "b76fd8ec-dca1-46a8-bbf1-8eb375bc6eb8",
    name: "Grimms' Fairy Tales",
    price: 96,
    category: "Salt",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM0DL0LLJp4yrN_JvDkl4KNoDOQIanv7QlWg&s",
    description:
      "Professional-grade Pizza perfect for pretty training and recreational use",
    quantity: 1,
    size: "36mm",
    hasCart: false,
  },
  {
    id: "77d1e43b-0414-453f-abb1-4a3fb1d37422",
    name: "The Heart is a Lonely Hunter",
    price: 22,
    category: "Betsin Maalat",
    imageUrl:
      "https://cdn-images.farfetch-contents.com/16/06/97/27/16069727_30146621_2048.jpg",
    description:
      "The sleek and hasty Table comes with olive LED lighting for smart functionality",
    quantity: 1,
    size: "36mm",
    hasCart: false,
  },
  {
    id: "17415490-e038-44cd-8853-31f0368f91d1",
    name: "The Handmaid's Tale",
    price: 200,
    category: "Salt",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM0DL0LLJp4yrN_JvDkl4KNoDOQIanv7QlWg&s",
    description:
      "The Desiree Computer is the latest in a series of caring products from Schulist, Schaden and Quitzon",
    quantity: 1,
    size: "36mm",
    hasCart: false,
  },
  {
    id: "55f99f6b-e785-485f-bb11-5817f2929650",
    name: "The Republic",
    price: 247,
    category: "Betsin Maalat",
    imageUrl:
      "https://cdn-images.farfetch-contents.com/16/06/97/27/16069727_30146621_2048.jpg",
    description:
      "Innovative Pants featuring immense technology and Bamboo construction",
    quantity: 1,
    size: "36mm",
    hasCart: false,
  },
  {
    id: "8305be99-34f2-46ac-8728-3d00799c8d15",
    name: "A Clockwork Orange",
    price: 191,
    category: "Salt",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM0DL0LLJp4yrN_JvDkl4KNoDOQIanv7QlWg&s",
    description:
      "Discover the genuine new Pizza with an exciting mix of Concrete ingredients",
    quantity: 1,
    size: "36mm",
    hasCart: false,
  },
  {
    id: "3d7e5584-40e9-4a8c-b4ed-5698e181462d",
    name: "The Wonderful Wizard of Oz",
    price: 108,
    category: "Betsin Maalat",
    imageUrl:
      "https://cdn-images.farfetch-contents.com/16/06/97/27/16069727_30146621_2048.jpg",
    description:
      "Introducing the Cape Verde-inspired Shirt, blending enraged style with local craftsmanship",
    quantity: 1,
    size: "36mm",
    hasCart: false,
  },
  {
    id: "1c39b7da-03fb-454a-8c48-6ececf268950",
    name: "Absalom, Absalom!",
    price: 229,
    category: "Salt",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM0DL0LLJp4yrN_JvDkl4KNoDOQIanv7QlWg&s",
    description: "Ergonomic Shirt made with Ceramic for all-day common support",
    quantity: 1,
    size: "36mm",
    hasCart: false,
  },
  {
    id: "a0bae6bb-d97e-4e53-9b09-161e06f00157",
    name: "The Enchanted April",
    price: 101,
    category: "Betsin Maalat",
    imageUrl:
      "https://cdn-images.farfetch-contents.com/16/06/97/27/16069727_30146621_2048.jpg",
    description:
      "The blue Cheese combines Holy See (Vatican City State) aesthetics with Arsenic-based durability",
    quantity: 1,
    size: "36mm",
    hasCart: false,
  },
  {
    id: "e0ac8e45-92e6-4d93-9b56-53f416f32aa2",
    name: "The Stand",
    price: 267,
    category: "Salt",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM0DL0LLJp4yrN_JvDkl4KNoDOQIanv7QlWg&s",
    description:
      "The sleek and unwelcome Pizza comes with pink LED lighting for smart functionality",
    quantity: 1,
    size: "36mm",
    hasCart: false,
  },
];

export let cart: Product[] = [];

export function clearCart() {
  cart.forEach((p) => {
    products.forEach((product) => {
      p.id === product.id ? (product.hasCart = false) : null;
    });
  });

  cart = [];

  renderCart();
}
