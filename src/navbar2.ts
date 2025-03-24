import { renderCart } from "./cart";
import { renderShop } from "./shop";

export function createNavbar() {
  const navbar = document.createElement("nav");
  navbar.className =
    "flex items-center justify-between px-10 py-6 bg-white shadow-md mb-5";

  const leftSection = document.createElement("div");
  leftSection.className = "flex items-center space-x-6";

  const logo = document.createElement("img");
  logo.src =
    "https://salinaka-ecommerce.web.app/images/logo-full.059e10fa5fedbfb65165e7565ed3936f.png";
  logo.alt = "Logo";
  logo.className = "h-10";

  const menu = document.createElement("div");
  menu.className = "hidden md:flex space-x-6 text-gray-600 text-lg";

  const menuItems = ["Home", "Shop", "Featured", "Recommended"];
  menuItems.forEach((item) => {
    const link = document.createElement("button");
    link.className = "hover:text-black";
    link.textContent = item;
    link.textContent === "Shop"
      ? link.addEventListener("click", () => renderShop())
      : null;
    menu.appendChild(link);
  });

  leftSection.appendChild(logo);
  leftSection.appendChild(menu);

  const rightSection = document.createElement("div");
  rightSection.className = "flex items-center space-x-4";

  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search product...";
  searchInput.className = "border border-gray-300 rounded-lg px-3 py-2";

  const cartButton = document.createElement("button");
  cartButton.className = "relative text-2xl";
  cartButton.textContent = "🛒";
  cartButton.addEventListener("click", () => renderCart());

  const signUpButton = document.createElement("button");
  signUpButton.className =
    "bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800";
  signUpButton.textContent = "Sign Up";

  const signInButton = document.createElement("button");
  signInButton.className =
    "border border-gray-400 px-4 py-2 rounded-md hover:bg-gray-200";
  signInButton.textContent = "Sign In";

  rightSection.appendChild(searchInput);
  rightSection.appendChild(cartButton);
  rightSection.appendChild(signUpButton);
  rightSection.appendChild(signInButton);

  navbar.appendChild(leftSection);
  navbar.appendChild(rightSection);

  const mainContent = document.createElement("div");
  mainContent.className = "text-center text-2xl font-bold";
  mainContent.appendChild(navbar);

  document.body.appendChild(mainContent);
}
