import { useEffect } from "react";
import { applySeo } from "./lib/applySeo";
import { siteContent } from "./content/siteContent";
import { Intro } from "./components/Intro";
import { About } from "./components/About";
import { Projects } from "./components/Projects";

export default function App() {
  useEffect(() => {
    applySeo(siteContent.seo);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <main id="main-content" className="page">
        <div className="container container--page">
          <Intro content={siteContent} />
          <About content={siteContent} />
          <Projects content={siteContent} />
        </div>
      </main>
    </>
  );
}
