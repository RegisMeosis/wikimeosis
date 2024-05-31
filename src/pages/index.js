import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HeroSection from "../components/HeroSection"; 
import IntroductionSection from "../components/IntroductionSection";
import FeaturesSection from "../components/FeaturesSection";
import TutorialsSection from "../components/TutorialsSection";
import FAQSection from "../components/FAQSection";



function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Accueil wiki ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HeroSection />
        <IntroductionSection />
        <FeaturesSection />
        <TutorialsSection />
        <FAQSection />
      </main>
    </Layout>
  );
}
