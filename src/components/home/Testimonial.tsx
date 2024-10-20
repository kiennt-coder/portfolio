import Image from "next/image";
import { Layout } from "@components/ui";
import ContentBox from "@components/home/ContentBox";
import TestimonialSwiper from "@components/home/TestimonialSwiper";


export default function Testimonial() {
    return (
        <Layout.Section className="overflow-hidden">
            <div className="container mx-auto">
                <div className="relative z-0 before:content-[''] before:absolute before:-z-[1] before:top-0 lg:before:right-3 before:right-0 before:bottom-0 before:-left-full before:bg-slate-200 dark:before:bg-base-200 lg:before:rounded-2xl before:rounded-none">
                    <div className="xl:py-44 lg:pt-36 lg:pb-24 md:py-32 py-16 flex flex-row flex-wrap items-start justify-center">
                        <div className="lg:basis-7/12 basis-full lg:w-7/12 w-full px-3">
                            <ContentBox title="What People Say" subTitle="Testimonials" />
                            <div className="mt-10 relative z-0">
                                <div className="absolute xl:top-4 top-1 left-0 z-[1] md:w-12 w-7">
                                    <Image src="/images/testimonial/testimonial-icon.png" alt="Testimonial icon" width={48} height={36} />
                                </div>
                                <TestimonialSwiper />
                            </div>
                        </div>
                        <div className="lg:basis-5/12 basis-full lg:w-5/12 w-full px-3">
                            <div className="rounded-lg overflow-hidden relative z-[1] lg:w-[132%] w-full md:mt-0 mt-10" data-aos="fade-left" data-aos-duration="1500">
                                <Image className="w-full" src="/images/testimonial/testimonials-img.jpg" alt="Testimonials image" width={711} height={549} />
                            </div>
                        </div>
                        <div className="absolute -z-[1] -right-1 xl:-bottom-28 md:-bottom-20 -bottom-8 xl:text-[300px] md:text-[200px] text-8xl text-gray-100 dark:text-gray-600/20 font-semibold">
                            <span>Testim</span>
                        </div>
                    </div>
                </div>
            </div>
        </Layout.Section>
    )
}
