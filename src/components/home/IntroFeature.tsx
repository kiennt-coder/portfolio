import { cn } from "@helpers/common";
import { Layout } from "@components/ui";
import type { IntroFeature } from "@/types/models";
import IntroFeatureCard from "@components/home/IntroFeatureCard";

const introFeatures: Array<IntroFeature> = [
    {
        icon: {
            light: "/icons/intro-feature-icon1.png",
            dark: "/icons/intro-feature-icon1-dark.png",
        },
        alt: "Intro feature icon 1",
        title: "Dedication",
        description: "Seaque ipsa quae ab illo inven tore veritatis et qua si architecto beatae atis et sopno vitae.",
    },
    {
        icon: {
            light: "/icons/intro-feature-icon2.png",
            dark: "/icons/intro-feature-icon2-dark.png",
        },
        alt: "Intro feature icon 2",
        title: "Innovation",
        description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    },
    {
        icon: {
            light: "/icons/intro-feature-icon3.png",
            dark: "/icons/intro-feature-icon3-dark.png",
        },
        alt: "Intro feature icon 3",
        title: "Creativity",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praes nostrum et accus.",
    },
    {
        icon: {
            light: "/icons/intro-feature-icon4.png",
            dark: "/icons/intro-feature-icon4-dark.png",
        },
        alt: "Intro feature icon 4",
        title: "Excellence",
        description: "Expedita distinctio vitae recusandae voluptas assumenda eaque cumque nesciunt.",
    }
]

const isOddNumber = (value: number): boolean => {
    return value % 2 !== 0;
}

export default function IntroFeature() {
    const renderIntroFeatureCard = () => {
        return introFeatures.map((feature, index) => (
            <div key={index.toString()} className="lg:basis-1/4 md:basis-2/4 basis-11/12 px-3">
                <IntroFeatureCard className={cn("md:mb-0 mb-8", isOddNumber(index) && "lg:mt-16 md:mt-8")} data={feature} />
            </div>
        ))
    }

    return (
        <Layout.Section className="bg-slate-200 dark:bg-base-200 relative z-0 overflow-hidden">
            <div className="container mx-auto">
                <div className="xl:pt-44 xl:pb-40 md:py-32 pt-16 pb-10 flex flex-wrap flex-row items-stretch justify-center">
                    {renderIntroFeatureCard()}
                </div>
            </div>
            <div className="absolute -z-[1] -right-8 xl:-bottom-52 md:-bottom-36">
                <p className="text-gray-100 dark:text-gray-600/20 xl:text-[300px] md:text-[230px] md:inline-block hidden font-semibold">Kiennt</p>
            </div>
        </Layout.Section>
    )
}
