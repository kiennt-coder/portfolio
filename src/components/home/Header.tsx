"use client"

import Image from "next/image";
import { cn } from "@helpers/common";
import { Layout } from "@components/ui";
import { BarsThree } from "@components/icons";
import { useTranslation } from "@lib/i18n/client";
import useWindowScroll from "@hooks/useWindowScroll";
import { DropdownLanguage, DropdownTheme, HeaderMenu } from "@/components/home";

export default function Header({ lng }: { lng: string }) {
    const { isScroll } = useWindowScroll();

    const { t } = useTranslation(lng, "home")

    return (
        <Layout.Header>
            <div className={cn("fixed top-0 right-0 left-0 z-10 lg:py-6 py-0 shadow-none bg-transparent duration-500 ease-int", isScroll && "py-0 shadow-lg bg-base-200")} data-theme="dark">
                <div className="container mx-auto flex flex-row items-center">
                    <div className="lg:basis-2/12 md:basis-3/12 sm:basis-4/12 basis-5/12 px-3">
                        <Image src="/images/default-logo.png" width={1794} height={901} alt="Header Logo" priority />
                    </div>
                    <div className="lg:basis-10/12 md:basis-9/12 sm:basis-8/12 basis-7/12 px-3 flex flex-row items-center justify-end">
                        <Layout.Nav className="lg:block hidden">
                            <HeaderMenu />
                        </Layout.Nav>
                        <DropdownTheme className="lg:block hidden" />
                        <DropdownLanguage className="lg:block hidden" lng={lng} />
                        <div className="lg:ml-4 ml-0">
                            <button
                                data-theme="light"
                                className="btn lg:btn-md btn-sm btn-primary btn-outline uppercase h-10 min-h-10 lg:text-base xs:text-xs text-[11px] sm:px-4 px-3 !text-base-100 border-primary duration-500"
                            >
                                {t('header.download_cv')}
                            </button>
                        </div>
                        <div className="lg:hidden md:ml-4 ml-0">
                            <span className="btn btn-sm btn-ghost">
                                <BarsThree className="text-primary" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Layout.Header>
    )
}
