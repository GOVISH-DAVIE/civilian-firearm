"use client"
import { createTheme, CssBaseline, PaletteMode, ThemeProvider } from "@mui/material";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import getLPTheme from "../getLPTheme";
import { Cookies } from "@/utils/cookies";

// const themeMode = createContext()
export interface ThemeModeContextProps {
    mode: PaletteMode
    setMode: React.Dispatch<React.SetStateAction<PaletteMode>>
}
export const ThemeModeContext = createContext<ThemeModeContextProps>({
    mode: 'light',
    setMode: () => { },
});

export const ThemeMode = ({ children }: { children: ReactNode }) => {
    const [mode, setMode] = useState<PaletteMode>('light');
    const LPtheme = createTheme(getLPTheme(mode));
    
    useEffect(() => {
        if (Cookies.get('theme') != null && Cookies.get('theme').length !=  0) {
  
            setMode(
              Cookies.get('theme')  as PaletteMode
           )
  
       }
      }, [])

    return <ThemeModeContext.Provider value={{
        mode, setMode
    }}>

        <ThemeProvider theme={LPtheme}>
            <CssBaseline />

            {
                children
            }
        </ThemeProvider>

    </ThemeModeContext.Provider>
}