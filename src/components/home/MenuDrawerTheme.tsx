"use client"

import { cn } from "@helpers/common"
import { THEME } from "@enums/common"
import useClient from "@hooks/useClient"
import { Check } from "@components/icons"
import { ThemeController } from "@components/common"

export default function MenuDrawerTheme() {
    const [isMounted] = useClient()

    return (
        <ThemeController>
            {(theme, onThemeChange) => (
                <details open>
                    <summary>Theme</summary>
                    <ul className="text-base">
                        <li><span onClick={() => onThemeChange(THEME.LIGHT)}>
                            <Check suppressHydrationWarning className={cn("size-5 opacity-0 invisible duration-300", isMounted && theme === THEME.LIGHT && "opacity-100 visible")} />
                            Light
                        </span></li>
                        <li><span onClick={() => onThemeChange(THEME.DARK)}>
                            <Check suppressHydrationWarning className={cn("size-5 opacity-0 invisible duration-300", isMounted && theme === THEME.DARK && "opacity-100 visible")} />
                            Dark
                        </span></li>
                    </ul>
                </details>
            )}
        </ThemeController>
    )
}
