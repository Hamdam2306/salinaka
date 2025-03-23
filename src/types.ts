// export interface Product {
//   id: string;
//   title: string;
//   imgUrl: string;
//   size: number;
//   description: string;
//   price: string;
//   quantity: number;
// }

export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  size: "28mm" | "36mm" | "42mm" | null;
  category: string;
  imageUrl: string;
  quantity: number;
  hasCart: boolean;
}
