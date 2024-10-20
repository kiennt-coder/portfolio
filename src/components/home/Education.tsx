import Image from "next/image";
import { Layout } from "@components/ui";
import ContentBox from "@components/home/ContentBox";
import { AcademicOutlined } from "@components/icons";
import ActivitySummaryBox from "@components/home/ActivitySummaryBox";


export default function Education() {
    return (
        <Layout.Section>
            <div className="container mx-auto">
                <div className="flex flex-row flex-wrap items-stretch">
                    <div className="lg:basis-6/12 basis-full px-3">
                        <ContentBox title="My Education" subTitle="Education">
                            Sed ut perspiciatis unde omnis iste natus kobita tumi sopno charini hoye khbor nio na sit voluptatem accusantium dolore.
                        </ContentBox>
                        <ActivitySummaryBox>
                            <ActivitySummaryBox.Item
                                icon={<AcademicOutlined />}
                                name="Masters in Computer Science"
                                address="New York Univercity"
                                date="2012 - 2016"
                                description="Ludantium totam rem aperiam meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae et vitae ullam molesti quae quasi."
                            />
                            <ActivitySummaryBox.Item
                                icon={<AcademicOutlined />}
                                name="Bachelor in Computer Engineering"
                                address="Dahaka Univercity"
                                date="2008 - 2011"
                                description="Ludantium totam rem aperiam meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae et vitae ullam molesti quae quasi."
                            />
                            <ActivitySummaryBox.Item
                                icon={<AcademicOutlined />}
                                name="Diploma in Graphic Design"
                                address="Bangla College"
                                date="2006 - 2008"
                                description="Ludantium totam rem aperiam meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae et vitae ullam molesti quae quasi."
                            />
                        </ActivitySummaryBox>
                    </div>
                    <div className="xl:basis-5/12 lg:basis-6/12 basis-full px-3 ml-auto">
                        <div className="flex items-center h-full justify-center">
                            <div className="w-full" data-aos="fade-left" data-aos-duration="2000">
                                <Image className="rounded-xl mx-auto" src="/images/education/education-img.jpg" alt="Education image" width={536} height={725} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout.Section>
    )
}
