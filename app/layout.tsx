import type { Metadata } from "next";
import Reminder from "@/components/shared/Reminder";
import { Kanit } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Toaster } from "@/components/ui/toaster";
import { useState , useEffect } from "react";

const inter = Kanit({ subsets: ["latin"], weight: ["100", "300", "400"] });

export const metadata: Metadata = {
  title: "RUMI AI",
  description: "Generated Rizz response during texts to save your dating life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

// const [showAlert, setShowAlert] = useState(false)
// useEffect(() => {
//    const reminderTimeout = setTimeout(() => {
    
//      setShowAlert(true);
//    }, 1 * 60 * 1000); 

//    return () => clearTimeout(reminderTimeout);

// },[])
  return (
    <html lang="en">
      <body className="overflow-x-hidden bg-slate900">
        <div className={inter.className}>
          <Header />
          <main className="flex flex-col relative">{children}</main>
          <Toaster />
          {/* <div className="absolute top-1/2 right-1/2">{showAlert && <Reminder />}</div> */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
