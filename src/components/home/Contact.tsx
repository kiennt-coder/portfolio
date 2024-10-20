import { Layout } from "@components/ui";
import ContentBox from "@components/home/ContentBox";
import { EvelopeFilled, MapPinFilled, PhoneFilled } from "@components/icons";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// Import dynamic
const ContactMap = dynamic(() => import('@components/home/ContactMap'), { ssr: false });


export default function Contact() {
    return (
        <Layout.Section id="contact" className="lg:pt-36 lg:pb-40 md:py-32 py-16">
            <div className="container mx-auto px-3">
                <ContentBox className="text-center" title="Let's Start A New Project" subTitle="Contact me" />
                <div className="flex flex-row flex-wrap items-start lg:mt-16">
                    <div className="xl:basis-6/12 lg:basis-5/12 basis-full px-3">
                        <ul className="lg:flex-col md:flex md:flex-row md:items-start md:justify-start">
                            <li className="lg:basis-full lg:flex lg:text-start md:basis-1/3 md:px-3 md:inline-block md:text-center flex flex-row flex-wrap items-center justify-start gap-7 mb-5">
                                <div className="flex-shrink-0 md:size-[72px] size-[50px] lg:my-0 md:my-5 rounded-full bg-primary inline-flex items-center justify-center">
                                    <MapPinFilled className="text-neutral-50" />
                                </div>
                                <div>
                                    <h4 className="text-2xl dark:text-neutral-50 font-semibold mb-2">Location</h4>
                                    <p className="text-lg">20 Bordeshi, London, Usa</p>
                                </div>
                            </li>
                            <li className="lg:basis-full lg:flex lg:text-start md:basis-1/3 md:px-3 md:inline-block md:text-center flex flex-row flex-wrap items-center justify-start gap-7 mb-5">
                                <div className="flex-shrink-0 md:size-[72px] size-[50px] lg:my-0 md:my-5 rounded-full bg-primary inline-flex items-center justify-center">
                                    <PhoneFilled className="text-neutral-50" />
                                </div>
                                <div>
                                    <h4 className="text-2xl dark:text-neutral-50 font-semibold mb-2">Phone</h4>
                                    <p className="text-lg">+123 456 7890</p>
                                </div>
                            </li>
                            <li className="lg:basis-full lg:flex lg:text-start md:basis-1/3 md:px-3 md:inline-block md:text-center flex flex-row flex-wrap items-center justify-start gap-7 mb-5">
                                <div className="flex-shrink-0 md:size-[72px] size-[50px] lg:my-0 md:my-5 rounded-full bg-primary inline-flex items-center justify-center">
                                    <EvelopeFilled className="text-neutral-50" />
                                </div>
                                <div>
                                    <h4 className="text-2xl dark:text-neutral-50 font-semibold mb-2">Email</h4>
                                    <p className="text-lg">hello@thames.com</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="xl:basis-6/12 lg:basis-7/12 basis-full px-3 lg:mt-0 mt-11">
                        <form>
                            <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
                                    <input type="text" placeholder="Your Name" className="input input-lg input-bordered w-full text-lg focus:border-primary focus:outline-none" />
                                </div>
                                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2500">
                                    <input type="text" placeholder="Your Email" className="input input-lg input-bordered w-full text-lg focus:border-primary focus:outline-none" />
                                </div>
                                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
                                    <input type="text" placeholder="Your Phone" className="input input-lg input-bordered w-full text-lg focus:border-primary focus:outline-none" />
                                </div>
                                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2500">
                                    <input type="text" placeholder="Your Subject" className="input input-lg input-bordered w-full text-lg focus:border-primary focus:outline-none" />
                                </div>
                                <div className="md:col-span-2" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
                                    <textarea className="textarea textarea-bordered w-full text-lg focus:border-primary focus:outline-none" placeholder="Start with message here" rows={6}></textarea>
                                </div>
                                <div className="md:col-span-2" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2500">
                                    <button className='btn btn-primary md:text-base text-sm self-start uppercase px-8 text-base-100 relative z-0 overflow-hidden after:content-[""] after:absolute after:z-[1] after:-top-12 after:-left-20 after:w-12 after:h-40 after:bg-neutral-50/20 after:rotate-[35deg] hover:after:left-[120%] after:duration-500'>
                                        Submit now
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <Suspense fallback={<div className="skeleton h-80 w-full md:mt-16 mt-10 rounded-lg"></div>}>
                    <ContactMap />
                </Suspense>
            </div>
        </Layout.Section>
    )
}
