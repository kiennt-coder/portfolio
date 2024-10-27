import { Layout } from "@/components";
import { useTranslation } from "@/lib/i18n";
import { BaseLayoutProps } from "@/types/base";
import { Trans } from "react-i18next/TransWithoutContext";


export default async function layout({ children, params: { lng } }: BaseLayoutProps) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { t } = await useTranslation(lng, "translation");

    return (
        <Layout>
            <Layout.Section>
                <div className="lg:h-screen h-auto p-6">
                    <div className="lg:h-full grid lg:grid-cols-2 grid-cols-1 gap-6">
                        <div className="inline-flex flex-col items-stretch justify-start gap-12 lg:order-none order-1">
                            <div className="flex-1 flex items-center justify-center">
                                {children}
                            </div>
                            <div>
                                <p className="text-center uppercase">
                                    <Trans i18nKey="copyright" t={t}>
                                        © 2024 ALL RIGHTS RESERVED BY KIENNT
                                    </Trans>
                                </p>
                            </div>
                        </div>
                        <div className="h-full">
                            <div className="lg:h-full md:h-96 h-48 w-full rounded-3xl overflow-hidden bg-[url('/images/auth/banner.png')] bg-no-repeat bg-cover bg-center"></div>
                        </div>
                    </div>
                </div>
            </Layout.Section>
        </Layout>
    )
}
