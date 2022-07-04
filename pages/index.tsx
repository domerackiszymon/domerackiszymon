import Head from "next/head";
import React from "react";
import LoadingScreen from "./components/LoadingScreen";

import Fullpage from "./components/Fullpage";

const Home = () => {
  // TODO add lazy loading
  return (
    <>
      <Head>
        <title>Domeracki Szymon</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <LoadingScreen />
      <Fullpage />
    </>
  );
};

export default Home;

// https://github.com/DomerZezy/RanDomeRizer/releases/download/v1.4.0-stable/randomerizer-1.4.0.zip
