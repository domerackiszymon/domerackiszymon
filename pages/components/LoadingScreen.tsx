import { LoadingNeon } from "../components/Svgs";

const LoadingScreen = () => {
  return (
    <>
      <div className="loadingScreen">
        <p className="loadingScreen__text">DOMER</p>
        <LoadingNeon />
      </div>
    </>
  );
};

export default LoadingScreen;
