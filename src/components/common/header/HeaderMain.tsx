import { MenuItemProps } from "@/types/props";
import { Image, Layout, Menu } from "@components/ui";
import DefaultLogoImg from "/public/images/default-logo.png";

export default function HeaderMain() {
    const menuItems: Array<MenuItemProps> = [
        {
            label: (
                <>
                    Home
                </>
            ),
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            ),
            key: "item-1",
        },
        {
            label: (
                <>
                    Work
                    <span className="badge badge-sm badge-warning">NEW</span>
                </>
            ),
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            key: "item-2",
            isGroup: true,
            children: [
                { label: "Submenu 1", key: "item-2-1" },
                { label: "Submenu 2", key: "item-2-2" }
            ]
        }
    ]

    return (
        <div className="container mx-auto flex flex-row items-center">
            <div className="basis-2/12">
                <Image src={DefaultLogoImg} alt="Header Logo" priority />
            </div>
            <div className="basis-10/12 flex flex-row items-center justify-end gap-4">
                <Layout.Nav>
                    <Menu items={menuItems} collapsible className="w-[200px]" />
                </Layout.Nav>
                <Menu items={[{
                    key: "item-1",
                    icon: (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    ),
                    tooltip: {
                        content: "Info",
                        position: "left",
                    },
                }]} className="bg-base-200 rounded-box" />
                <div>

                    <button className="btn btn-primary btn-outline">DOWNLOAD CV</button>
                </div>
            </div>
        </div>
    )
}
