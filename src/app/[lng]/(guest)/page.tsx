
import { Layout } from "@components/ui";
import { useTranslation } from "@lib/i18n";
import { BasePageProps } from "@/types/base";
import { fallbackLng, languages } from "@lib/i18n/settings";
import { Header, SingleSlider, IntroFeature, About, Work, Skills, FunFact, Award, Experience, Education, Service, Pricing, Testimonial, Brand, Contact, Blog, Footer } from "@components/home";

// CSS
import "@styles/home.css";

export default async function page({ params: { lng } }: BasePageProps) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { i18n } = await useTranslation(lng, 'home')

  return (
    <Layout className="bg-[url('/images/slider/body-bg.jpg')] dark:bg-none overflow-x-hidden">
      <Header lng={lng} />
      <SingleSlider i18n={i18n} lng={lng} />
      <IntroFeature />
      <About />
      <Work />
      <FunFact />
      <Award />
      <Experience />
      <Education />
      <Skills />
      <Service />
      <Pricing />
      <Testimonial />
      <Brand />
      <Contact />
      <Blog />
      <Footer />
    </Layout>
  );
}
