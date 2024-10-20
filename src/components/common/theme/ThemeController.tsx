"use client"

import { useTheme } from "@hooks/useTheme"
import { THEME } from "@configs/enums/common"
import { BaseThemeControllerProps } from "@/types/base"


export default function ThemeController({ children }: BaseThemeControllerProps) {
    const { changeTheme, theme } = useTheme()

    return (
        <>{children(theme as THEME, changeTheme)}</>
    )
}
