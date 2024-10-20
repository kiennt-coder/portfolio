import Link from "next/link";
import { cn } from "@helpers/common";
import { languages } from "@/lib/i18n/settings";
import { DropdownLanguageProps } from "@/types/props";
import { ChevronDown, LanguageOutlined } from "@components/icons";

export default function DropdownLanguage({ className, lng }: Omit<DropdownLanguageProps, "i18n">) {
    const renderDropdownItems = () => {
        return languages.map((lang) => (
            <li key={lang}>
                <Link href={`/${lang}`} className={cn("hover:bg-base-300 focus:bg-base-300 active:!text-base-100 active:!bg-base-content font-semibold", lng === lang && "!text-base-100 !bg-base-content")}>
                    {lang.toUpperCase()}
                </Link>
            </li>
        ));
    }

    return (
        <div className={cn("dropdown dropdown-end", className)}>
            <div tabIndex={0} role="button" className="btn xl:px-4 px-3 text-lg text-white font-semibold bg-transparent border-none rounded-none shadow-none hover:text-primary hover:bg-transparent">
                <LanguageOutlined className="xl:size-5 size-4" />
                <ChevronDown className="size-4" />
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-200 rounded-box z-[1] w-52 p-2 shadow gap-2">
                {renderDropdownItems()}
            </ul>
        </div>
    )
}
