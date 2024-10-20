import Image from "next/image";
import { Layout } from "@components/ui";
import { ServiceCardProps } from "@/types/props";
import ContentBox from "@components/home/ContentBox";
import { Service as ServiceType } from "@/types/models";

const services: Array<ServiceType> = [
    {
        icon: "/icons/service-icon1.png",
        alt: "Service icon 1",
        title: "Web Development",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    },
    {
        icon: "/icons/service-icon2.png",
        alt: "Service icon 2",
        title: "Software Development",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    },
    {
        icon: "/icons/service-icon3.png",
        alt: "Service icon 3",
        title: "System Development",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    },
    {
        icon: "/icons/service-icon4.png",
        alt: "Service icon 4",
        title: "Scurity Development",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    }
]

const ServiceCard = ({ data }: ServiceCardProps) => {
    return (
        <div className="group card bg-neutral-50" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" data-aos-delay="500">
            <div className="card-body p-0">
                <div className="flex flex-row flex-wrap items-start xl:px-10 lg:px-0 px-8 lg:py-16 py-11">
                    <div className="md:basis-3/12 text-center px-3 lg:ml-0 lg:mb-0 ml-4 mb-8">
                        <div className="inline-block relative z-0">
                            <Image className="md:w-[4.5rem] w-14" src={data.icon} alt="Service icon 1" width={72} height={72} />
                            <div className="absolute -z-[1] size-9 -top-3 -left-4 rounded-full bg-slate-200/50 duration-500 group-hover:top-9 group-hover:left-12"></div>
                            <div className="absolute -z-[1] size-14 -right-3 -bottom-3 rounded-full bg-slate-200/50 duration-500 group-hover:right-8 group-hover:bottom-7"></div>
                        </div>
                    </div>
                    <div className="lg:basis-9/12 basis-full px-3">
                        <div className="ml-2">
                            <h3 className="lg:text-3xl text-2xl text-base-100 font-semibold mb-4">{data.title}</h3>
                            <p className="text-lg text-base-100 line-clamp-3 group-hover:line-clamp-none duration-1000">{data.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Service() {
    const renderServices = () => {
        return services.map((service, index) => (
            <ServiceCard key={index.toString()} data={service} />
        ))
    }

    return (
        <Layout.Section id="service" className="md:pt-40 md:pb-36 pt-14 pb-11 bg-base-200" data-theme="dark">
            <div className="container mx-auto">
                <div className="px-3">
                    <ContentBox title="What I Offer" subTitle="Service" className="text-center" />
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                        {renderServices()}
                    </div>
                </div>
            </div>
        </Layout.Section>
    )
}
