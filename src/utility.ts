import { cart } from "./db";
import { renderProductDetail } from "./detail";
import { renderShop } from "./shop";
import type { Product } from "./types";

export function addToCart(product: Product, hasCart: boolean) {
  const index = cart.findIndex((p) => p.id === product.id);

  product.hasCart
    ? cart?.forEach((p) => {
        p.id === product.id ? cart.splice(index, 1) : null;
      })
    : cart.push(product);

  product.hasCart = !product.hasCart;
  renderProductDetail(product);
}

export function addToCartShop(product: Product, hasCart: boolean) {
  const index = cart.findIndex((p) => p.id === product.id);
  product.hasCart
    ? cart?.forEach((p) => {
        p.id === product.id ? cart.splice(index, 1) : null;
      })
    : cart.push(product);
  product.hasCart = !product.hasCart;

  renderShop();
}
