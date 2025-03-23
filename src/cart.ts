import type { Product } from "./types";
import { cart, clearCart } from "./db";
import { renderShop } from "./shop";

export function renderCart() {
  document.body.innerHTML = "";
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
  closeButton.addEventListener("click", () => renderShop());

  const clearButton = document.createElement("button");
  clearButton.className =
    "px-4 py-2 border rounded text-red-600 hover:bg-red-100 ml-2";
  clearButton.textContent = "Clear Basket";

  clearButton.addEventListener("click", () => {
    clearCart();
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

  function renderCartItems() {
    itemCount.textContent = `(${cart.length} items)`;

    if (cart.length === 0) {
      emptyBasket.appendChild(emptyBasketText);
    }

    cart?.forEach((cartProduct) => {
      const plusBtn = document.createElement("button");
      plusBtn.className =
        "text-gray-500 hover:text-gray-700 font-semibold text-xl mr-4 ml-4 border border-gray-300 px-2 hover:bg-gray-100";
      plusBtn.textContent = "+";

      plusBtn.addEventListener("click", () => {
        cart.forEach((product) => {
          if (product.id === cartProduct.id) {
            product.quantity++;
            emptyBasket.innerHTML = "";
            renderCartItems();
          }
        });
      });

      const minusBtn = document.createElement("button");
      minusBtn.className =
        "text-gray-500 hover:text-gray-700 font-semibold text-xl mr-4 ml-4 border border-gray-300 px-2 hover:bg-gray-100";

      minusBtn.textContent = "-";

      minusBtn.addEventListener("click", () => {
        cart.forEach((product) => {
          if (product.id === cartProduct.id && product.quantity > 1) {
            product.quantity--;
            emptyBasket.innerHTML = "";
            renderCartItems();
          }
        });
      });

      const quantity = document.createElement("span");
      quantity.className = "text-lg font-semibold";
      quantity.textContent = `${cartProduct.quantity}`;

      const itemContainer = document.createElement("div");
      itemContainer.className =
        "flex items-center justify-between p-4 border-b";

      const image = document.createElement("img");
      image.src = cartProduct.imageUrl;
      image.alt = "Glasses";
      image.className = "w-20 ";

      const itemDetails = document.createElement("div");
      itemDetails.className = "flex-1 ml-4";

      const itemName = document.createElement("p");
      itemName.className = "text-lg font-semibold";
      itemName.textContent = cartProduct.name;

      const size = document.createElement("p");
      size.className = "text-sm text-gray-600";
      const sizeLabel = document.createElement("span");
      sizeLabel.textContent = "Size: ";
      const sizeValue = document.createElement("span");
      sizeValue.className = "font-medium";
      sizeValue.textContent = `${cartProduct.size} `;
      size.appendChild(sizeLabel);
      size.appendChild(sizeValue);

      itemContainer.appendChild(minusBtn);
      itemContainer.appendChild(quantity);
      itemContainer.appendChild(plusBtn);
      itemDetails.appendChild(itemName);
      itemDetails.appendChild(size);

      const price = document.createElement("p");
      price.className = "text-lg font-semibold";
      price.textContent = `$${(
        +cartProduct.price * cartProduct.quantity
      ).toFixed(2)}`;

      const removeBtn = document.createElement("button");
      removeBtn.className =
        "text-red-500 hover:text-red-700 font-semibold text-xl ml-4 border border-red hover:bg-red-200 px-2";
      removeBtn.textContent = "X";
      removeBtn.addEventListener("click", () => {
        cart.forEach((product) => {
          if (product.id === cartProduct.id) {
            const index = cart.indexOf(product);
            product.hasCart = false;
            cart.splice(index, 1);
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

    let total = 0;

    cart.forEach((product) => {
      total += product.price * product.quantity;
    });

    subtotalPrice.textContent = `$${total}`;
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
}
