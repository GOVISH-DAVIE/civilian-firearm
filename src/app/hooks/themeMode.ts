import { useContext } from "react"
import { ThemeMode, ThemeModeContext } from "../context/theme"
import { PaletteMode } from "@mui/material"

const useThemeMode = () => {
    const context = useContext(ThemeModeContext)

    if (!context) {
        throw new Error("UseThemeMode must be used inside ThemeModeContext.Provider")
    }

    const changeMode = ({ mode }: { mode: PaletteMode }) => {
        context.setMode(mode)
    }
    return {
        ...context, changeMode
    }
}
export default useThemeMode;