import { Layout } from "@components/ui";
import { ContentBoxProps } from "@/types/props";


export default function ContentBox({ title, subTitle, children, ...props }: ContentBoxProps) {
    return (
        <Layout.Content {...props}>
            <span className="block uppercase text-primary md:text-lg text-base font-semibold md:tracking-[7px] tracking-widest mb-1" title={subTitle}>{subTitle}</span>
            <h2 className="mb-8 xl:text-6xl lg:text-5xl md:text-[2.5rem] text-[2.125rem] font-semibold !leading-tight dark:text-neutral-50" title={title}>{title}</h2>
            <div className="leading-7 text-lg">{children}</div>
        </Layout.Content>
    )
}
