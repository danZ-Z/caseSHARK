import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CaseShark",
  description: "Create your own case",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Navbar/>
          {children}
          <Footer/>
          <Toaster/>
      </body>
    </html>
  );
}
