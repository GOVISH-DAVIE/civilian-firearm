"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import { Box, CircularProgress, ToggleButton, ToggleButtonGroup } from "@mui/material";
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import { ThemeMode } from "./context/theme";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import useThemeMode from "./hooks/themeMode";
const inter = Inter({ subsets: ["latin"] });



interface ToggleCustomThemeProps {
  showCustomTheme: Boolean;
  toggleCustomTheme: () => void;
}

function ToggleCustomTheme({
  showCustomTheme,
  toggleCustomTheme,
}: ToggleCustomThemeProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100dvw',
        position: 'fixed',
        bottom: 24,
      }}
    >
      <ToggleButtonGroup
        color="primary"
        exclusive
        value={showCustomTheme}
        onChange={toggleCustomTheme}
        aria-label="Platform"
        sx={{
          backgroundColor: 'background.default',
          '& .Mui-selected': {
            pointerEvents: 'none',
          },
        }}
      >
        <ToggleButton value>
          <AutoAwesomeRoundedIcon sx={{ fontSize: '20px', mr: 1 }} />
          Custom theme
        </ToggleButton>
        <ToggleButton value={false}>Material Design 2</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useThemeMode()
  const [isMounted, setIsMounted] = useState<Boolean>(false);
  useEffect(() => {
     setIsMounted(true)
  }, [])


  if (!isMounted) {
    return <CircularProgress></CircularProgress>
    
  }

  return (

    <html lang="en">
      <ThemeMode  >
 
        <body style={{
          backgroundColor:'background.default',
          overflow:'scroll', 
          


        }} className={inter.className}>

          {children}
          <Footer />
          </body> 

        

      </ThemeMode>
    </html >
  );
}
