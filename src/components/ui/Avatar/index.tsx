import { cn } from "@helpers/common"
import { SHAPE } from "@enums/common"
import { Image } from "@components/ui";
import { AvatarProps } from "@/types/props"

const getShapeClass = (shape: SHAPE): string => {
    switch (shape) {
        case SHAPE.ROUND:
            return "rounded-xl";
        case SHAPE.SQUARE:
            return "rounded";
        case SHAPE.CIRCLE:
            return "rounded-full";
        case SHAPE.MASK_SQUIRCLE:
            return "mask mask-squircle";
        case SHAPE.MASK_HEXAGON:
            return "mask mask-hexagon";
        case SHAPE.MASK_TRIANGLE:
            return "mask mask-triangle";
        default:
            return "rounded"
    }
};

export const Avatar = ({ url, size, ring, shape }: AvatarProps) => {
    size = size ?? 24
    shape = shape ?? SHAPE.SQUARE

    return (
        <div className="avatar">
            <div className={cn(`w-${size}`, ring && "ring ring-primary ring-offset-2 ring-offset-base-100", getShapeClass(shape))}>
                <Image src={url} alt="Header Logo" priority placeholder="blur" />
            </div>
        </div>
    )
}