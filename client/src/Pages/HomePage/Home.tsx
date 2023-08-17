import CallToAction from "./components/CallToAction";
import homeHeroImage from "../../Assets/images/homeHeroImage.png";

const HomePage = () => {
  return (
    <div
      className="
    bg-backgroundBrown
    h-screen
    grid
    grid-cols-2
    ">
      <div className="flex justify-center items-center">
        <CallToAction />
      </div>
      <div className="grid grid-cols-3">
        <div className="flex col-span-2 justify-end items-center">
          <div
            className="bg-darkBrownBackground flex items-end"
            style={{ height: "460px", width: "360px" }}>
            <div className="flex justify-end items-center ">
              <div
                className=" flex items-end h-4/6 "
                style={{
                  backgroundImage: `url(${homeHeroImage})`,
                  backgroundSize: "cover",
                  height: "450px",
                  width: "350px"
                }}>
                <div
                  className="border-8 border-darkBrownBackground"
                  style={{ height: "430px", width: "340px" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
