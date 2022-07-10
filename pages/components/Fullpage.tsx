import { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import styles from "../../styles/Home.module.sass";
import HomePage from "./HomePage";
import NavBar from "./NavBar";

const loading = () => {
  return new Promise<void>((resolve) => setTimeout(resolve, 3000));
};

const Fullpage = () => {
  const links = ["Home", "Projects", "Skills", "Contact"];
  const [activeLink, setActiveLink] = useState(0);

  return (
    <div className={styles.index} onLoad={async () => await loading()}>
      <NavBar activeLink={activeLink} />
      <ReactFullpage
        autoScrolling={true}
        scrollBar={false}
        scrollingSpeed={600}
        anchors={["home", "projects", "skills", "contact"]}
        dragAndMove="fingersonly"
        menu=".navBar__linkWrap"
        onLeave={(origin, destination, direction) =>
          setActiveLink(destination.index)
        }
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <HomePage />
              </div>
              <div className="section">
                <div className={styles.index__homeSvg1}></div>
                <div className={styles.index__homeSvg2}></div>
                <h1 className={styles.index__homeTitle}>Szymon Domeracki</h1>
                <main className={styles.index__homeMain}>
                  <p className={styles.index__homeText}>
                    Site under construction
                  </p>
                </main>
                <h2 className={styles.index__homeMotto}>
                  Aspiring Front-End Developer
                </h2>
              </div>
              <div className="section">
                <div className={styles.index__homeSvg1}></div>
                <div className={styles.index__homeSvg2}></div>
                <h1 className={styles.index__homeTitle}>Szymon Domeracki</h1>
                <main className={styles.index__homeMain}>
                  <p className={styles.index__homeText}>
                    Site under construction
                  </p>
                </main>
                <h2 className={styles.index__homeMotto}>
                  Aspiring Front-End Developer
                </h2>
              </div>
              <div className="section">
                <div className={styles.index__homeSvg1}></div>
                <div className={styles.index__homeSvg2}></div>
                <h1 className={styles.index__homeTitle}>Szymon Domeracki</h1>
                <main className={styles.index__homeMain}>
                  <p className={styles.index__homeText}>
                    Site under construction
                  </p>
                </main>
                <h2 className={styles.index__homeMotto}>
                  Aspiring Front-End Developer
                </h2>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
};

export default Fullpage;
