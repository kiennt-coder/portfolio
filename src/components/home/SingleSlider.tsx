

import Link from "next/link";
import { i18n } from "i18next"
import Image from "next/image"
import { cn } from "@helpers/common"
import { Layout } from "@components/ui";
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, TwitterOutlined } from "@components/icons";
import { Trans } from "react-i18next/TransWithoutContext";

export default function SingleSlider({ i18n, lng }: { i18n: i18n, lng: string }) {
    const t = i18n.getFixedT(lng, "home");

    return (
        <Layout.Section id="home" className="relative z-[0] bg-[url('/images/slider/slider-bg.jpg')] 2xl:h-[1080px] xl:h-screen lg:h-[700px] md:h-[1080px] h-[800px]">
            <div className="container mx-auto h-full flex flex-row items-end">
                <div className="flex-1 flex flex-row flex-wrap items-center justify-center h-full">
                    <div className="2xl:basis-5/12 xl:basis-5/12 lg:basis-6/12 md:basis-full sm:basis-11/12 basis-full px-3">
                        <article className="bg-transparent lg:text-start text-center md:mt-16 mt-24 mb-11" data-theme="dark">
                            <h1 className="2xl:text-[120px] xl:text-[110px] md:text-[100px] sm:text-[90px] text-[60px] text-white font-bold mb-4">
                                <Trans i18nKey="slider.title" t={t} components={{
                                    1: <span className="block uppercase md:text-2xl text-lg text-primary font-semibold" />,
                                }}>
                                    <span className="block uppercase md:text-2xl text-lg text-primary font-semibold">Hello I&apos;m</span> Kiennt
                                </Trans>
                            </h1>
                            <h2 className="md:text-2xl text-lg text-white font-semibold mb-10">
                                <Trans i18nKey="slider.description" t={t} components={{
                                    1: <span className="xl:text-[36px] lg:text-[32px] md:text-[32px] text-xl text-primary font-bold" />,
                                }}>
                                    A Passionate <span className="xl:text-[36px] lg:text-[32px] md:text-[32px] text-xl text-primary font-bold">Software Developer</span>
                                </Trans>
                            </h2>
                            <button className="uppercase btn md:btn-md btn-sm btn-primary md:text-base text-sm text-white md:h-14 h-10 md:px-10 px-7">{t('slider.say_hello')}</button>
                        </article>
                    </div>
                    <div className="2xl:basis-7/12 xl:basis-7/12 lg:basis-6/12 md:basis-7/12 sm:basis-10/12 basis-full self-end px-3 2xl:max-w-full xl:max-w-[87%] w-full flex items-end justify-center">
                        <div className={cn("relative z-0 slider_image xl:max-w-full lg:max-w-[85%] md:max-w-full max-w-[300px] xl:pl-32 pl-0 before:heartbeat-middle-animation")}>
                            <Image className="lg:pl-0 pl-2" src="/images/slider/person.png" alt="Hero person" width={749} height={983} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:block absolute top-1/2 right-0 2xl:right-[14%] -translate-y-1/2 bg-transparent" data-theme="dark">
                <ul className="pr-16">
                    <li>
                        <Link href="#" className="group flex items-center justify-center my-2 size-14 text-neutral-50 border border-gray-50/20 rounded duration-300 hover:bg-primary hover:border-primary">
                            <FacebookOutlined className="duration-500 ease-out group-hover:rotate-y-360" />
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="group flex items-center justify-center my-2 size-14 text-neutral-50 border border-gray-50/20 rounded duration-300 hover:bg-primary hover:border-primary">
                            <TwitterOutlined className="duration-500 ease-out group-hover:rotate-y-360" />
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="group flex items-center justify-center my-2 size-14 text-neutral-50 border border-gray-50/20 rounded duration-300 hover:bg-primary hover:border-primary">
                            <LinkedinOutlined className="duration-500 ease-out group-hover:rotate-y-360" />
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="group flex items-center justify-center my-2 size-14 text-neutral-50 border border-gray-50/20 rounded duration-300 hover:bg-primary hover:border-primary">
                            <InstagramOutlined className="duration-500 ease-out group-hover:rotate-y-360" />
                        </Link>
                    </li>
                </ul>
            </div>
        </Layout.Section>
    )
}
