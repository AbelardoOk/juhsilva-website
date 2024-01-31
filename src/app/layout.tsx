import type { Metadata } from "next";
import { Inter, Yatra_One as Yatra } from "next/font/google";
import "./globals.css";
import { Header } from "../components/header";

const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "800"],
  variable: "--font-inter",
});

const yatra = Yatra({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-yatra",
});

export const metadata: Metadata = {
  title: "JuhSilva",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${yatra.variable} font-sans`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
