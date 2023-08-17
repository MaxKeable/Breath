import CallToAction from "./components/CallToAction";
import homeHeroImage from "../../Assets/images/newHeroImage.png";
import useMediaQuery from "../../Hooks/useMediaQuery";

const HomePage = () => {
  const isLargeScreen = useMediaQuery("(min-width: 1200px)");

  return (
    <div
      className="
    bg-backgroundBrown
    h-screen
    grid
    lg:grid-cols-2
    ">
      <div className="flex justify-center items-center mx-5 sm:mx-0">
        <div className="relative flex ">
          <CallToAction />
        </div>
      </div>
      <div className="grid grid-cols-3">
        {isLargeScreen && (
          <div className="flex md:col-span-2 justify-end items-center">
            <img
              className="h-4/6"
              src={homeHeroImage}
              alt="person doing yoga on a mountain"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
