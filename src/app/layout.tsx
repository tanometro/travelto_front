import "./globals.css";
import type { Metadata } from "next";
import SessionAuthProvider from "@/src/context/SessionAuthProvider";
import { Inter } from "next/font/google";
import { CartProvider } from "@/src/app/context/cart";
import NavBar from "@/components/NavBar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bienvenido a TravelTo",
  description: "Creado por el Grupo 03 - PF - Henry Academy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionAuthProvider>
          <CartProvider>
            <NavBar />
            {children}
          </CartProvider>
        </SessionAuthProvider>
        <script src="../path/to/flowbite/dist/flowbite.js"></script>
      </body>
    </html>
  );
}
