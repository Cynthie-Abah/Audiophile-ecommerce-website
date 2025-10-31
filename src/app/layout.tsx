import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import '@/styles/globals.css'
import Providers from "@/providers/Providers";
import Header from "@/components/base/header";
import Hero from "@/components/landing-page/hero";
import { Footer } from "@/components/base/footer";

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
      <body className={`${manrope.variable} font-sans antialiased`}>
        <Providers>
          <section className=" w-full bg-[#141414] text-white ">
            <Header />
            <Hero />
          </section>
          <main>
            {children}
          </main>
        </Providers>
          <Footer />
      </body>
    </html>
  );
}
