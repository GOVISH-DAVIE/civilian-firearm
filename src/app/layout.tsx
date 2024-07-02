"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import { Box, CircularProgress, ToggleButton, ToggleButtonGroup } from "@mui/material";
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import { ThemeMode } from "./context/theme";
import Footer from "./components/Footer";
import { useCallback, useEffect, useState } from "react";
import useThemeMode from "./hooks/themeMode";
const inter = Inter({ subsets: ["latin"] });


 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useThemeMode()
  const [isMounted, setIsMounted] = useState<Boolean>(false);
  useEffect(() => {
    document.body.style.overflow = "auto";
    setIsMounted(true)
  }, [])
  useEffect(() => {
   if(  document.body.style.overflow = "hidden"){
    document.body.style.overflow = "auto";
   }
  }, [  document.body.style.overflow ])
  const onRefChange = useCallback((node:any) => {
    if (node === null) { 
      // DOM node referenced by ref has been unmounted
    } else {
      // node.style.overflow = 'auto'
      //  node.style.overflow = 'auto' 
    }
  }, []);



  if (!isMounted) {
    return null

  }

  

  return (

    < html>

      <body ref={onRefChange} style={{
        backgroundColor: 'background.default',
        overflow: 'scroll !important',



      }} className={inter.className}>
        <ThemeMode  >


          {children}
          <Footer />




        </ThemeMode>
      </body>
    </html >
  );
}
