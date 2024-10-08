import { Layout } from "@components/ui";
import { ContentBoxProps } from "@/types/props";


export default function ContentBox({ title, subTitle, children, ...props }: ContentBoxProps) {
    return (
        <Layout.Content {...props}>
            <span className="block uppercase text-primary text-lg font-semibold tracking-[7px] mb-1" title={subTitle}>{subTitle}</span>
            <h2 className="mb-8 text-6xl font-semibold leading-tight dark:text-neutral-50" title={title}>{title}</h2>
            <div className="leading-7 text-lg">{children}</div>
        </Layout.Content>
    )
}
