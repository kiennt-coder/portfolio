import Image from "next/image";
import { Layout } from "@components/ui";
import ContentBox from "@components/home/ContentBox";

export default function Service() {
    return (
        <Layout.Section id="Service" className="pt-40 pb-36 bg-base-200" data-theme="dark">
            <div className="container mx-auto">
                <div className="px-3">
                    <ContentBox title="What I Offer" subTitle="Service" className="text-center" />
                    <div className="grid grid-cols-2 grid-rows-2 gap-6">
                        <div className="group card bg-neutral-50" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" data-aos-delay="500">
                            <div className="card-body p-0">
                                <div className="flex flex-row items-start gap-6 px-12 py-16">
                                    <div className="basis-3/12 text-center">
                                        <div className="inline-block relative z-0">
                                            <Image src="/icons/service-icon1.png" alt="Service icon 1" width={72} height={72} />
                                            <div className="absolute -z-[1] size-9 -top-3 -left-4 rounded-full bg-slate-200/50 duration-500 group-hover:top-9 group-hover:left-12"></div>
                                            <div className="absolute -z-[1] size-14 -right-3 -bottom-3 rounded-full bg-slate-200/50 duration-500 group-hover:right-8 group-hover:bottom-7"></div>
                                        </div>
                                    </div>
                                    <div className="basis-9/12">
                                        <div className="ml-2">
                                            <h3 className="text-3xl text-base-100 font-semibold mb-4">Web Development</h3>
                                            <p className="text-lg text-base-100">Ludantium totam rem aperia meaququae ab tatis et quasi architecto beatae vit dunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="group card bg-neutral-50" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1200" data-aos-delay="500">
                            <div className="card-body p-0">
                                <div className="flex flex-row items-start gap-6 px-12 py-16">
                                    <div className="basis-3/12 text-center">
                                        <div className="inline-block relative z-0">
                                            <Image src="/icons/service-icon2.png" alt="Service icon 2" width={72} height={72} />
                                            <div className="absolute -z-[1] size-9 -top-3 -left-4 rounded-full bg-slate-200/50 duration-500 group-hover:top-9 group-hover:left-12"></div>
                                            <div className="absolute -z-[1] size-14 -right-3 -bottom-3 rounded-full bg-slate-200/50 duration-500 group-hover:right-8 group-hover:bottom-7"></div>
                                        </div>
                                    </div>
                                    <div className="basis-9/12">
                                        <div className="ml-2">
                                            <h3 className="text-3xl text-base-100 font-semibold mb-4">Software Development</h3>
                                            <p className="text-lg text-base-100">Ludantium totam rem aperia meaququae ab tatis et quasi architecto beatae vit dunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="group card bg-neutral-50" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
                            <div className="card-body p-0">
                                <div className="flex flex-row items-start gap-6 px-12 py-16">
                                    <div className="basis-3/12 text-center">
                                        <div className="inline-block relative z-0">
                                            <Image src="/icons/service-icon3.png" alt="Service icon 3" width={72} height={72} />
                                            <div className="absolute -z-[1] size-9 -top-3 -left-4 rounded-full bg-slate-200/50 duration-500 group-hover:top-9 group-hover:left-12"></div>
                                            <div className="absolute -z-[1] size-14 -right-3 -bottom-3 rounded-full bg-slate-200/50 duration-500 group-hover:right-8 group-hover:bottom-7"></div>
                                        </div>
                                    </div>
                                    <div className="basis-9/12">
                                        <div className="ml-2">
                                            <h3 className="text-3xl text-base-100 font-semibold mb-4">System Development</h3>
                                            <p className="text-lg text-base-100">Ludantium totam rem aperia meaququae ab tatis et quasi architecto beatae vit dunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="group card bg-neutral-50" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1200">
                            <div className="card-body p-0">
                                <div className="flex flex-row items-start gap-6 px-12 py-16">
                                    <div className="basis-3/12 text-center">
                                        <div className="inline-block relative z-0">
                                            <Image src="/icons/service-icon4.png" alt="Service icon 4" width={72} height={72} />
                                            <div className="absolute -z-[1] size-9 -top-3 -left-4 rounded-full bg-slate-200/50 duration-500 group-hover:top-9 group-hover:left-12"></div>
                                            <div className="absolute -z-[1] size-14 -right-3 -bottom-3 rounded-full bg-slate-200/50 duration-500 group-hover:right-8 group-hover:bottom-7"></div>
                                        </div>
                                    </div>
                                    <div className="basis-9/12">
                                        <div className="ml-2">
                                            <h3 className="text-3xl text-base-100 font-semibold mb-4">Scurity Development</h3>
                                            <p className="text-lg text-base-100">Ludantium totam rem aperia meaququae ab tatis et quasi architecto beatae vit dunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout.Section>
    )
}
