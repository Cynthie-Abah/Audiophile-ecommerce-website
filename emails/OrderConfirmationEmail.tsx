import { Html, Body, Container, Heading, Text, Button, Img } from "@react-email/components";

interface OrderConfirmationEmailProps {
  userName: string;
  orderId: string;
  items: { name: string; quantity: number; price: number; imageUrl?: string }[];
  shipping: {
    address: string;
    city: string;
    zip: string;
    country: string;
  };
  orderLink: string;
}

export function OrderConfirmationEmail({
  userName,
  orderId,
  items,
  shipping,
  orderLink,
}: OrderConfirmationEmailProps) {
  return (
    <Html>
      <Body style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: 0, backgroundColor: "#f4f4f5" }}>
        {/* Outer Container */}
        <Container style={{ maxWidth: "600px", margin: "40px auto", backgroundColor: "#fff", borderRadius: "8px", overflow: "hidden", boxShadow: "0 0 15px rgba(0,0,0,0.1)" }}>

          {/* Header */}
          <div style={{ backgroundColor: "#000", padding: "20px", textAlign: "center" }}>
            <img
              src="https://audiophile-ecommerce-website-pi.vercel.app/audiophile.svg"
              alt="Audiophile Logo"
              style={{ maxWidth: "150px", margin: "0 auto" }}
            />
          </div>

          {/* Greeting */}
          <div style={{ padding: "30px 20px 20px 20px", textAlign: "center" }}>
            <Heading style={{ fontSize: "22px", marginBottom: "10px", color: "#111" }}>
              Hello {userName},
            </Heading>
            <Text style={{ fontSize: "16px", marginBottom: "30px", color: "#555" }}>
              Your order <strong>#{orderId}</strong> has been successfully placed!
            </Text>
          </div>

          {/* Order Summary */}
          <div style={{ padding: "0 20px 20px 20px" }}>
            <Heading style={{ fontSize: "18px", marginBottom: "10px", borderBottom: "1px solid #e5e5e5", paddingBottom: "5px", color: "#111" }}>
              Order Summary
            </Heading>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {items.map((item) => (
                <li key={item.name} style={{ display: "flex", alignItems: "center", marginBottom: "15px", borderBottom: "1px solid #f0f0f0", paddingBottom: "10px" }}>
                  {item.imageUrl && (
                    <Img
                      src={item.imageUrl}
                      alt={item.name}
                      width={60}
                      height={60}
                      style={{ borderRadius: "5px", marginRight: "15px", objectFit: "cover" }}
                    />
                  )}
                  <div>
                    <Text style={{ fontSize: "16px", color: "#111", fontWeight: "bold" }}>{item.name}</Text>
                    <Text style={{ fontSize: "14px", color: "#555" }}>Quantity: {item.quantity} - ${item.price}</Text>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Shipping Details */}
          <div style={{ padding: "0 20px 30px 20px" }}>
            <Heading style={{ fontSize: "18px", marginBottom: "10px", borderBottom: "1px solid #e5e5e5", paddingBottom: "5px", color: "#111" }}>
              Shipping Details
            </Heading>
            <Text style={{ fontSize: "14px", color: "#555", lineHeight: "1.5" }}>
              {shipping.address}, {shipping.city}, {shipping.zip}, {shipping.country}
            </Text>
          </div>

          {/* CTA Button */}
          <div style={{ textAlign: "center", padding: "0 20px 30px 20px" }}>
            <Button
              href={orderLink}
              style={{
                backgroundColor: "#D87D4A",
                color: "#fff",
                fontSize: "16px",
                fontWeight: "bold",
                padding: "12px 25px",
                textDecoration: "none",
                borderRadius: "5px",
                display: "inline-block",
              }}
            >
              View your order
            </Button>
          </div>

          {/* Footer */}
          <div style={{ padding: "20px", fontSize: "12px", color: "#888", textAlign: "center", borderTop: "1px solid #e5e5e5" }}>
            If you have questions, contact us at <a href="mailto:support@audiophile.com" style={{ color: "#D87D4A", textDecoration: "none" }}>support@audiophile.com</a>.
          </div>
        </Container>
      </Body>
    </Html>
  );
}
