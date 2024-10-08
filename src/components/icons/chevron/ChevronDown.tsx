import { cn } from "@/helpers/common";
import { IconProps } from "@/types/props";

export default function ChevronDown({ className }: Partial<IconProps>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={cn("size-6", className)}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>

    )
}
