import { cn } from "@/helpers/common";
import { IconProps } from "@/types/props";

export default function ChevronRight({ className, strokeWidth }: Partial<IconProps>) {
    strokeWidth = strokeWidth ?? 1.5

    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={cn("size-6", className)}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
    )
}
