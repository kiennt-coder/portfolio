import { Layout } from "@components/ui";
import { Marquee } from "@components/common";
import WorkPortfolio from "@components/home/WorkPortfolio";

export default function Work() {
    return (
        <Layout.Section id="works" className="lg:pb-40 md:pb-32 pb-16">
            <Marquee className="xl:mb-32 lg:mb-14 md:mb-20 mb-14">
                <Marquee.Item label="Senior Website Developer from New York *" />
                <Marquee.Item label="I&rsquo;m Open for new projects * Let&rsquo;s Work Together." outline startFrom="left" />
            </Marquee>
            <WorkPortfolio />
        </Layout.Section>
    )
}
