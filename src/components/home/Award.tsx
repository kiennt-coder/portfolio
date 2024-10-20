import Link from "next/link";
import Image from "next/image";
import { Layout } from "@components/ui";
import { AwardItemProps } from "@/types/props";
import { Award as AwardType } from "@/types/models";
import ContentBox from "@components/home/ContentBox";

const awards: Array<AwardType> = [
    {
        icon: {
            light: "/images/award/award-logo1.png",
            dark: "/images/award/award-logo1-dark.png",
        },
        alt: "Award logo 1",
        name: "Best Developer",
        year: 2022,
        award: "Developer Association",
        location: "New York, Usa",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore."
    },
    {
        icon: {
            light: "/images/award/award-logo2.png",
            dark: "/images/award/award-logo2-dark.png",
        },
        alt: "Award logo 2",
        name: "Developer of the Year",
        year: 2021,
        award: "Dev Internatioal",
        location: "London, England",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore."
    },
    {
        icon: {
            light: "/images/award/award-logo3.png",
            dark: "/images/award/award-logo3-dark.png",
        },
        alt: "Award logo 3",
        name: "Fastest Coder",
        year: 2019,
        award: "Amazing Programmer",
        location: "Dhaka, Bangladesh",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore."
    }
]

const AwardItem = ({ data }: AwardItemProps) => {
    return (
        <div className="flex flex-row flex-wrap items-start pt-10 pb-9">
            <div className="md:basis-2/12 basis-full md:tex-start text-center md:mt-2 md:mb-5 mt-5 mb-7 px-3">
                <Link href="#">
                    <Image className="inline dark:hidden" src={data.icon.light} alt={data.alt} width={156} height={36} />
                    <Image className="hidden dark:inline" src={data.icon.dark} alt={data.alt} width={156} height={36} />
                </Link>
            </div>
            <div className="md:basis-3/12 basis-full md:text-start text-center px-3">
                <h3 className="lg:text-2xl md:text-xl text-2xl font-semibold mb-2 dark:text-neutral-50">{data.name}</h3>
                <p className="text-lg text-gray-400 md:mb-0 mb-4">{data.year}</p>
            </div>
            <div className="md:basis-3/12 basis-full md:text-start text-center px-3">
                <h3 className="lg:text-2xl md:text-xl text-2xl font-semibold mb-2 dark:text-neutral-50">{data.award}</h3>
                <p className="text-lg text-gray-400 md:mb-0 mb-4">{data.location}</p>
            </div>
            <div className="md:basis-4/12 basis-full px-3 self-start text-lg md:text-start text-center ">
                <p>{data.description}</p>
            </div>
        </div>
    )
}

export default function Award() {

    const renderAwards = () => {
        return awards.map((award, index) => (
            <AwardItem key={index.toString()} data={award} />
        ))
    }

    return (
        <Layout.Section className="xl:pt-40 xl:pb-44 lg:pt-32 lg:pb-36 md:pt-[120px] md:pb-[125px] pt-16 pb-20">
            <div className="container px-3 mx-auto">
                <ContentBox title="Awards & Achivements" subTitle="Succcess Stories" className="text-center" />
                <div className="flex flex-col items-stretch justify-start divide-y border-t border-b">
                    {renderAwards()}
                </div>
            </div>
        </Layout.Section>
    )
}
