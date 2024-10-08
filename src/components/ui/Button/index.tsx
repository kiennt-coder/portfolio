import { cn } from "@helpers/common"
import { ButtonProps } from "@/types/props"

export const Button = ({ children, className, type, outline, shape }: ButtonProps) => {
    return (
        <button className={cn('btn', type && `btn-${type}`, outline && 'btn-outline', shape && `btn-${shape}`, className)}>{children}</button>
    )
}