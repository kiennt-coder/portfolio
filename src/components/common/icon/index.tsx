import { cloneElement } from "react";
import { IconProps } from "@/types/props";

export const Icon = ({ size, color, children, ...props }: IconProps) => {
    size = size ?? 24;
    color = color ?? "currentColor";

    return (
        <>
            {cloneElement(children, {
                ...props,
                width: size,
                height: size,
                fill: color,
            })}
        </>
    )
}
