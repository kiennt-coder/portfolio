"use client"

import Image from "next/image"
import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

export default function TestimonialSwiper() {
    const pagination = {
        clickable: true,
        renderBullet: function (_: unknown, className: string) {
            return `
                <div class="${className}">
                    <span></span>
                </div>
            `;
        },
    };

    return (
        <div className="pl-20 pr-24">
            <Swiper
                className="testimonial-swiper"
                grabCursor
                loop
                spaceBetween={24}
                pagination={pagination}
                modules={[Pagination]}
            >
                <SwiperSlide>
                    <div>
                        <blockquote className="text-2xl italic">
                            Excepteur sint occaecat cupidatat non proiden sunt in culpa qui officia
                            deserunt mollit anim id est laebor um. Sed ut perspiciatis unde omnis
                            iste natus error sit volup tatem gotiraz bole ami ke
                        </blockquote>
                        <div className="mt-10 flex flex-row items-center gap-6">
                            <div className="avatar">
                                <div className="size-[72px] rounded-full">
                                    <Image src="/images/testimonial/author-img.jpg" alt="Avatar image" width={72} height={72} />
                                </div>
                            </div>
                            <div>
                                <h5 className="text-2xl dark:text-neutral-50 font-semibold capitalize mb-1">Paul harrison,</h5>
                                <p className="text-base text-gray-400">eThemeStudio</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <blockquote className="text-2xl italic">
                            Excepteur sint occaecat cupidatat non proiden sunt in culpa qui officia
                            deserunt mollit anim id est laebor um. Sed ut perspiciatis unde omnis
                            iste natus error sit volup tatem gotiraz bole ami ke
                        </blockquote>
                        <div className="mt-10 flex flex-row items-center gap-6">
                            <div className="avatar">
                                <div className="size-[72px] rounded-full">
                                    <Image src="/images/testimonial/author-img.jpg" alt="Avatar image" width={72} height={72} />
                                </div>
                            </div>
                            <div>
                                <h5 className="text-2xl font-semibold capitalize mb-1">Paul harrison,</h5>
                                <p className="text-base text-gray-400">eThemeStudio</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <blockquote className="text-2xl italic">
                            Excepteur sint occaecat cupidatat non proiden sunt in culpa qui officia
                            deserunt mollit anim id est laebor um. Sed ut perspiciatis unde omnis
                            iste natus error sit volup tatem gotiraz bole ami ke
                        </blockquote>
                        <div className="mt-10 flex flex-row items-center gap-6">
                            <div className="avatar">
                                <div className="size-[72px] rounded-full">
                                    <Image src="/images/testimonial/author-img.jpg" alt="Avatar image" width={72} height={72} />
                                </div>
                            </div>
                            <div>
                                <h5 className="text-2xl font-semibold capitalize mb-1">Paul harrison,</h5>
                                <p className="text-base text-gray-400">eThemeStudio</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
