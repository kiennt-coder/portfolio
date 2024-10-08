import { cn } from "@/helpers/common";
import { IconProps } from "@/types/props";

export default function ChevronLeft({ className, strokeWidth }: Partial<IconProps>) {
    strokeWidth = strokeWidth ?? 1.5

    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={cn("size-6", className)}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
    )
}
