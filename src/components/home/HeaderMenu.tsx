import Link from "next/link"
import { cn } from "@helpers/common"


const itemClass = cn("text-base-100 bg-transparent xl:text-lg text-base font-semibold xl:p-4 p-3 hover:text-primary focus:text-primary active:!text-primary hover:bg-transparent focus:bg-transparent active:!bg-transparent")

export default function HeaderMenu() {
    return (
        <ul className="menu menu-horizontal bg-transparent p-0" data-theme="light">
            <li><Link href="#" className={itemClass}>Home</Link></li>
            <li><Link href="#" className={itemClass}>About</Link></li>
            <li><Link href="#" className={itemClass}>Works</Link></li>
            <li><Link href="#" className={itemClass}>Service</Link></li>
            <li><Link href="#" className={itemClass}>Contact</Link></li>
            <li><Link href="#" className={itemClass}>Blog</Link></li>
        </ul>
    )
}
