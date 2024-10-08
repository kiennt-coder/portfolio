import { Layout } from "@components/ui";
import ContentBox from "@components/home/ContentBox";
import { EvelopeFilled, MapPinFilled, PhoneFilled } from "@components/icons";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// Import dynamic
const ContactMap = dynamic(() => import('@components/home/ContactMap'), { ssr: false });


export default function Contact() {
    return (
        <Layout.Section className="mt-36 mb-40">
            <div className="container mx-auto px-3">
                <ContentBox className="text-center" title="Let's Start A New Project" subTitle="Contact me" />
                <div className="flex flex-row items-start gap-6 mt-16">
                    <div className="basis-6/12">
                        <ul>
                            <li className="flex flex-row items-center justify-start gap-7 mb-5">
                                <div className="size-[72px] rounded-full bg-primary flex items-center justify-center">
                                    <MapPinFilled className="text-neutral-50" />
                                </div>
                                <div>
                                    <h4 className="text-2xl dark:text-neutral-50 font-semibold mb-2">Location</h4>
                                    <p className="text-lg">20 Bordeshi, London, Usa</p>
                                </div>
                            </li>
                            <li className="flex flex-row items-center justify-start gap-7 mb-5">
                                <div className="size-[72px] rounded-full bg-primary flex items-center justify-center">
                                    <PhoneFilled className="text-neutral-50" />
                                </div>
                                <div>
                                    <h4 className="text-2xl dark:text-neutral-50 font-semibold mb-2">Phone</h4>
                                    <p className="text-lg">+123 456 7890</p>
                                </div>
                            </li>
                            <li className="flex flex-row items-center justify-start gap-7 mb-5">
                                <div className="size-[72px] rounded-full bg-primary flex items-center justify-center">
                                    <EvelopeFilled className="text-neutral-50" />
                                </div>
                                <div>
                                    <h4 className="text-2xl dark:text-neutral-50 font-semibold mb-2">Email</h4>
                                    <p className="text-lg">hello@thames.com</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="basis-6/12">
                        <form>
                            <div className="grid grid-cols-2 gap-3">
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
                                <div className="col-span-2" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
                                    <textarea className="textarea textarea-bordered w-full text-lg focus:border-primary focus:outline-none" placeholder="Start with message here" rows={6}></textarea>
                                </div>
                                <div className="col-span-2" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2500">
                                    <button className='btn btn-primary text-base self-start uppercase px-8 text-base-100 relative z-0 overflow-hidden after:content-[""] after:absolute after:z-[1] after:-top-12 after:-left-20 after:w-12 after:h-40 after:bg-neutral-50/20 after:rotate-[35deg] hover:after:left-[120%] after:duration-500'>
                                        Submit now
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <Suspense fallback={<>Loading...</>}>
                    <ContactMap />
                </Suspense>
            </div>
        </Layout.Section>
    )
}
