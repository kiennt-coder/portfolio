"use client";

import { cn } from "@helpers/common";
import { THEME } from "@enums/common";
import { useTheme } from "@hooks/useTheme";
import { ChevronDown } from "@components/icons";
import { DropdownThemeProps } from "@/types/props";


export default function DropdownTheme({ className }: DropdownThemeProps) {
    const { changeTheme } = useTheme()

    const handleChangeTheme = (theme: THEME) => {
        changeTheme(theme)
    }

    return (
        <div className={cn("dropdown dropdown-end", className)}>
            <div tabIndex={0} role="button" className="btn xl:px-4 px-3 xl:text-lg text-base text-white font-semibold bg-transparent border-none rounded-none shadow-none hover:text-primary hover:bg-transparent">
                Theme
                <ChevronDown className="swap-on size-4" />
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-200 rounded-box z-[1] w-52 p-2 shadow gap-2">
                <li><button className="hover:bg-base-100 focus:bg-base-100 active:!text-base-content active:!bg-base-100 font-semibold" data-theme="light" onClick={() => handleChangeTheme(THEME.LIGHT)}>Light</button></li>
                <li><button className="hover:bg-base-100 focus:bg-base-100 active:!text-base-content active:!bg-base-100 font-semibold" data-theme="dark" onClick={() => handleChangeTheme(THEME.DARK)}>Dark</button></li>
            </ul>
        </div>
    )
}
