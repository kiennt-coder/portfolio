import Link from "next/link";
import { cn } from "@helpers/common";
import { languages } from "@lib/i18n/settings";
import { MenuDrawerProps } from "@/types/props";
import FollowMe from "@components/home/FollowMe";
import { BarsThree, Check, Mark } from "@components/icons";
import MenuDrawerTheme from "@components/home/MenuDrawerTheme";


export default function MenuDrawer({ lng }: MenuDrawerProps) {
    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer" className="btn btn-ghost drawer-button">
                    <BarsThree className="text-primary" />
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="bg-base-200 text-base-content min-h-full md:w-96 w-[25rem] p-4">
                    <div className="text-end mb-6">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="btn btn-sm btn-circle btn-outline">
                            <Mark className="size-4" />
                        </label>
                    </div>
                    <ul className="menu text-lg font-semibold p-0">
                        <li>
                            <Link href="#home">Home</Link>
                        </li>
                        <li>
                            <Link href="#about">About</Link>
                        </li>
                        <li>
                            <Link href="#works">Works</Link>
                        </li>
                        <li>
                            <Link href="#service">Service</Link>
                        </li>
                        <li>
                            <Link href="#contact">Contact</Link>
                        </li>
                        <li>
                            <Link href="#blog">Blog</Link>
                        </li>
                        <li>
                            <MenuDrawerTheme />
                        </li>
                        <li>
                            <details open>
                                <summary>Language</summary>
                                <ul className="text-base">
                                    {
                                        languages.map(lang => (
                                            <li key={lang}><Link href={`/${lang}`}>
                                                <Check className={cn("size-5 opacity-0 invisible duration-300", lang === lng && "opacity-100 visible")} />
                                                {lang}
                                            </Link></li>
                                        ))
                                    }
                                </ul>
                            </details>
                        </li>
                    </ul>
                    <FollowMe className="mt-6 px-4" />
                </div>
            </div>
        </div>
    )
}
