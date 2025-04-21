"use client"
import Navbar from "@/Components/Navbar";
import "./globals.css";
import { Inter} from "next/font/google"
import StayTouch from "@/Components/StayTouch";
import Footer from "@/Components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const brandFont = Inter({preload : false}) 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={brandFont.className}>
        <div className="sticky top-10 z-[100]">
        <Navbar/>
        </div>
        {children}
      </body>
      <StayTouch/>
      <Footer/>
    </html>
  );
}
