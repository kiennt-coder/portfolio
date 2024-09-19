import { useTranslation } from "@/lib/i18n";
import { fallbackLng, languages } from "@/lib/i18n/settings";
import Home from "@components/Home";

export default async function page({ params: { lng } }: Readonly<{
  params: { lng: string }
}>) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng, 'home')

  return (
    <div className="bg-white dark:bg-[#0a0a0a]">
      <h1 className="text-main">{t('hello')}</h1>
      <Home lng={lng} />
    </div>
  );
}
