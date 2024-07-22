import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Uttarakhand Culture",
  description: "Our aim is to ensure that this invaluable heritage is passed down to future generations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={roboto.className}>
    <main>
        <Navbar/>
        {children}
        <Footer/>
    </main>
    </body>
    </html>
  );
}
