import { Layout } from "@components/ui";
import { Marquee } from "@components/common";
import WorkPortfolio from "@components/home/WorkPortfolio";

export default function Work() {
    return (
        <Layout.Section id="work" className="pb-40">
            <Marquee className="mb-32">
                <Marquee.Item label="Senior Website Developer from New York *" />
                <Marquee.Item label="I&rsquo;m Open for new projects * Let&rsquo;s Work Together." outline startFrom="left" />
            </Marquee>
            <WorkPortfolio />
        </Layout.Section>
    )
}
