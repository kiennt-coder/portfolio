import { Layout } from "@components/ui";
import ContentBox from "@components/home/ContentBox";
import { BriefcaseOutlined } from "@components/icons";
import ActivitySummaryBox from "@components/home/ActivitySummaryBox";


export default function Experience() {
    return (
        <Layout.Section className="pb-40">
            <div className="relative z-0 ">
                <div className="absolute z-[1] top-0 bottom-0 left-0 w-1/2 rounded-e-xl overflow-hidden bg-[url('/images/work/work-img.jpg')] bg-no-repeat bg-cover"></div>
                <div className="container mx-auto">
                    <div className="flex flex-row items-center">
                        <div className="basis-6/12 px-3"></div>
                        <div className="basis-6/12 px-3">
                            <div className="pl-24 mt-40 mb-12 pb-20">
                                <ContentBox title="My Experience" subTitle="Work Experience">
                                    Sed ut perspiciatis unde omnis iste natus kobita tumi sopno charini hoye khbor nio na sit voluptatem.
                                </ContentBox>
                                <ActivitySummaryBox>
                                    <ActivitySummaryBox.Item
                                        icon={<BriefcaseOutlined />}
                                        name="Senior System Engineer"
                                        address="eThemeStudio"
                                        date="2018 - Running"
                                        description="Ludantium totam rem aperiam meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae et vitae ullam molesti quae quasi."
                                    />
                                    <ActivitySummaryBox.Item
                                        icon={<BriefcaseOutlined />}
                                        name="Data Architect"
                                        address="Easy Computers"
                                        date="2015 - 2018"
                                        description="Ludantium totam rem aperiam meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae et vitae ullam molesti quae quasi."
                                    />
                                    <ActivitySummaryBox.Item
                                        icon={<BriefcaseOutlined />}
                                        name="Web Developer"
                                        address="Bangla College"
                                        date="2012 - 2015"
                                        description="Ludantium totam rem aperiam meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae et vitae ullam molesti quae quasi."
                                    />
                                </ActivitySummaryBox>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout.Section>
    )
}
