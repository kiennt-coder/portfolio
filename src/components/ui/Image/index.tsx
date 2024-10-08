import NextImage from "next/image"
import { BaseImageProps } from "@/types/base"
import NoImageAvailableImg from "/public/images/no-image.jpg"

export const Image = ({ src, ...props }: BaseImageProps) => {
    src = src ?? NoImageAvailableImg

    return <NextImage src={src} {...props} />
}