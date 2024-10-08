import { cn } from "@helpers/common";
import { MarqueeItemProps, MarqueeProps } from "@/types/props";

const MarqueeItem = ({ label, repeat, outline, startFrom }: MarqueeItemProps) => {
    repeat = repeat ?? 2;

    const getStartFrom = (): string => {
        switch (startFrom) {
            case "right":
                return "marquee-l-animation";
            case "left":
                return "marquee-r-animation";
            default:
                return "marquee-l-animation";
        }
    }

    const renderLabel = () => {
        return Array(repeat).fill(null).map((_, index) => <span key={label + index} className={cn("text-8xl text-base-content dark:text-gray-600 font-semibold pr-4 uppercase", outline && "text-stroke-base")}>{label}</span>)
    }

    return (
        <div className={cn("marquee-animation pb-2", getStartFrom())}>
            {renderLabel()}
        </div>
    )
}

const Marquee = ({ children, ...props }: MarqueeProps) => {
    return (
        <div {...props}>
            {children}
        </div>
    )
}

Marquee.Item = MarqueeItem;
export {
    Marquee
}