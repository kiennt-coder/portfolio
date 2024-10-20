import { Layout } from "@components/ui";
import { Marquee } from "@components/common";
import ContentBox from "@components/home/ContentBox";
import BlogSwiper from "@components/home/BlogSwiper";


export default function Blog() {
    return (
        <Layout.Section id="blog">
            <Marquee className="mb-11">
                <Marquee.Item label="Senior Website Developer from New York *" />
            </Marquee>
            <div className="bg-slate-200 dark:bg-base-200 lg:pt-40 lg:pb-32 md:pt-32 md:pb-24 pt-16 pb-10">
                <div className="container mx-auto px-3 overflow-hidden">
                    <ContentBox title="Recent Blog" subTitle="Get updates" />
                    <BlogSwiper />
                </div>
            </div>
        </Layout.Section>
    )
}
