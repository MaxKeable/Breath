import typography from "../../../Assets/images/typography.svg";

const CallToAction = () => {
  return (
    <div className="flex flex-col items-center">
      <img
        className="a"
        src={typography}
        alt="the words find harmony in nature"
      />
      <button className="border-2 border-goldButtonBorder hover:bg-goldButtonBorder px-7 py-1 rounded-lg font-playfair text-lightText">
        EXPLORE OUR RETREATS
      </button>
    </div>
  );
};

export default CallToAction;
