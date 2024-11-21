import Image from "next/image";
import { Layout } from "@components/ui";
import Menu from "@components/dashboard/Menu";


export default function Sidebar() {
    return (
        <Layout.Sidebar className="flex-shrink-0 w-full max-w-64">
            <div>
                <Image src="/images/default-logo.png" alt="Logo Image" width={320} height={64} />
                <Menu />
            </div>
        </Layout.Sidebar>
    )
}
