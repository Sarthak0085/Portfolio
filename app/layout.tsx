"use client";
import { Poppins } from 'next/font/google';
import { useState } from 'react';
import './globals.css';
import MobileNavbar from '@/components/Navbar/MobileNavbar';
import Navbar from '@/components/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';

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
    <html lang="en" className='min-h-screen'>
      <body className={`${poppins.className} min-h-screen overflow-x-hidden`}>
        <div>
        <MobileNavbar nav={nav} closeNav={closeNav} />
        <Navbar openNav={openNav} />
      </div>
        {children}
        <Toaster
          position='top-right'
          toastOptions={{
            duration: 5000
          }}
        />
      </body>
    </html>
  )
}
