import Image from "next/image";
import { cn } from "@helpers/common";
import { TiltWrapper } from "@components/common";
import { IntroFreatureCardProps } from "@/types/props";

const IntroFeatureCard = ({ className, data }: IntroFreatureCardProps) => {
    return (
        <TiltWrapper className={className}>
            <div className={cn("group card h-full xl:px-12 xl:pt-14 xl:pb-9 lg:py-10 lg:px-7 md:px-12 md:pt-14 md:pb-9 py-10 px-7 bg-white dark:bg-neutral-800/80 text-base-content shadow")}>
                <figure className="!justify-start xl:mb-8 lg:mb-5 md:mb-8 mb-5">
                    <Image
                        src={data.icon.light}
                        width={74}
                        height={74}
                        alt="Intro feature icon 1" className="xl:size-16 lg:size-10 md:size-16 size-10 object-contain dark:hidden" />
                    <Image
                        src={data.icon.dark}
                        width={74}
                        height={74}
                        alt="Intro feature icon 1" className="xl:size-16 lg:size-10 md:size-16 size-10 object-contain hidden dark:block" />
                </figure>
                <div className="card-body p-0 gap-0">
                    <h4 className="card-title dark:text-neutral-50 text-2xl font-semibold xl:mb-6 lg:mb-4 md:mb-6 mb-4">
                        {data.title}
                    </h4>
                    <p className="text-lg line-clamp-4 group-hover:line-clamp-none transition-[overflow] duration-1000">
                        {data.description}
                    </p>
                </div>
            </div>
        </TiltWrapper>
    )
}


export default IntroFeatureCard;
