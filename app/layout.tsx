import type { Metadata } from "next";
import { Kanit} from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";


const inter = Kanit({ subsets: ["latin"], weight: ['100','300',"400"] });

export const metadata: Metadata = {
  title: "RUMI AI",
  description: "Generated Rizz response during texts to save your dating life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden bg-slate900">
        <div className={inter.className}>
          <Header />
          <main className="flex flex-col">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
