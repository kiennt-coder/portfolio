import { cn } from "@helpers/common";
import { IconProps } from "@/types/props";

export default function Check({ className }: Partial<IconProps>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className={cn("size-6", className)}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
    )
}
