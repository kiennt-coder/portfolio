import Image from "next/image";
import { Layout } from "@components/ui";
import ContentBox from "@components/home/ContentBox";
import TestimonialSwiper from "@components/home/TestimonialSwiper";


export default function Testimonial() {
    return (
        <Layout.Section className="overflow-hidden">
            <div className="container mx-auto">
                <div className="py-44 flex flex-row items-start justify-center relative z-0 before:content-[''] before:absolute before:-z-[1] before:top-0 before:right-3 before:bottom-0 before:-left-full before:bg-slate-200 dark:before:bg-base-200 before:rounded-2xl">
                    <div className="basis-7/12 w-7/12 px-3">
                        <ContentBox title="What People Say" subTitle="Testimonials" />
                        <div className="mt-10 relative z-0">
                            <div className="absolute top-4 left-0 z-[1]">
                                <Image src="/images/testimonial/testimonial-icon.png" alt="Testimonial icon" width={48} height={36} />
                            </div>
                            <TestimonialSwiper />
                        </div>
                    </div>
                    <div className="basis-5/12 w-5/12 px-3">
                        <div className="rounded-lg overflow-hidden relative z-[1] w-[132%]" data-aos="fade-left" data-aos-duration="1500">
                            <Image src="/images/testimonial/testimonials-img.jpg" alt="Testimonials image" width={711} height={549} />
                        </div>
                    </div>
                    <div className="absolute -z-[1] -right-1 -bottom-48 text-[300px] text-gray-100 dark:text-gray-600/20 font-semibold">
                        <span>Testim</span>
                    </div>
                </div>
            </div>
        </Layout.Section>
    )
}
