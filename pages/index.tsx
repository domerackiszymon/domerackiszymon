import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.sass";

export default function Home() {
  return (
    <>
      <Head>
        <title>Domeracki Szymon</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={styles.index}>
        <h1 className={styles.text}>Strona w budowie</h1>
      </div>
    </>
  );
}

// https://github.com/DomerZezy/RanDomeRizer/releases/download/v1.4.0-stable/randomerizer-1.4.0.zip
