
import { Layout } from "@components/ui";
import { Marquee } from "@components/common";
import ContentBox from "@components/home/ContentBox";
import SkillProgress from "@components/home/SkillProgress";

export default function Skills() {
    return (
        <Layout.Section className="xl:pt-32 xl:pb-28 pt-16 pb-20 relative z-0 overflow-hidden">
            <Marquee className="xl:mb-32 mb-14">
                <Marquee.Item label="Senior Website Developer from New York *" />
                <Marquee.Item label="I&rsquo;m Open for new projects * Let&rsquo;s Work Together." outline startFrom="left" />
            </Marquee>
            <div className="container mx-auto">
                <div className="flex flex-row flex-wrap items-start justify-between">
                    <div className="lg:basis-5/12 basis-full p-3">
                        <ContentBox
                            title="Growing Over Times"
                            subTitle="My Skill"
                        >
                            <p className="mb-12">Sed ut perspiciatis unde omnis iste natus Sed ut perspiciatis unde omnis iste natus tumi sopno charini hoye khbor nio na sit voluptatem accusantium dolore.</p>
                        </ContentBox>
                    </div>
                    <div className="xl:basis-6/12 lg:basis-7/12 basis-full ml-auto p-3" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1400">
                        <div className="grid md:grid-cols-3 grid-cols-1 gap-x-6 gap-y-10">
                            <SkillProgress label="Web Development" value={80} />
                            <SkillProgress label="Hardware Development" value={95} />
                            <SkillProgress label="Software Development" value={90} />
                            <SkillProgress label="System Application" value={75} />
                            <SkillProgress label="Project Management" value={60} />
                            <SkillProgress label="Data Administration" value={85} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute -z-[1] xl:-bottom-[6rem] -bottom-12 -left-6">
                <span className="xl:text-[310px] lg:text-[180px] text-9xl text-slate-200 dark:text-base-200 font-semibold">Skills</span>
            </div>
        </Layout.Section>
    )
}
