import Image from "next/image";
import ContentBox from "@components/home/ContentBox";


export default function FunFact() {
    return (
        <div className="pt-36 pb-28 bg-base-200 relative z-0 overflow-hidden" data-aos="fade-up" data-aos-duration="1800" data-theme="dark">
            <div className="container mx-auto">
                <div className="flex flex-row items-start justify-between">
                    <div className="basis-5/12 p-3">
                        <ContentBox subTitle="Fun facts" title="I Develop System that Works">
                            <p>Sed ut perspiciatis unde omnis iste natus kobita tumi sopno charini hoye khbor nio na sit volup sundori toma amar tumi nili mar tatem accusantium dolore.</p>
                        </ContentBox>
                    </div>
                    <div className="basis-6/12 p-3 ml-auto">
                        <div className="grid grid-cols-2 grid-rows-2 gap-x-6 gap-y-7">
                            <div className="px-7 py-12 flex flex-row items-center justify-start gap-6 border border-gray-600 rounded-lg">
                                <div className="flex flex-row items-center justify-start text-7xl text-primary font-semibold">
                                    <span>12</span>
                                </div>
                                <h3 className="text-xl text-neutral-50 font-semibold leading-8">Years of Experience</h3>
                            </div>
                            <div className="px-7 py-12 flex flex-row items-center justify-start gap-6 border border-gray-600 rounded-lg">
                                <div className="flex flex-row items-center justify-start text-7xl text-primary font-semibold">
                                    <span>2</span>
                                    <span className="uppercase">k</span>
                                </div>
                                <h3 className="text-xl text-neutral-50 font-semibold leading-8">Total Clients</h3>
                            </div>
                            <div className="px-7 py-12 flex flex-row items-center justify-start gap-6 border border-gray-600 rounded-lg">
                                <div className="flex flex-row items-center justify-start text-7xl text-primary font-semibold">
                                    <span>4</span>
                                    <span className="uppercase">k</span>
                                </div>
                                <h3 className="text-xl text-neutral-50 font-semibold leading-8">Projects Completed</h3>
                            </div>
                            <div className="px-7 py-12 flex flex-row items-center justify-start gap-6 border border-gray-600 rounded-lg">
                                <div className="flex flex-row items-center justify-start text-7xl text-primary font-semibold">
                                    <span>30</span>
                                </div>
                                <h3 className="text-xl text-neutral-50 font-semibold leading-8">Digital Products</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute -z-[1] lef-0 bottom-[86%]">
                <Image src="/images/shape/fact-icon1.png" alt="Fact icon 1" width={310} height={410} />
            </div>
            <div className="absolute -z-[1] -right-1 -bottom-24">
                <Image src="/images/shape/fact-icon2.png" alt="Fact icon 2" width={357} height={410} />
            </div>
        </div>
    )
}
