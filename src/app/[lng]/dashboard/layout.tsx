import { Layout } from "@/components";
import { BaseLayoutProps } from "@/types/base";
import { Header, Sidebar } from "@/components/dashboard";

export default function layout({ children }: BaseLayoutProps) {
	return (
		<Layout className="h-screen">
			<div className="h-full flex items-stretch justify-start">
				<Sidebar />
				<div className="flex-grow inline-flex flex-col items-stretch justify-start gap-6 overflow-x-hidden overflow-y-auto">
					<Header />
					<Layout.Section>{children}</Layout.Section>
					<Layout.Footer>Footer</Layout.Footer>
				</div>
			</div>
		</Layout>
	);
}
