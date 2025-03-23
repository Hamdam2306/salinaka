import type { Product } from "./types";
import { renderCart } from "./cart";

export const products: Product[] = [
  {
    id: "0af16e20-bc45-4595-a9be-6b237eef53fa",
    name: "Nightmare Abbey",
    price: 77,
    category: "Betsin Maalat",
    imageUrl:
      "https://www.vadoclothingco.com/cdn/shop/files/sunski_polarized_sunglasses_baia_honey_sepia_2_1360x_jpg.webp?v=1729621858&width=1445",
    description:
      "New Towels model with 62 GB RAM, 113 GB storage, and entire features",
    quantity: 1,
    size: "36mm",
    hasCart: false,
  },
  {
    id: "69a6c8dc-8359-4de2-a0c1-2267b15d9747",
    name: "The Diary of",
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCMdZVS7aeAugY5kxibt2pFn0gTf0d0V_BJUVpp9qOjZrghe7kiCEVk-ez7tyumUoHebs&usqp=CAU",
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkvSOZlj6X1x8ienIV26NF9i0Ffz2Wf-tz1OV5XBzXUsGcRg4T_UKVRttRgcPcLDOPCpQ&usqp=CAU",
    description: "Ergonomic Fish made with Rubber for all-day cuddly support",
    quantity: 1,
    size: "36mm",
    hasCart: false,
  },
  {
    id: "582860e5-ca15-4caa-8d6d-634f9a42bce0",
    name: "Ruth Fielding",
    price: 154,
    category: "Betsin Maalat",
    imageUrl:
      "https://cdn.dsmcdn.com/mnresize/600/-/ty1322/product/media/images/prod/SPM/PIM/20240507/17/256b6287-0a08-3958-bbb7-41d0ed074093/1_org_zoom.jpg",
    description:
      "Introducing the Lebanon-inspired Cheese, blending grumpy style with local craftsmanship",
    quantity: 1,
    size: "36mm",
    hasCart: false,
  },
  {
    id: "a67b945c-e080-491b-9851-c2e3e26f7970",
    name: "Of Mice ",
    price: 228,
    category: "Salt",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlp2fBC8McMa44Hk4pWvqCrJEnY_G2yEHTnHzGT75eztetaS2ZnFcc_ly3fPvEipt9Gyg&usqp=CAU",
    description: "Ergonomic Car made with Wooden for all-day unwieldy support",
    quantity: 1,
    size: "36mm",
    hasCart: false,
  },
  {
    id: "3df7c17a-07d5-49c8-9ec1-7fc82097fa43",
    name: "Harry Potter ",
    price: 257,
    category: "Betsin Maalat",
    imageUrl:
      "https://ampere.shop/cdn/shop/files/Dusk-Blackframewithdarktint_polarizedlenses_969c55e5-54b3-44bc-ad49-3c0eac2e49f5_1100x.jpg?v=1704269504",
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnK8DNRlNZbNiz3QxDgOMwm79ZbFLLCyNjhqqKtm9b07n8ocB_yYES3j-bSImrW_GPDmI&usqp=CAU",
    description:
      "Experience the olive brilliance of our Sausages, perfect for agitated environments",
    quantity: 1,
    size: "36mm",
    hasCart: false,
  },
  {
    id: "a9895bf0-b144-4e7b-aea8-6897c34dfcc0",
    name: "Brave New",
    price: 61,
    category: "Betsin Maalat",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqVEucE5CbTQZUrrGBdsPaYR-0r9M98X9T-34zaK1WNKMQzCvEc1w4gSwK5JTDvvOlm-A&usqp=CAU",
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
      "https://theshoppemiami.com/cdn/shop/files/7S25T509_2460_large_f48f6d1b-af65-4633-930d-b0869a029b96_1024x1024.jpg?v=1730836489",
    description:
      "Professional-grade Pizza perfect for pretty training and recreational use",
    quantity: 1,
    size: "36mm",
    hasCart: false,
  },
  {
    id: "77d1e43b-0414-453f-abb1-4a3fb1d37422",
    name: "The Heart r",
    price: 22,
    category: "Betsin Maalat",
    imageUrl:
      "https://media.viskanassets.com/v2/pellepprod/normal/E1-Sunglasses-solglas%C3%B6gon-PP93E1-6010-D.jpg",
    description:
      "The sleek and hasty Table comes with olive LED lighting for smart functionality",
    quantity: 1,
    size: "36mm",
    hasCart: false,
  },
  {
    id: "17415490-e038-44cd-8853-31f0368f91d1",
    name: "The Handmaid",
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
    id: "e0ac8e45-92e6-4d93-9b56-53f416f32aa2",
    name: "The Stand",
    price: 267,
    category: "Salt",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0109/5012/products/PHANTOM_SUN_MATTEBLACK_DARKCARBONPOLAR_FRONT_UPDATE-LENS_a58a0edb-f160-4b5d-9a88-796476ec0e40.jpg?v=1714577588",
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
