'use client'

import React, { useEffect, useState } from "react"
import "jsvectormap/dist/jsvectormap.css"
import "flatpickr/dist/flatpickr.min.css"
import "@/css/satoshi.css"
import "@/css/style.css"
import Loader from "@/components/common/loader";
import Navbar from "@/components/ui/navbar/index";
import Footer from "@/components/ui/footer";
import AuthProvider from '@/components/auth/AuthProvider';


// export const metadata = {
//   title: "AI App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    <AuthProvider>
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="flex flex-col min-h-screen">
        <Navbar/>
        <div
          id="content"
          className="flex-grow mx-auto w-full  bg-white"
        >
           {loading ? <Loader /> : children} 
        </div>
        <Footer/>    
        </div>
       
      </body>
    </html>
    </AuthProvider>
  );
}
