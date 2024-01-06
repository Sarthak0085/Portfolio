"use client";
import { Poppins } from 'next/font/google';
import { useState } from 'react';
import './globals.css';
import MobileNavbar from '@/components/Navbar/MobileNavbar';
import Navbar from '@/components/Navbar/Navbar';

const poppins = Poppins({ subsets: ['latin'], weight:["400","500", "700"] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  
   const [nav, setNav] = useState(false);
  const openNav = () => {
    setNav(true);
  }

  const closeNav = () => {
    setNav(false)
  }
  
  return (
    <html lang="en">
      <body className={`${poppins.className} min-h-screen overflow-x-hidden`}>
        <div>
        <MobileNavbar nav={nav} closeNav={closeNav} />
        <Navbar openNav={openNav} />
      </div>
        {children}
      </body>
    </html>
  )
}
