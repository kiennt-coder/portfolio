import { cn } from "@helpers/common"
import { ButtonProps } from "@/types/props"

export const Button = ({ children, className }: ButtonProps) => {
    return (
        <button className={cn("btn", className)}>{children}</button>
    )
}