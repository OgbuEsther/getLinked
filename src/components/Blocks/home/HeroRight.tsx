import star from "../../../assets/bulb.svg";
import emoji from "../../../assets/emoji.png";
import bulb from "../../../assets/bulb.svg";
import Button from "../../props/Button";
import Countdown from "../../props/CountdownTimer";

const HeroRight = () => {
  // Set the target time here (e.g., 24 hours from now)
  const targetTime = new Date();
  targetTime.setHours(targetTime.getHours() + 24);

  return (
    <div>
      <div className="w-full h-full flex flex-col justify-center ">
        <h2 className="relative text-7xl tracking-tighter leading-1 font-extrabold text-white gap-1 flex flex-col max-lg:text-3xl max-md:gap-0 max-md:text-center">
          getlinked Tech <br />
          <span className="flex items-center gap-2 max-md:w-full max-md:justify-center ">
            Hackathon
            <p className="text-[var(--accent-color)]">1.0</p>{" "}
            <img src={emoji} alt="" className="w-[120px] max-md:w-[50px]" />
          </span>
          <img
            src={bulb}
            alt=""
            className="w-[35px] absolute right-[160px] top-[-30px] max-md:w-[18px] max-md:right-[100px] max-md:top-[-15px]"
          />
        </h2>
        <p className="text-[#f5f5f5] w-[70%] my-3 text-base max-md:text-center max-lg:w-[80%] max-md:m-auto max-md:my-3">
          Participate in getlinked tech Hackathon 2023 stand a chance to win a
          Big prize
        </p>

        <div className="mt-10  max-md:w-full max-md:grid max-md:place-items-center">
          <Button
            title="register"
            path="auth"
            padding="py-[13px] px-10 text-[17px]"
          />
        </div>

        {/*  countdown */}
        <div className="mt-14 text-white text-4xl font-helvetica max-md:w-full max-md:grid max-md:place-items-center">
          <Countdown targetTime={targetTime} />
        </div>
      </div>
    </div>
  );
};

export default HeroRight;
