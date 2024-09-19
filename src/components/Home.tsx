"use client";

import { ThemeSwap } from "@components/index";
import { useTranslation } from "@/lib/i18n/client";
import { MouseEventHandler } from "react";

export default function Home({ lng }: { lng: string; }) {
    const { t, i18n } = useTranslation(lng, 'home')

    const handleToogleLang: MouseEventHandler<HTMLButtonElement> = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'vi' : 'en')
    }

    return (
        <div>
            <p className="text-primary dark:text-white">{t('hello')}</p>
            <button onClick={handleToogleLang} className="btn btn-primary dark:text-white">Toggle Theme</button>
            <ThemeSwap />
        </div>
    )
}
