"use client"

import Link from "next/link"
import { cn } from "@helpers/common"
import { HeaderMenuItemProps } from "@/types/props"
import { MouseEvent, useCallback, useEffect, useState } from "react"
import useWindowScroll from "@/hooks/useWindowScroll"

const MenuItem = ({ onClick, children, href, isActive }: HeaderMenuItemProps) => {
    return (
        <li><Link onClick={onClick} href={href} className={cn("text-base-100 bg-transparent xl:text-lg text-base font-semibold xl:p-4 p-3 hover:text-primary focus:text-base-100 active:!text-base-100 hover:bg-transparent focus:bg-transparent active:!bg-transparent", isActive && "!text-primary")}>{children}</Link></li>
    )
}

const menus: string[] = ["home", "about", "works", "service", "contact", "blog"]

export default function HeaderMenu() {
    const { scrollValue } = useWindowScroll()
    const [currentMenuItem, setCurrentMenuItem] = useState("home")

    const handleScrollToElement = useCallback((event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>, elementId: string) => {
        event.preventDefault();

        if (!document) return;

        const element = document.getElementById(elementId);

        if (!element) return;

        element.scrollIntoView({ behavior: "smooth" });
    }, [])

    useEffect(() => {
        menus.forEach(menuItem => {
            const element = document.getElementById(menuItem);
            if (element) {
                const boundingClientRect = element.getBoundingClientRect();
                const { top, bottom } = boundingClientRect;

                const isElementIntoView = top <= 110 && bottom >= 110;
                const isValueDuplicate = currentMenuItem === menuItem;

                if (isElementIntoView && !isValueDuplicate) {
                    setCurrentMenuItem(menuItem)
                }
            }
        })

        // eslint-disable-next-line
    }, [scrollValue])

    return (
        <ul className="menu menu-horizontal bg-transparent p-0" data-theme="light">
            <MenuItem onClick={(event) => handleScrollToElement(event, "home")} href="#home" isActive={currentMenuItem === "home"}>Home</MenuItem>
            <MenuItem onClick={(event) => handleScrollToElement(event, "about")} href="#about" isActive={currentMenuItem === "about"}>About</MenuItem>
            <MenuItem onClick={(event) => handleScrollToElement(event, "works")} href="#works" isActive={currentMenuItem === "works"}>Works</MenuItem>
            <MenuItem onClick={(event) => handleScrollToElement(event, "service")} href="#service" isActive={currentMenuItem === "service"}>Service</MenuItem>
            <MenuItem onClick={(event) => handleScrollToElement(event, "contact")} href="#contact" isActive={currentMenuItem === "contact"}>Contact</MenuItem>
            <MenuItem onClick={(event) => handleScrollToElement(event, "blog")} href="#blog" isActive={currentMenuItem === "blog"}>Blog</MenuItem>
        </ul>
    )
}
