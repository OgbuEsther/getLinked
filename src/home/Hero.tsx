import line from "../assets/line.svg";
import HeroImg from "../components/blocks/home/HeroImg";
import HeroRight from "../components/blocks/home/HeroRight";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="w-full min-h-[90vh] ">
      <div className="w-[90%] m-auto">
        {/* top */}
        <div className="w-full flex justify-end mt-6 relative">
          <em className="text-white font-semibold text-2xl max-md:text-base">
            <Typewriter
              options={{
                loop: false,
              }}
              onInit={(typewriter: any) => {
                typewriter
                  .typeString("Igniting a Revolution in HR Innovation")
                  .pauseFor(1000)
                  .start();
              }}
            />
          </em>
          <img
            src={line}
            alt=""
            loading="lazy"
            className="absolute -bottom-4 max-md:h-[10px]"
          />
        </div>

        {/* bottom */}
        <div className="w-full h-full  mt-6 grid grid-cols-2 max-md:grid-cols-1 max-md:mt-8 ">
          <HeroRight />
          <HeroImg />
        </div>
      </div>
      <hr className="border-slate-800 h-full" />
    </div>
  );
};

export default Hero;
