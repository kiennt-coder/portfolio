"use client"

import { ChangeEventHandler } from "react"
import { useTheme } from "@/hooks/useTheme"
import { MoonOutlined, SunOutlined } from "@icons/index"

export default function ThemeSwapButton() {
    const { toggleTheme } = useTheme()

    const handleThemeChange: ChangeEventHandler<HTMLInputElement> = () => {
        toggleTheme()
    }

    return (
        <label className="swap swap-rotate text-black dark:text-white px-4">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onChange={handleThemeChange} value="light" />

            {/* sun icon */}
            <SunOutlined />

            {/* moon icon */}
            <MoonOutlined />
        </label>
    )
}
