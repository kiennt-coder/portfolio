import Link from "next/link"
import { useTranslation } from "@/lib/i18n"
import { BasePageProps } from "@/types/base"
import { Trans } from "react-i18next/TransWithoutContext"
import { FacebookFilled, GoogleOutlined } from "@/components/icons"


export default async function page({ params: { lng } }: BasePageProps) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { t } = await useTranslation(lng, "sign-up")

    return (
        <div className="w-full max-w-96 flex flex-col items-stretch md:gap-12 gap-6">
            <div>
                <p className="text-3xl font-semibold mb-7">
                    <Trans i18nKey="title" t={t}>
                        Welcome back 👋
                    </Trans>
                </p>
                <p className="text-xl">
                    <Trans i18nKey="description" t={t}>
                        Today is a new day. It&apos;s your day. You shape it. Sign in to start managing your projects.
                    </Trans>
                </p>
            </div>
            <div>
                <form>
                    <div className="flex flex-col items-stretch justify-start gap-6">
                        <label className="form-control w-full">
                            <div className="label pt-0">
                                <span className="label-text text-base">{t("form.username.label")}</span>
                            </div>
                            <input type="text" placeholder={t("form.username.placeholder")} className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label pt-0">
                                <span className="label-text text-base">{t("form.email.label")}</span>
                            </div>
                            <input type="text" placeholder={t("form.email.placeholder")} className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label pt-0">
                                <span className="label-text text-base">{t("form.password.label")}</span>
                            </div>
                            <input type="text" placeholder={t("form.password.placeholder")} className="input input-bordered w-full" />
                        </label>
                        <p className="text-end">
                            <Link href="/quen-mat-khau" className="text-blue-500 hover:underline">{t("forgot-password")}</Link>
                        </p>
                        <button className="btn btn-primary text-lg font-semibold text-base-100">{t("form.submit")}</button>
                    </div>
                </form>
            </div>
            <div className="flex flex-col items-stretch justify-start gap-4">
                <div className="divider">
                    <span>
                        <Trans i18nKey="or-signin-with.label" t={t} components={{
                            1: <span className="lg:hidden inline"></span>
                        }}>
                            Or <span className="lg:hidden inline">sign in with</span>
                        </Trans>
                    </span>
                </div>
                <div className="flex flex-row flex-wrap lg:gap-4 gap-0">
                    <div className="lg:basis-full basis-1/2 px-2">
                        <button className="w-full btn text-base font-normal lg:justify-start lg:pl-20 sm:px-4 px-0 gap-3">
                            <span>
                                <GoogleOutlined />
                            </span>
                            <p>
                                <span className="hidden lg:inline">{t("or-signin-with.signin-with")}&nbsp;</span>
                                <span>Google</span>
                            </p>
                        </button>
                    </div>
                    <div className="lg:basis-full basis-1/2 px-2">
                        <button className="w-full btn text-base font-normal lg:justify-start lg:pl-20 sm:px-4 px-0 gap-3">
                            <span>
                                <FacebookFilled />
                            </span>
                            <p>
                                <span className="hidden lg:inline">{t("or-signin-with.signin-with")}&nbsp;</span>
                                <span>Facebook</span>
                            </p>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-lg text-center">
                    <Trans i18nKey="not-have-account" t={t} components={{
                        1: <Link href="/dang-nhap" className="text-blue-500 hover:underline"></Link>
                    }}>
                        Do you already have an account?&nbsp;
                        <Link href="/dang-nhap" className="text-blue-500 hover:underline">
                            Sign in
                        </Link>
                    </Trans>
                </p>
            </div>
        </div>
    )
}
