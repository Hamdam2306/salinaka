import type { Product } from "./shop";

let cart: string[] = [];

function addToCart(productName: string) {
  cart.push(productName);
  console.log("Cart:", cart);
}

function renderProductDetail(product: Product) {
  document.body.innerHTML = "";

  document.body.className = "max-w-5xl m-auto bg-gray-100 p-4 md:p-10";

  const backLink = document.createElement("a");
  backLink.href = "#";
  backLink.textContent = "← Back to shop";
  backLink.className = "text-blue-600 hover:text-blue-800 mb-4 inline-block";
  document.body.appendChild(backLink);

  const container = document.createElement("div");
  container.className =
    "flex flex-col md:flex-row gap-8 bg-white p-6 rounded-md shadow-md";
  document.body.appendChild(container);

  const leftSide = document.createElement("div");
  leftSide.className = "flex flex-col items-center md:w-1/3";
  container.appendChild(leftSide);

  const mainImage = document.createElement("img");
  mainImage.src = product.imageUrl;
  mainImage.alt = product.name;
  mainImage.className = "w-full h-auto object-cover rounded-md mb-4";
  leftSide.appendChild(mainImage);

  const thumbnailsContainer = document.createElement("div");
  thumbnailsContainer.className = "flex gap-2";
  leftSide.appendChild(thumbnailsContainer);

  for (let i = 0; i < 3; i++) {
    const thumb = document.createElement("img");
    thumb.src = product.imageUrl;
    thumb.alt = `${product.name} thumbnail ${i + 1}`;
    thumb.className =
      "w-16 h-16 object-cover rounded cursor-pointer border border-gray-200";
    thumb.addEventListener("click", () => {
      mainImage.src = thumb.src;
    });
    thumbnailsContainer.appendChild(thumb);
  }

  const rightSide = document.createElement("div");
  rightSide.className = "flex flex-col md:w-2/3";
  container.appendChild(rightSide);

  const brandEl = document.createElement("p");
  brandEl.className = "text-sm text-gray-500 uppercase tracking-wider mb-2";
  brandEl.textContent = product.category;
  rightSide.appendChild(brandEl);

  const productNameEl = document.createElement("h1");
  productNameEl.className = "text-2xl md:text-3xl font-bold mb-4";
  productNameEl.textContent = product.name;
  rightSide.appendChild(productNameEl);

  const descriptionEl = document.createElement("p");
  descriptionEl.className = "text-gray-700 mb-4";
  descriptionEl.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, praesentium? Corporis aperiam alias laborum maxime nostrum culpa laudantium voluptatum mollitia.";
  rightSide.appendChild(descriptionEl);

  const sizeLabel = document.createElement("label");
  sizeLabel.className = "block mb-2 font-semibold";
  sizeLabel.textContent = "Lens Width and Frame Size:";
  rightSide.appendChild(sizeLabel);

  const sizeSelect = document.createElement("select");
  sizeSelect.className = "border border-gray-300 rounded-md px-3 py-2 mb-4";

  ["28 mm", "36 mm", "42 mm"].forEach((size) => {
    const option = document.createElement("option");
    option.value = size;
    option.textContent = size;
    sizeSelect.appendChild(option);
  });
  rightSide.appendChild(sizeSelect);

  const colorLabel = document.createElement("p");
  colorLabel.className = "font-semibold mb-2";
  colorLabel.textContent = "Choose Color:";
  rightSide.appendChild(colorLabel);

  const colorsContainer = document.createElement("div");
  colorsContainer.className = "flex items-center gap-3 mb-4";
  rightSide.appendChild(colorsContainer);

  const colorOptions = ["#000000", "#ff0000", "#0000ff", "#ff00ff", "#8b4513"];
  colorOptions.forEach((color) => {
    const colorCircle = document.createElement("div");
    colorCircle.className =
      "w-6 h-6 rounded-full cursor-pointer border border-gray-200";
    colorCircle.style.backgroundColor = color;
    colorCircle.addEventListener("click", () => {
      console.log("Selected color:", color);
    });
    colorsContainer.appendChild(colorCircle);
  });

  const priceEl = document.createElement("p");
  priceEl.className = "text-2xl font-bold mb-4";
  priceEl.textContent = product.price;
  rightSide.appendChild(priceEl);

  const addButton = document.createElement("button");
  addButton.className =
    "bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200";
  addButton.textContent = "Add to Basket";
  addButton.addEventListener("click", () => addToCart(product.name));
  rightSide.appendChild(addButton);
}

const demoProduct: Product = {
  name: "Tiktilaok Manok",
  price: "$78.00",
  category: "Sexbomb",
  imageUrl:
    "https://cdn-images.farfetch-contents.com/16/06/97/27/16069727_30146621_2048.jpg",
};

document.addEventListener("DOMContentLoaded", () => {
  renderProductDetail(demoProduct);
});
