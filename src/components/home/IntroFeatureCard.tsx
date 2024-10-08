import Image from "next/image";
import { cn } from "@helpers/common";
import { TiltWrapper } from "@components/common";
import { IntroFreatureCardProps } from "@/types/props";

const IntroFeatureCard = ({ className, data }: IntroFreatureCardProps) => {
    return (
        <div className={cn("px-3", className)}>
            <TiltWrapper>
                <div className={cn("group card px-12 pt-14 pb-9 bg-white dark:bg-neutral-800/80 text-base-content shadow")}>
                    <figure className="!justify-start mb-8">
                        <Image
                            src={data.icon.light}
                            width={74}
                            height={74}
                            alt="Intro feature icon 1" className="h-[74px] object-contain dark:hidden" />
                        <Image
                            src={data.icon.dark}
                            width={74}
                            height={74}
                            alt="Intro feature icon 1" className="h-[74px] object-contain hidden dark:block" />
                    </figure>
                    <div className="card-body p-0">
                        <h4 className="card-title dark:text-neutral-50 text-2xl font-semibold mb-6">
                            {data.title}
                        </h4>
                        <p className="text-lg line-clamp-4 group-hover:line-clamp-none transition-all">
                            {data.description}
                        </p>
                    </div>
                </div>
            </TiltWrapper>
        </div>
    )
}


export default IntroFeatureCard;
