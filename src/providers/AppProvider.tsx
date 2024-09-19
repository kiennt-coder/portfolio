
import { THEMES } from "@constants/theme";
import { ThemeProvider } from "next-themes";
import { DARK_MODE, THEME } from "@enums/common";
import { AppProviderProps } from "@/types/props";

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <ThemeProvider attribute={DARK_MODE.DATA_THEME} themes={THEMES} defaultTheme={THEME.SYSTEM}>
      {children}
    </ThemeProvider>
  )
}
