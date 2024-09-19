import { dir } from "i18next";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { useTranslation } from "@lib/i18n";
import { fallbackLng, languages } from "@lib/i18n/settings";

// Importing the required CSS files
import "@styles/globals.css";
import AppProvider from "@providers/AppProvider";

const geistSans = localFont({
    src: "../../assets/fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "../../assets/fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export async function generateStaticParams() {
    return languages.map((lng) => ({ lng }))
}

export async function generateMetadata({ params: { lng } }: {
    params: {
        lng: string;
    };
}) {
    if (languages.indexOf(lng) < 0) lng = fallbackLng
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { t } = await useTranslation(lng)
    return {
        title: t('title'),
        description: t('description'),
        icons: "/images/favicon.ico",
    } as Metadata
}

export default function RootLayout({
    children,
    params: {
        lng
    }
}: Readonly<{
    children: React.ReactNode;
    params: {
        lng: string;
    };
}>) {
    return (
        <html suppressHydrationWarning lang={lng} dir={dir(lng)}>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <AppProvider>
                    {children}
                </AppProvider>
            </body>
        </html>
    );
}
