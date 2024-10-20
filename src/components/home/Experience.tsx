import { Layout } from "@components/ui";
import ContentBox from "@components/home/ContentBox";
import { BriefcaseOutlined } from "@components/icons";
import ActivitySummaryBox from "@components/home/ActivitySummaryBox";


export default function Experience() {
    return (
        <Layout.Section className="md:pb-40 pb-16">
            <div className="relative flex lg:flex-col flex-col-reverse z-0">
                <div className="lg:absolute [position:inherit] -z-[1] top-0 bottom-0 left-0 lg:w-1/2 w-11/12 md:min-h-[600px] min-h-[450px] mx-auto lg:rounded-e-xl rounded-xl overflow-hidden bg-[url('/images/work/work-img.jpg')] bg-no-repeat bg-cover"></div>
                <div className="container mx-auto">
                    <div className="flex flex-row items-center">
                        <div className="lg:basis-6/12 lg:block hidden px-3"></div>
                        <div className="lg:basis-6/12 basis-full px-3">
                            <div className="xl:pl-24 lg:pl-4 pl-0 lg:mt-40 lg:mb-12 lg:pb-20 mt-0 mb-0 pb-6">
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
