import { OrderConfirmationEmail } from "./OrderConfirmationEmail";


export default function Preview() {
  return (
    <OrderConfirmationEmail
      userName="Alexei Ward"
      orderId="12345"
      items={[
        { name: 'Headphones', quantity: 1, price: 199 },
        { name: 'Speaker', quantity: 2, price: 99 }
      ]}
      shipping={{
        address: '1137 Williams Avenue',
        city: 'New York',
        zip: '10001',
        country: 'USA'
      }}
      orderLink="https://yourstore.com/orders/12345"
    />
  );
}