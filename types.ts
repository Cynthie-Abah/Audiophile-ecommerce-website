export interface Product {
  _id: number | string;
  name: string;
  slug: string;
  available: number;
  description: string;
  category: string;
  price: number;
  image: {
    desktop: string;
    mobile: string;
    tablet: string;
  };
  new: boolean;
}
export interface CartItem {
  slug: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}
export interface Cart{
    userId: string,
    items: CartItem[]
}