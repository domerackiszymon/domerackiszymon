import styles from "../../styles/Home.module.sass";
import BackgroundGrid from "./BackgroundGrid";

const HomePage = (props) => {
  return (
    <>
      <BackgroundGrid />
      <div className={styles.index__homeSvg1}></div>
      <div className={styles.index__homeSvg2}></div>
      <h1 className={styles.index__homeTitle}>Szymon Domeracki</h1>
      <main className={styles.index__homeMain}>
        <p className={styles.index__homeText}>Site under construction</p>
      </main>
      <h2 className={styles.index__homeMotto}>Aspiring Front-End Developer</h2>
    </>
  );
};

export default HomePage;
