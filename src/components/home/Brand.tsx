"use client"

import Link from "next/link";
import Image from "next/image";
import { Layout } from "@components/ui";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


export default function Brand() {
    return (
        <Layout.Section>
            <div className="container mx-auto px-3">
                <div className="border-b">
                    <Swiper
                        className="mt-16 mb-20"
                        slidesPerView={5}
                        grabCursor
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        loop
                        modules={[Autoplay]}
                    >
                        <SwiperSlide className="group relative z-[0] overflow-hidden">
                            <Link href="#" className="block text-center pt-5 group-hover:-translate-y-full dark:group-hover:-translate-y-0 dark:transition-none duration-300">
                                <Image className="inline-block w-[170px] h-auto" src="/images/brand/brand-img1.png" alt="Brand image 1" width={170} height={42} />
                            </Link>
                            <Link href="#" className="block text-center absolute w-full top-[110%] left-0 pt-5 group-hover:-top-0 duration-300 dark:hidden">
                                <Image className="inline-block w-[170px] h-auto" src="/images/brand/brand-hover-img1.png" alt="Brand image 1" width={170} height={42} />
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="group relative z-[0] overflow-hidden">
                            <Link href="#" className="block text-center pt-5 group-hover:-translate-y-full dark:group-hover:-translate-y-0 dark:transition-none duration-300">
                                <Image className="inline-block w-[170px] h-auto" src="/images/brand/brand-img2.png" alt="Brand image 2" width={170} height={42} />
                            </Link>
                            <Link href="#" className="block text-center absolute w-full top-[110%] left-0 pt-5 group-hover:-top-0 duration-300 dark:hidden">
                                <Image className="inline-block w-[170px] h-auto" src="/images/brand/brand-hover-img2.png" alt="Brand image 2" width={170} height={42} />
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="group relative z-[0] overflow-hidden">
                            <Link href="#" className="block text-center pt-5 group-hover:-translate-y-full dark:group-hover:-translate-y-0 dark:transition-none duration-300">
                                <Image className="inline-block w-[170px] h-auto" src="/images/brand/brand-img3.png" alt="Brand image 3" width={170} height={42} />
                            </Link>
                            <Link href="#" className="block text-center absolute w-full top-[110%] left-0 pt-5 group-hover:-top-0 duration-300 dark:hidden">
                                <Image className="inline-block w-[170px] h-auto" src="/images/brand/brand-hover-img3.png" alt="Brand image 3" width={170} height={42} />
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="group relative z-[0] overflow-hidden">
                            <Link href="#" className="block text-center pt-5 group-hover:-translate-y-full dark:group-hover:-translate-y-0 dark:transition-none duration-300">
                                <Image className="inline-block w-[170px] h-auto" src="/images/brand/brand-img4.png" alt="Brand image 4" width={170} height={42} />
                            </Link>
                            <Link href="#" className="block text-center absolute w-full top-[110%] left-0 pt-5 group-hover:-top-0 duration-300 dark:hidden">
                                <Image className="inline-block w-[170px] h-auto" src="/images/brand/brand-hover-img4.png" alt="Brand image 4" width={170} height={42} />
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="group relative z-[0] overflow-hidden">
                            <Link href="#" className="block text-center pt-5 group-hover:-translate-y-full dark:group-hover:-translate-y-0 dark:transition-none duration-300">
                                <Image className="inline-block w-[170px] h-auto" src="/images/brand/brand-img5.png" alt="Brand image 5" width={170} height={42} />
                            </Link>
                            <Link href="#" className="block text-center absolute w-full top-[110%] left-0 pt-5 group-hover:-top-0 duration-300 dark:hidden">
                                <Image className="inline-block w-[170px] h-auto" src="/images/brand/brand-hover-img5.png" alt="Brand image 5" width={170} height={42} />
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="group relative z-[0] overflow-hidden">
                            <Link href="#" className="block text-center pt-5 group-hover:-translate-y-full dark:group-hover:-translate-y-0 dark:transition-none duration-300">
                                <Image className="inline-block w-[170px] h-auto" src="/images/brand/brand-img2.png" alt="Brand image 6" width={170} height={42} />
                            </Link>
                            <Link href="#" className="block text-center absolute w-full top-[110%] left-0 pt-5 group-hover:-top-0 duration-300 dark:hidden">
                                <Image className="inline-block w-[170px] h-auto" src="/images/brand/brand-hover-img2.png" alt="Brand image 6" width={170} height={42} />
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="group relative z-[0] overflow-hidden">
                            <Link href="#" className="block text-center pt-5 group-hover:-translate-y-full dark:group-hover:-translate-y-0 dark:transition-none duration-300">
                                <Image className="inline-block w-[170px] h-auto" src="/images/brand/brand-img3.png" alt="Brand image 7" width={170} height={42} />
                            </Link>
                            <Link href="#" className="block text-center absolute w-full top-[110%] left-0 pt-5 group-hover:-top-0 duration-300 dark:hidden">
                                <Image className="inline-block w-[170px] h-auto" src="/images/brand/brand-hover-img3.png" alt="Brand image 7" width={170} height={42} />
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="group relative z-[0] overflow-hidden">
                            <Link href="#" className="block text-center pt-5 group-hover:-translate-y-full dark:group-hover:-translate-y-0 dark:transition-none duration-300">
                                <Image className="inline-block w-[170px] h-auto" src="/images/brand/brand-img4.png" alt="Brand image 8" width={170} height={42} />
                            </Link>
                            <Link href="#" className="block text-center absolute w-full top-[110%] left-0 pt-5 group-hover:-top-0 duration-300 dark:hidden">
                                <Image className="inline-block w-[170px] h-auto" src="/images/brand/brand-hover-img4.png" alt="Brand image 8" width={170} height={42} />
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="group relative z-[0] overflow-hidden">
                            <Link href="#" className="block text-center pt-5 group-hover:-translate-y-full dark:group-hover:-translate-y-0 dark:transition-none duration-300">
                                <Image className="inline-block w-[170px] h-auto" src="/images/brand/brand-img5.png" alt="Brand image 9" width={170} height={42} />
                            </Link>
                            <Link href="#" className="block text-center absolute w-full top-[110%] left-0 pt-5 group-hover:-top-0 duration-300 dark:hidden">
                                <Image className="inline-block w-[170px] h-auto" src="/images/brand/brand-hover-img5.png" alt="Brand image 9" width={170} height={42} />
                            </Link>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </Layout.Section>
    )
}
