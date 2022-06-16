import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import anime from "animejs";

import styles from "../styles/Home.module.sass";
import {
  faDiscord,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import BackgroundGrid from "./components/BackgroundGrid";

const Home = () => {
  // const discordAnim = new anime({});

  return (
    <>
      <Head>
        <title>Domeracki Szymon</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className={styles.index}>
        <BackgroundGrid />
        <nav className={styles.navBar}>
          <div className={styles.navBar__logo}></div>
          <div className={styles.navBar__linkWrap}>
            <a href="#" className={styles.navBar__activeLink}>
              Home
            </a>
            <a href="#" className={styles.navBar__link}>
              About
            </a>
            <a href="#" className={styles.navBar__link}>
              Skills
            </a>
            <a href="#" className={styles.navBar__link}>
              Projects
            </a>
            <a href="#" className={styles.navBar__link}>
              Contact
            </a>
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

        <div className={styles.index__home}>
          <div className={styles.index__homeSvg1}></div>
          <div className={styles.index__homeSvg2}></div>
          <h1 className={styles.index__homeTitle}>Szymon Domeracki</h1>
          <main className={styles.index__homeMain}>
            <p className={styles.index__homeText}>Site under construction</p>
          </main>
          <h2 className={styles.index__homeMotto}>
            Aspiring Front-End Developer
          </h2>
        </div>
      </div>
    </>
  );
};

export default Home;

// https://github.com/DomerZezy/RanDomeRizer/releases/download/v1.4.0-stable/randomerizer-1.4.0.zip
