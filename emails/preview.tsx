import { OrderConfirmationEmail } from "./OrderConfirmationEmail";

const order = { 
    orderId: 'string',
    userId: 'string',
    items: [
        {  slug: 'string',
        name: 'Speaker',
        price: 300,
        quantity: 2,
        image: 'string'},
        {  slug: 'string',
        name: 'Speaker',
        price: 300,
        quantity: 2,
        image: 'string'},
        {  slug: 'string',
        name: 'Speaker',
        price: 300,
        quantity: 2,
        image: 'string'},
      ],
    totalAmount: 3000,
    subTotal: 4000, 
    shipping: 4000, 
    grandTotal: 10000, 
      tax: 20, 
    shippingInfo: {
      name: 'string',
      email: 'string',
      phone: 'string',
      address: 'string',
      zip: 'string',
      city: 'string',
      country: 'string',
      paymentMethod: 'string',
      emoneyNumber: 'string',
      emoneyPin: 2323,
        }
      }
export default function Preview() {
  
  return (
    <OrderConfirmationEmail orderInfo={order}/>
  );
}