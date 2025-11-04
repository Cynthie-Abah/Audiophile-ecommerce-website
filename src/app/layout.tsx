import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import '@/styles/globals.css'
import Providers from "@/providers/Providers";
import Header from "@/components/base/header";
import Hero from "@/components/landing-page/hero";
import { Footer } from "@/components/base/footer";
import { Bounce, ToastContainer } from "react-toastify";
import CartModal from "@/components/cart-modal";
import { Suspense } from "react";
import Spinner from "@/components/ui/spinner";
import { CheckoutForm } from "@/components/checkout/checkout-form";
import OrderConfirmationPage from "@/components/checkout/OrderConfirmation";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Audiophile",
  description: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${manrope.variable} font-sans antialiased`}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
        <Providers>
          <section className=" w-full bg-[#141414] text-white min-h-20 md:min-h-24 ">
            <Suspense fallback={<Spinner />}><Header /></Suspense>
            <Hero />
          </section>
          <main>
            {children}
            <Suspense fallback={<Spinner />}><CartModal /></Suspense>
            <Suspense fallback={<Spinner />}><OrderConfirmationPage /></Suspense>
          </main>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
