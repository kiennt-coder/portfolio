"use client"

import Link from "next/link"
import Image from "next/image"
import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { ChatFilled, ChevronLeft, ChevronRight, FolderFilled, UserFilled } from "@components/icons"

export default function BlogSwiper() {
    return (
        <div className="blog-swiper-wrapper">
            <div className="swiper-navigation-btn swiper-button-prev z-0 size-11 border border-gray-400 rounded-full text-primary hover:border-primary hover:text-neutral-50 hover:bg-primary duration-300">
                <ChevronLeft strokeWidth={3} className="!size-6" />
            </div>
            <div className="swiper-navigation-btn swiper-button-next z-0 size-11 border border-gray-400 rounded-full text-primary hover:border-primary hover:text-neutral-50 hover:bg-primary duration-300">
                <ChevronRight strokeWidth={3} className="!size-6" />
            </div>
            <Swiper
                spaceBetween={24}
                slidesPerView={3}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                loop
                grabCursor
                modules={[Navigation]}
                className="blog-swipper mt-16"
            >
                <SwiperSlide>
                    <div className="group card bg-base-100 w-full shadow-lg">
                        <figure>
                            <Image className="group-hover:scale-110 ease-out duration-[1.5s] w-full" src="/images/blog/blog-img1.jpg" alt="Blog image 1" width={424} height={290} />
                        </figure>
                        <div className="card-body">
                            <ul>
                                <li className="inline-flex items-center justify-start mr-3">
                                    <FolderFilled className="text-primary size-4 mr-1" />
                                    <span className="text-base">Web Design</span>
                                </li>
                                <li className="inline-flex items-center justify-start mr-3">
                                    <UserFilled className="text-primary size-4 mr-1" />
                                    <span className="text-base">Admin</span>
                                </li>
                                <li className="inline-flex items-center justify-start mr-3">
                                    <ChatFilled className="text-primary size-4 mr-1" />
                                    <span className="text-base">22</span>
                                </li>
                            </ul>
                            <h2 className="card-title text-2xl">
                                <Link href="#" className="hover:text-primary duration-300">
                                    Become the best version of you everyday
                                </Link>
                            </h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="group card bg-base-100 w-full shadow-lg">
                        <figure>
                            <Image className="group-hover:scale-110 ease-out duration-[1.5s] w-full" src="/images/blog/blog-img2.jpg" alt="Blog image 2" width={424} height={290} />
                        </figure>
                        <div className="card-body">
                            <ul>
                                <li className="inline-flex items-center justify-start mr-3">
                                    <FolderFilled className="text-primary size-4 mr-1" />
                                    <span className="text-base">Web Design</span>
                                </li>
                                <li className="inline-flex items-center justify-start mr-3">
                                    <UserFilled className="text-primary size-4 mr-1" />
                                    <span className="text-base">Admin</span>
                                </li>
                                <li className="inline-flex items-center justify-start mr-3">
                                    <ChatFilled className="text-primary size-4 mr-1" />
                                    <span className="text-base">22</span>
                                </li>
                            </ul>
                            <h2 className="card-title text-2xl">
                                <Link href="#" className="hover:text-primary duration-300">
                                    Become the best version of you everyday
                                </Link>
                            </h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="group card bg-base-100 w-full shadow-lg">
                        <figure>
                            <Image className="group-hover:scale-110 ease-out duration-[1.5s] w-full" src="/images/blog/blog-img3.jpg" alt="Blog image 3" width={424} height={290} />
                        </figure>
                        <div className="card-body">
                            <ul>
                                <li className="inline-flex items-center justify-start mr-3">
                                    <FolderFilled className="text-primary size-4 mr-1" />
                                    <span className="text-base">Web Design</span>
                                </li>
                                <li className="inline-flex items-center justify-start mr-3">
                                    <UserFilled className="text-primary size-4 mr-1" />
                                    <span className="text-base">Admin</span>
                                </li>
                                <li className="inline-flex items-center justify-start mr-3">
                                    <ChatFilled className="text-primary size-4 mr-1" />
                                    <span className="text-base">22</span>
                                </li>
                            </ul>
                            <h2 className="card-title text-2xl">
                                <Link href="#" className="hover:text-primary duration-300">
                                    Become the best version of you everyday
                                </Link>
                            </h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="group card bg-base-100 w-full shadow-lg">
                        <figure>
                            <Image className="group-hover:scale-110 ease-out duration-[1.5s] w-full" src="/images/blog/blog-img4.jpg" alt="Blog image 4" width={424} height={290} />
                        </figure>
                        <div className="card-body">
                            <ul>
                                <li className="inline-flex items-center justify-start mr-3">
                                    <FolderFilled className="text-primary size-4 mr-1" />
                                    <span className="text-base">Web Design</span>
                                </li>
                                <li className="inline-flex items-center justify-start mr-3">
                                    <UserFilled className="text-primary size-4 mr-1" />
                                    <span className="text-base">Admin</span>
                                </li>
                                <li className="inline-flex items-center justify-start mr-3">
                                    <ChatFilled className="text-primary size-4 mr-1" />
                                    <span className="text-base">22</span>
                                </li>
                            </ul>
                            <h2 className="card-title text-2xl">
                                <Link href="#" className="hover:text-primary duration-300">
                                    Become the best version of you everyday
                                </Link>
                            </h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="group card bg-base-100 w-full shadow-lg">
                        <figure>
                            <Image className="group-hover:scale-110 ease-out duration-[1.5s] w-full" src="/images/blog/blog-img5.jpg" alt="Blog image 5" width={424} height={290} />
                        </figure>
                        <div className="card-body">
                            <ul>
                                <li className="inline-flex items-center justify-start mr-3">
                                    <FolderFilled className="text-primary size-4 mr-1" />
                                    <span className="text-base">Web Design</span>
                                </li>
                                <li className="inline-flex items-center justify-start mr-3">
                                    <UserFilled className="text-primary size-4 mr-1" />
                                    <span className="text-base">Admin</span>
                                </li>
                                <li className="inline-flex items-center justify-start mr-3">
                                    <ChatFilled className="text-primary size-4 mr-1" />
                                    <span className="text-base">22</span>
                                </li>
                            </ul>
                            <h2 className="card-title text-2xl">
                                <Link href="#" className="hover:text-primary duration-300">
                                    Become the best version of you everyday
                                </Link>
                            </h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="group card bg-base-100 w-full shadow-lg">
                        <figure>
                            <Image className="group-hover:scale-110 ease-out duration-[1.5s] w-full" src="/images/blog/blog-img6.jpg" alt="Blog image 6" width={424} height={290} />
                        </figure>
                        <div className="card-body">
                            <ul>
                                <li className="inline-flex items-center justify-start mr-3">
                                    <FolderFilled className="text-primary size-4 mr-1" />
                                    <span className="text-base">Web Design</span>
                                </li>
                                <li className="inline-flex items-center justify-start mr-3">
                                    <UserFilled className="text-primary size-4 mr-1" />
                                    <span className="text-base">Admin</span>
                                </li>
                                <li className="inline-flex items-center justify-start mr-3">
                                    <ChatFilled className="text-primary size-4 mr-1" />
                                    <span className="text-base">22</span>
                                </li>
                            </ul>
                            <h2 className="card-title text-2xl">
                                <Link href="#" className="hover:text-primary duration-300">
                                    Become the best version of you everyday
                                </Link>
                            </h2>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
