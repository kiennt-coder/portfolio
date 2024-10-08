import Link from "next/link";
import { cn } from "@helpers/common";
import { languages } from "@/lib/i18n/settings";
import { DropdownLanguageProps } from "@/types/props";
import { ChevronDown, LanguageOutlined } from "@components/icons";

export default function DropdownLanguage({ className }: Omit<DropdownLanguageProps, "i18n">) {
    const renderDropdownItems = () => {
        return languages.map((lng) => (
            <li key={lng}>
                <Link href={`/${lng}`} className="hover:bg-base-100 focus:bg-base-100 active:!text-base-content active:!bg-base-100 font-semibold">
                    {lng.toUpperCase()}
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
                {/* <li><button className="hover:bg-base-100 focus:bg-base-100 active:!text-base-content active:!bg-base-100 font-semibold" onClick={() => handleChangeLanguage("")}>Light</button></li>
                <li><button className="hover:bg-base-100 focus:bg-base-100 active:!text-base-content active:!bg-base-100 font-semibold" onClick={() => handleChangeLanguage("")}>Dark</button></li> */}
            </ul>
        </div>
    )
}
