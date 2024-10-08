import { CSSProperties } from "react";
import { Layout } from "@components/ui";
import { Marquee } from "@components/common";
import ContentBox from "@components/home/ContentBox";


export default function Skills() {
    return (
        <Layout.Section className="pt-32 pb-28 relative z-0 overflow-hidden">
            <Marquee className="mb-32">
                <Marquee.Item label="Senior Website Developer from New York *" />
                <Marquee.Item label="I&rsquo;m Open for new projects * Let&rsquo;s Work Together." outline startFrom="left" />
            </Marquee>
            <div className="container mx-auto">
                <div className="flex flex-row items-start justify-between">
                    <div className="basis-5/12 p-3">
                        <ContentBox
                            title="Growing Over Times"
                            subTitle="My Skill"
                        >
                            <p>Sed ut perspiciatis unde omnis iste natus Sed ut perspiciatis unde omnis iste natus tumi sopno charini hoye khbor nio na sit voluptatem accusantium dolore.</p>
                        </ContentBox>
                    </div>
                    <div className="basis-6/12 ml-auto p-3" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1400">
                        <div className="grid grid-cols-3 grid-rows-2 gap-x-6 gap-y-10">
                            <div className="text-center">
                                <div className="radial-progress text-4xl font-semibold text-primary" style={{ "--value": 80, "--size": "12rem", "--thickness": "6px" } as CSSProperties} role="progressbar" title="Web Development">
                                    <span className="text-base-content dark:text-neutral-50">80%</span>
                                </div>
                                <h4 className="mt-4 text-2xl font-semibold dark:text-neutral-50">Web Development</h4>
                            </div>
                            <div className="text-center">
                                <div className="radial-progress text-4xl font-semibold text-primary" style={{ "--value": 95, "--size": "12rem", "--thickness": "6px" } as CSSProperties} role="progressbar" title="Hardware Development">
                                    <span className="text-base-content dark:text-neutral-50">95%</span>
                                </div>
                                <h4 className="mt-4 text-2xl font-semibold dark:text-neutral-50">Hardware Development</h4>
                            </div>
                            <div className="text-center">
                                <div className="radial-progress text-4xl font-semibold text-primary" style={{ "--value": 90, "--size": "12rem", "--thickness": "6px" } as CSSProperties} role="progressbar" title="Software Development">
                                    <span className="text-base-content dark:text-neutral-50">90%</span>
                                </div>
                                <h4 className="mt-4 text-2xl font-semibold dark:text-neutral-50">Software Development</h4>
                            </div>
                            <div className="text-center">
                                <div className="radial-progress text-4xl font-semibold text-primary" style={{ "--value": 75, "--size": "12rem", "--thickness": "6px" } as CSSProperties} role="progressbar" title="System Application">
                                    <span className="text-base-content dark:text-neutral-50">75%</span>
                                </div>
                                <h4 className="mt-4 text-2xl font-semibold dark:text-neutral-50">System Application</h4>
                            </div>
                            <div className="text-center">
                                <div className="radial-progress text-4xl font-semibold text-primary" style={{ "--value": 60, "--size": "12rem", "--thickness": "6px" } as CSSProperties} role="progressbar" title="Project Management">
                                    <span className="text-base-content dark:text-neutral-50">60%</span>
                                </div>
                                <h4 className="mt-4 text-2xl font-semibold dark:text-neutral-50">Project Management</h4>
                            </div>
                            <div className="text-center">
                                <div className="radial-progress text-4xl font-semibold text-primary" style={{ "--value": 85, "--size": "12rem", "--thickness": "6px" } as CSSProperties} role="progressbar" title="Data Administration">
                                    <span className="text-base-content dark:text-neutral-50">85%</span>
                                </div>
                                <h4 className="mt-4 text-2xl font-semibold dark:text-neutral-50">Data Administration</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute -z-[1] -bottom-[200px] -left-6">
                <span className="text-[310px] text-slate-200 dark:text-base-200 font-semibold">Skills</span>
            </div>
        </Layout.Section>
    )
}
