

import { i18n } from "i18next"
import Image from "next/image"
import { cn } from "@helpers/common"
import { Layout } from "@components/ui";
import { Trans } from "react-i18next/TransWithoutContext";

export default function SingleSlider({ i18n, lng }: { i18n: i18n, lng: string }) {
    const t = i18n.getFixedT(lng, "home");

    return (
        <Layout.Section className="bg-[url('/images/slider/slider-bg.jpg')] xl:h-[1080px] lg:h-[700px] md:h-screen h-[800px]">
            <div className="container mx-auto h-full flex flex-row items-end">
                <div className="flex-1 flex flex-row flex-wrap items-center justify-center">
                    <div className="xl:basis-6/12 lg:basis-6/12 md:basis-full sm:basis-11/12 basis-full px-3">
                        <article className="bg-transparent lg:text-start text-center" data-theme="dark">
                            <h1 className="2xl:text-[120px] xl:text-[110px] md:text-[100px] sm:text-[90px] text-[60px] text-white font-bold mb-4">
                                <Trans i18nKey="slider.title" t={t} components={{
                                    1: <span className="block uppercase text-2xl text-primary font-semibold" />,
                                }}>
                                    <span className="block uppercase text-2xl text-primary font-semibold">Hello I&apos;m</span> Kiennt
                                </Trans>
                            </h1>
                            <h2 className="text-2xl text-white font-semibold mb-10">
                                <Trans i18nKey="slider.description" t={t} components={{
                                    1: <span className="text-[36px] text-primary font-bold" />,
                                }}>
                                    A Passionate <span className="text-[36px] text-primary font-bold">Software Developer</span>
                                </Trans>
                            </h2>
                            <button className="uppercase btn btn-primary text-base text-white h-[53px] px-10">{t('slider.say_hello')}</button>
                        </article>
                    </div>
                    <div className="xl:basis-6/12 lg:basis-6/12 md:basis-7/12 sm:basis-10/12 basis-full px-3 2xl:max-w-full xl:max-w-[87%] w-full">
                        <div className={cn("relative z-0 slider_image before:heartbeat-middle-animation")}>
                            <Image src="/images/slider/person.png" alt="Hero person" width={749} height={983} />
                        </div>
                    </div>
                </div>
            </div>
        </Layout.Section>
    )
}
