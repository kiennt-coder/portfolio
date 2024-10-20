import Image from "next/image";
import ContentBox from "@components/home/ContentBox";
import FunFactStat from "@components/home/FunFactStat";

export default function FunFact() {
    return (
        <div className="lg:pt-36 md:pt-32 pt-16 lg:pb-28 md:pb-28 pb-10 bg-base-200 relative z-0 overflow-hidden" data-aos="fade-up" data-aos-duration="1800" data-theme="dark">
            <div className="container mx-auto">
                <div className="flex flex-row flex-wrap items-start justify-between">
                    <div className="lg:basis-5/12 basis-full p-3 mb-4">
                        <ContentBox subTitle="Fun facts" title="I Develop System that Works">
                            <p>Sed ut perspiciatis unde omnis iste natus kobita tumi sopno charini hoye khbor nio na sit volup sundori toma amar tumi nili mar tatem accusantium dolore.</p>
                        </ContentBox>
                    </div>
                    <div className="lg:basis-6/12 basis-full p-3 ml-auto">
                        <div className="grid md:grid-cols-2 grid-cols-1 md:grid-rows-2 gap-x-6 gap-y-7">
                            <FunFactStat value={12} description="Years of Experience" />
                            <FunFactStat value={2} suffix="k" description="Total Clients" />
                            <FunFactStat value={4} suffix="k" description="Projects Completed" />
                            <FunFactStat value={30} description="Digital Products" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute -z-[1] lef-0 md:bottom-[86%] bottom-[96%]">
                <Image src="/images/shape/fact-icon1.png" alt="Fact icon 1" width={310} height={410} />
            </div>
            <div className="absolute -z-[1] -right-1 md:-bottom-24 -bottom-10">
                <Image src="/images/shape/fact-icon2.png" alt="Fact icon 2" width={357} height={410} />
            </div>
        </div>
    )
}
