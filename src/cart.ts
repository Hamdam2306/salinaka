import { faker } from "@faker-js/faker";
import type { Product } from "./types";

let cartProducts: Product[] = [
  {
    id: "eXXYztru9J",
    title: "The Portrait of a Lady",
    imgUrl: "https://picsum.photos/seed/qWeDzl/128/340?blur=8",
    description:
      "The Jon Chicken is the latest in a series of indolent products from D'Amore, West and Reichel",
    size: 22,
    price: "22693.12",
    quantity: 1,
  },
  {
    id: "XLW47Xg_sy",
    title: "The Plague",
    imgUrl: "https://picsum.photos/seed/sZ9dE8e/128/2648?grayscale&blur=6",
    description:
      "Introducing the Venezuela-inspired Chicken, blending ethical style with local craftsmanship",
    size: 86,
    price: "284.05",
    quantity: 1,
  },
  {
    id: "Qu8uGvU2QD",
    title: "The Great Gatsby",
    imgUrl: "https://picsum.photos/seed/WtekyPiQh/128/168?grayscale&blur=1",
    description:
      "Stylish Chips designed to make you stand out with elastic looks",
    size: 64,
    price: "192.55",
    quantity: 1,
  },
  {
    id: "qrJdiHuOp4",
    title: "Of Mice and Men",
    imgUrl: "https://picsum.photos/seed/MrJK1cH/128/68?blur=7",
    description:
      "New Gloves model with 57 GB RAM, 557 GB storage, and tasty features",
    size: 82,
    price: "132.35",
    quantity: 1,
  },
];

console.log(cartProducts);

// wrapper
const basketContainer = document.createElement("div");
basketContainer.className = "max-w-3xl mx-auto bg-white shadow-lg p-6";

const header = document.createElement("div");
header.className = "flex justify-between items-center border-b pb-4";

const title = document.createElement("h2");
title.className = "text-xl font-semibold";
title.textContent = "My Basket";

const itemCount = document.createElement("span");
itemCount.className = "text-gray-500 ml-2";
title.appendChild(itemCount);

const buttonContainer = document.createElement("div");

const closeButton = document.createElement("button");
closeButton.className =
  "px-4 py-2 border rounded text-gray-700 hover:bg-gray-200";
closeButton.textContent = "Close";

const clearButton = document.createElement("button");
clearButton.className =
  "px-4 py-2 border rounded text-red-600 hover:bg-red-100 ml-2";
clearButton.textContent = "Clear Basket";

clearButton.addEventListener("click", () => {
  cartProducts = [];
  emptyBasket.innerHTML = "";
  console.log(cartProducts);

  renderCartItems();
});

buttonContainer.appendChild(closeButton);
buttonContainer.appendChild(clearButton);
header.appendChild(title);
header.appendChild(buttonContainer);

const checkoutButton = document.createElement("button");
checkoutButton.className =
  "w-full bg-black text-white py-3 text-lg font-semibold rounded mt-4 hover:bg-gray-800";
checkoutButton.textContent = "CHECK OUT";

basketContainer.appendChild(header);

const emptyBasket = document.createElement("div");

const subtotalPrice = document.createElement("p");

const emptyBasketText = document.createElement("p");
emptyBasketText.className = "text-center text-lg font-semibold mt-4";
emptyBasketText.textContent = "Your basket is empty 😢";

function renderCartItems(quantityValue = 1) {
  itemCount.textContent = `(${cartProducts.length} items)`;

  if (cartProducts.length === 0) {
    emptyBasket.appendChild(emptyBasketText);
  }

  cartProducts?.forEach((cartProduct) => {
    const plusBtn = document.createElement("button");
    plusBtn.className =
      "text-gray-500 hover:text-gray-700 font-semibold text-xl mr-4 ml-4";
    plusBtn.textContent = "+";

    plusBtn.addEventListener("click", () => {
      cartProducts.forEach((product) => {
        if (product.id === cartProduct.id) {
          product.price = `${
            Number(product.price) + Number(cartProduct.price)
          }`;
          product.quantity++
          emptyBasket.innerHTML = "";
          renderCartItems(quantityValue);
        }
      });
    });

    const minusBtn = document.createElement("button");
    minusBtn.className =
      "text-gray-500 hover:text-gray-700 font-semibold text-xl mr-4 ";
    minusBtn.textContent = "-";

    minusBtn.addEventListener("click", () => {
      cartProducts.forEach((product) => {
        if (product.id === cartProduct.id) {
          product.price = `${
            Number(product.price) - Number(cartProduct.price)
          }`;
          product.quantity--
          emptyBasket.innerHTML = "";
          renderCartItems(quantityValue);
        }
      });
    });

    const quantity = document.createElement("span");
    quantity.className = "text-lg font-semibold";
    quantity.textContent = `${cartProduct.quantity}`;

    const itemContainer = document.createElement("div");
    itemContainer.className = "flex items-center justify-between p-4 border-b";

    const image = document.createElement("img");
    image.src = cartProduct.imgUrl;
    image.alt = "Glasses";
    image.className = "w-20 h-12";

    const itemDetails = document.createElement("div");
    itemDetails.className = "flex-1 ml-4";

    const itemName = document.createElement("p");
    itemName.className = "text-lg font-semibold";
    itemName.textContent = cartProduct.title;

    const color = document.createElement("p");
    color.className = "text-sm text-gray-600";
    const colorLabel = document.createElement("span");
    colorLabel.textContent = "Color: ";
    const colorValue = document.createElement("span");
    colorValue.className = "font-medium";
    colorValue.textContent = faker.vehicle.color();
    color.appendChild(colorLabel);
    color.appendChild(colorValue);

    const size = document.createElement("p");
    size.className = "text-sm text-gray-600";
    const sizeLabel = document.createElement("span");
    sizeLabel.textContent = "Size: ";
    const sizeValue = document.createElement("span");
    sizeValue.className = "font-medium";
    sizeValue.textContent = `${cartProduct.size} mm`;
    size.appendChild(sizeLabel);
    size.appendChild(sizeValue);

    itemContainer.appendChild(minusBtn);
    itemContainer.appendChild(quantity);
    itemContainer.appendChild(plusBtn);
    itemDetails.appendChild(itemName);
    itemDetails.appendChild(color);
    itemDetails.appendChild(size);

    const price = document.createElement("p");
    price.className = "text-lg font-semibold";
    price.textContent = `${(+cartProduct.price * cartProduct.quantity).toFixed(2)}`;

    const removeBtn = document.createElement("button");
    removeBtn.className =
      "text-red-500 hover:text-red-700 font-semibold text-xl ml-4";
    removeBtn.textContent = "×";
    removeBtn.addEventListener("click", () => {
      cartProducts.forEach((product) => {
        if (product.id === cartProduct.id) {
          const index = cartProducts.indexOf(product);
          cartProducts.splice(index, 1);
          emptyBasket.innerHTML = "";
          renderCartItems();
        }
      });
    });

    itemContainer.appendChild(image);
    itemContainer.appendChild(itemDetails);
    itemContainer.appendChild(price);
    itemContainer.appendChild(removeBtn);
    emptyBasket.appendChild(itemContainer);
  });
  subtotalPrice.textContent = `${cartProducts.reduce(
    (acc, product) => acc + Number(product.price),
    0
  )}`;
}

renderCartItems();
const subtotalContainer = document.createElement("div");
subtotalContainer.className =
  "flex justify-between items-center p-4 mt-4 border-t";

const subtotalText = document.createElement("p");
subtotalText.className = "text-lg font-semibold";
subtotalText.textContent = "Subtotal Amount:";

subtotalContainer.appendChild(subtotalText);
subtotalContainer.appendChild(subtotalPrice);

basketContainer.appendChild(emptyBasket);
basketContainer.appendChild(subtotalContainer);
basketContainer.appendChild(checkoutButton);

document.body.appendChild(basketContainer);
