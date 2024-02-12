import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ROMI AI",
  description: "Generated Rizz response during texts to save your dating life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="overflow-hidden flex flex-col gap-8 px-8 md:px-20  bg-slate900">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
