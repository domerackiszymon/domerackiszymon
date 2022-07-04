import { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import anime from "animejs";

import styles from "../../styles/Home.module.sass";
import BackgroundGrid from "../components/BackgroundGrid";

const loading = () => {
  return new Promise<void>((resolve) => setTimeout(resolve, 3000));
};

const Fullpage = () => {
  const links = ["Home", "Projects", "Skills", "Contact"];
  const [activeLink, setActiveLink] = useState(0);

  return (
    <div className={styles.index} onLoad={async () => await loading()}>
      <nav className={styles.navBar}>
        <div className={styles.navBar__logo}></div>
        <div className={styles.navBar__linkWrap}>
          {links.map((link, index) => (
            <a
              href={`#${link.toLowerCase()}`}
              className={
                index === activeLink
                  ? styles.navBar__activeLink
                  : styles.navBar__link
              }
              key={index}
            >
              {link}
            </a>
          ))}
        </div>
        <div className={styles.navBar__logoWrap}>
          <a>
            <FontAwesomeIcon
              icon={faDiscord}
              inverse
              className={styles.navBar__logoLink}
            />
            <div className={styles.navBar__discordHover}>Domer#3697</div>
          </a>
          <a
            href="https://github.com/domerackiszymon"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              inverse
              className={styles.navBar__logoLink}
            />
          </a>
          <a href="#">
            <FontAwesomeIcon
              icon={faLinkedin}
              inverse
              className={styles.navBar__logoLink}
            />
            <div className={styles.navBar__linkedInHover}>Profile WIP</div>
          </a>
        </div>
      </nav>
      {/* <Fullpage /> */}
      <ReactFullpage
        autoScrolling={true}
        scrollBar={false}
        scrollingSpeed={600}
        anchors={["home", "projects", "skills", "contact"]}
        // lazyLoading={true}
        dragAndMove="fingersonly"
        menu=".navBar__linkWrap"
        onLeave={(origin, destination, direction) =>
          setActiveLink(destination.index)
        }
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <BackgroundGrid />
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
