import phone_img from "../../assets/images/iPhone.png";
import ipad_img from "../../assets/images/Ipad.png";
const Banner = () => {
  return (
    <div className="mt-10">
      <div className="w-[90%] mx-auto text-center">
        <h1 className="text-7xl">Browse everything.</h1>
      </div>
      <div className="w-[90%] max-w-6xl mx-auto relative mt-10 ">
        <div className="w-full bg-[#8E9C78] h-[80%] rounded-4xl absolute bottom-0"></div>
        <img
          src={phone_img}
          className="mx-auto w-[80%] max-w-100 z-10 relative md:hidden"
        />
        <img
          src={ipad_img}
          className="hidden md:block mx-auto w-[80%] z-10 relative"
        />
      </div>
    </div>
  );
};

export default Banner;
