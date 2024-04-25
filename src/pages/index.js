import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
    >
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
        <section className="container padding-vert--xl">
          <div className="row">
            <div className="col col--6">
              <Heading as="h2">Bienvenue sur le guide Jerico !</Heading>
              <p>
              La Formation Jerico est votre ressource incontournable pour maîtriser toutes les
                fonctionnalités de votre site internet.
              </p>
              <p>
                Vous y trouverez des tutoriels détaillés, des guides, des exemples, ainsi que des astuces pour exploiter pleinement les capacités de
                Jerico.
              </p>
              <div> <Link
            className="button button--secondary button--lg  hover:bg-green-500"
            to="/docs/category/découvrir-jerico"
            style={{ marginLeft: "10px", marginRight: "10px" }} 
          >
            Formation Jerico
          </Link></div>
              
            </div>
            
            <div className="col col--6">
              <img
                src="/img/logo-meosis.svg"
                alt="Bienvenue"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>
        </section>
        <section
          style={{
            position: "relative",
            overflow: "hidden",
            width: "100%",
            height: "50vh", // Ajustez la hauteur selon vos besoins
            background: "transparent",
          }}
        >
          <video
            autoPlay
            loop
            muted
            style={{
              position: "fixe",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: "-1",
            }}
          >
            <source
              src="https://cdn.cluster014.hosting.meosis.fr/videos/meosis.fr/new-video-meosis.mp4"
              type="video/mp4"
            />
          </video>
        </section>
      </main>
    </Layout>
  );
}
