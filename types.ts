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

export interface NewOrder {
   orderId: string,
      userId: string,
      items: CartItem[],
      subTotal: number; 
      shipping: number; 
      grandTotal: number; 
        tax: number; 
      shippingInfo: {
        name: string,
        email: string,
        phone: string,
        address: string,
        zip?: string,
        city: string,
        country: string,
        paymentMethod: string,
        emoneyNumber?: string,
        emoneyPin?: number,
      }
}
