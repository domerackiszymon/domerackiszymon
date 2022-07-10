import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import styles from "./style/NavBar.module.sass";

const NavBar = (props) => {
  const links = ["Home", "Projects", "Skills", "Contact"];
  const { activeLink } = props;

  return (
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
  );
};

export default NavBar;
