import Image from "next/image";
import { Layout } from "@components/ui";
import { DownloadTray } from "@components/icons";
import ContentBox from "@components/home/ContentBox";
import { AosWrapper, TiltWrapper } from "@components/common";


export default function About() {
    return (
        <Layout.Section id="about">
            <div className="mt-44 mb-28 relative z-0">
                <div className="container mx-auto">
                    <div className="flex flex-wrap flex-row items-start justify-center text-lg">
                        <div className="basis-1/2 px-3">
                            <AosWrapper>
                                <div data-aos="fade-right" data-aos-duration="2000" data-aos-delay="100" className="aos-init pl-14 inline-block relative z-0 before:content-[''] before:absolute before:-bottom-8 before:right-14 before:z-[1] before:w-11 before:h-16 before:bg-primary after:content-[''] after:absolute after:top-36 after:-right-[9%] after:size-16 after:rotate-45 after:bg-[url('/images/slider/body-bg.jpg')] dark:after:bg-base-100 dark:after:bg-none">
                                    <TiltWrapper>
                                        <Image src="/images/about/about-img.jpg" alt="About image" width={488} height={600} className="rounded-xl overflow-hidden" />
                                    </TiltWrapper>
                                    <div data-aos="fade-right" data-aos-duration="2000" data-aos-delay="800" className="absolute -z-[1] -top-6 -right-6 size-36 border-4 border-primary"></div>
                                    <div data-aos="fade-right" data-aos-duration="2000" data-aos-delay="800" className="absolute top-16 -left-3 size-24 bg-primary"></div>
                                    <div className="absolute -left-16 -bottom-32">
                                        <Image src="/images/about/download-bg.png" alt="Download CV image" width={268} height={268} className="rotate-animation" />
                                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary hover:cursor-pointer">
                                            <DownloadTray className="size-8" />
                                        </span>
                                    </div>
                                </div>
                            </AosWrapper>
                        </div>

                        <div className="basis-1/2 px-3">
                            <ContentBox
                                title="I Develop System that Works"
                                subTitle="About me"
                            >
                                <p className="mb-6">Sed ut perspiciatis unde omnis iste natus Sed ut perspiciatis unde omnis iste natus tumi sopno charini hoye khbor nio na sit voluptatem accusantium dolore.</p>
                                <p>Oremque laudantium, totaeaque ipsa quae</p>
                            </ContentBox>
                            <div className="mt-6 pt-6 pb-5 border-y border-y-gray-400">
                                <div className="flex flex-row items-start justify-center">
                                    <div className="basis-1/2 px-3">
                                        <ul>
                                            <li className="inline-block pr-12 font-semibold">
                                                <p className="mb-2">Name</p>
                                                <p className="mb-2">Age</p>
                                                <p className="mb-2">Occupation</p>
                                            </li>
                                            <li className="inline-block">
                                                <p className="mb-2">Kiennt</p>
                                                <p className="mb-2">23 Years</p>
                                                <p className="mb-2">Software Developer</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="basis-1/2 px-3">
                                        <ul>
                                            <li className="inline-block pr-12 font-semibold">
                                                <p className="mb-2">Phone</p>
                                                <p className="mb-2">Email</p>
                                                <p className="mb-2">Nationality</p>
                                            </li>
                                            <li className="inline-block">
                                                <p className="mb-2">+84 123 456 7890</p>
                                                <p className="mb-2">kiennt.coder@gmail.com</p>
                                                <p className="mb-2">Vietnam</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-start mt-2">
                                <div className="pr-11">
                                    <Image src="/images/about/signature.png" alt="Signature image" width={178} height={99} />
                                </div>
                                <div className="mt-5">
                                    <h6 className="inline-block pr-2 text-xl font-semibold uppercase dark:text-neutral-50">Kient</h6>
                                    <span className="text-base">Software Architect, Google Inc.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute -z-[1] right-2/3 bottom-28 matrix-l">
                    <span className="text-[310px] text-slate-200 dark:text-base-200 font-semibold">Coder</span>
                </div>
            </div>
        </Layout.Section>
    )
}
