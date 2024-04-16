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
      className={clsx("hero hero--primary", styles.heroBanner)}
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100vh", // Hauteur de l'écran
        background: "transparent", // Couleur de fond transparente
      }}
    >
      {/* Vidéo en arrière-plan */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
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
        {/* Ajoutez d'autres sources vidéo si nécessaire (webm, ogg, etc.) */}
      </video>

      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/category/découvrir-jerico"
            style={{ marginLeft: "10px", marginRight: "10px" }} // Ajoute de la marge à gauche et à droite
          >
            Vitrine
          </Link>
        </div>
      </div>
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
              <Heading as="h2">Bienvenue sur {siteConfig.title}!</Heading>
              <p>
                Le guide Jerico est votre ressource incontournable pour maîtriser toutes les
                fonctionnalités de notre plateforme.
              </p>
              <p>
                Vous y trouverez des tutoriels détaillés, des guides pratiques, des exemples
                de code, ainsi que des astuces pour exploiter pleinement les capacités de
                Jerico.
              </p>
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
      </main>
    </Layout>
  );
}
