import { cn } from "@helpers/common";
import { IconProps } from "@/types/props";

export default function Mark({ className }: Partial<IconProps>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className={cn("size-6", className)}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>

    )
}
