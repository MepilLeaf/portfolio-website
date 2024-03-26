import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Nav from "@/components/rootLayout/nav/Nav";
import Footer from "@/components/rootLayout/footer/Footer";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
  title: "John Henriksen Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.className} bg-[color:var(--background-black)] text-[color:var(--off-white)]`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
