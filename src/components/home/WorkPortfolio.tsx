import Image from "next/image";
import { Layout } from "@components/ui";
import ContentBox from "@components/home/ContentBox";

const PortfolioItem = () => {
    return (
        <div className="group flex flex-row flex-wrap items-center justify-between md:pt-12 md:pb-9 pt-10 pb-8">
            <div className="lg:basis-2/12 md:basis-7/12 basis-full lg:p-3 px-3 py-1">
                <span className="text-base uppercase font-semibold text-gray-400">Web Design</span>
            </div>
            <div className="lg:basis-5/12 md:basis-6/12 basis-full md:p-3 px-3 py-1">
                <h3 className="xl:text-5xl text-3xl font-semibold leading-tight">Software Design for eThemeStudio</h3>
            </div>
            <div className="lg:basis-5/12 md:basis-6/12 basis-full md:p-3 px-3 py-1 flex flex-row items-center justify-end relative z-0">
                <Image className="md:absolute z-[1] lg:-mt-3 md:-mt-9 mt-4 mr-auto left-0 static md:w-[62%] w-[65%] rounded-lg align-middle md:opacity-0 opacity-100 md:invisible visible transition-all duration-500 group-hover:opacity-100 group-hover:visible group-hover:-rotate-12" src="/images/portfolio/port-img1.jpg" alt="Portfolio Image 1" width={304} height={196} />
                <span className="btn btn-primary btn-circle btn-outline lg:size-24 size-16 border-gray-400 dark:border-gray-600 hover:!text-neutral-50 duration-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </span>
            </div>
        </div>
    )
}


export default function WorkPortfolio() {
    return (
        <Layout.Section>
            <div className="container mx-auto px-3">
                <ContentBox title="My Recent Works" subTitle="Portfolio" className="text-center" />
                <div className="flex flex-col items-stretch justify-start border-t border-t-gray-300 border-b border-b-gray-300 divide-y divide-gray-300 dark:border-t-gray-600 dark:border-b-gray-600 dark:divide-gray-600">
                    <PortfolioItem />
                    <PortfolioItem />
                    <PortfolioItem />
                    <PortfolioItem />
                </div>
            </div>
        </Layout.Section>
    )
}
