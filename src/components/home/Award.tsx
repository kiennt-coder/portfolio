import { Layout } from "@components/ui";
import ContentBox from "@components/home/ContentBox";
import Link from "next/link";
import Image from "next/image";

export default function Award() {
    return (
        <Layout.Section className="pt-40 pb-44">
            <div className="container px-3 mx-auto">
                <ContentBox title="Awards & Achivements" subTitle="Succcess Stories" className="text-center" />
                <div className="flex flex-col items-stretch justify-start divide-y border-t border-b">
                    <div className="flex flex-row items-center pt-10 pb-9">
                        <div className="basis-2/12 px-3">
                            <Link href="#">
                                <Image className="dark:hidden" src="/images/award/award-logo1.png" alt="Award logo 1" width={156} height={36} />
                                <Image className="hidden dark:inline" src="/images/award/award-logo1-dark.png" alt="Award logo 1" width={156} height={36} />
                            </Link>
                        </div>
                        <div className="basis-3/12 px-3">
                            <h3 className="text-2xl font-semibold mb-2 dark:text-neutral-50">Best Developer</h3>
                            <p className="text-lg text-gray-400">2022</p>
                        </div>
                        <div className="basis-3/12 px-3">
                            <h3 className="text-2xl font-semibold mb-2 dark:text-neutral-50">Developer Association</h3>
                            <p className="text-lg text-gray-400">New York, Usa</p>
                        </div>
                        <div className="basis-4/12 px-3 self-start text-lg">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore.</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center pt-10 pb-9">
                        <div className="basis-2/12 px-3">
                            <Link href="#">
                                <Image className="dark:hidden" src="/images/award/award-logo2.png" alt="Award logo 3" width={124} height={39} />
                                <Image className="hidden dark:inline" src="/images/award/award-logo2-dark.png" alt="Award logo 3" width={124} height={39} />
                            </Link>
                        </div>
                        <div className="basis-3/12 px-3">
                            <h3 className="text-2xl font-semibold mb-2 dark:text-neutral-50">Developer of the Year</h3>
                            <p className="text-lg text-gray-400">2021</p>
                        </div>
                        <div className="basis-3/12 px-3">
                            <h3 className="text-2xl font-semibold mb-2 dark:text-neutral-50">Dev Internatioal</h3>
                            <p className="text-lg text-gray-400">London, England</p>
                        </div>
                        <div className="basis-4/12 px-3 self-start text-lg">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore.</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center pt-10 pb-9">
                        <div className="basis-2/12 px-3">
                            <Link href="#">
                                <Image className="dark:hidden" src="/images/award/award-logo3.png" alt="Award logo 3" width={105} height={40} />
                                <Image className="hidden dark:inline" src="/images/award/award-logo3-dark.png" alt="Award logo 3" width={105} height={40} />
                            </Link>
                        </div>
                        <div className="basis-3/12 px-3">
                            <h3 className="text-2xl font-semibold mb-2 dark:text-neutral-50">Fastest Coder</h3>
                            <p className="text-lg text-gray-400">2019</p>
                        </div>
                        <div className="basis-3/12 px-3">
                            <h3 className="text-2xl font-semibold mb-2 dark:text-neutral-50">Amazing Programmer</h3>
                            <p className="text-lg text-gray-400">Dhaka, Bangladesh</p>
                        </div>
                        <div className="basis-4/12 px-3 self-start text-lg">
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout.Section>
    )
}
