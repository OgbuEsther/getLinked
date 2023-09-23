import bg from "../assets/bg.png";
import trophy from "../assets/trophy.png";
import rewards from "../assets/Rewards.png";

const Prizes = () => {
  return (
    <div className="bg-[#120b29] py-20">
      <div className="w-[90%] m-auto grid grid-cols-2 max-md:grid-cols-1">
        <div className=" flex flex-col justify-end max-md:items-center">
          <img src={trophy} alt="" className="w-[75%] " />
        </div>
        <div>
          <h2 className="text-3xl tracking-tighter leading-1 text-white font-extrabold max-md:text-center max-md:text-2xl">
            Prizes and <br />{" "}
            <span className="text-[var(--accent-color)]">Rewards</span>
          </h2>
          <p className="py-5 text-white w-[60%]  max-md:w-full max-md:text-center max-md:text-sm">
            Highlight of the prizes or rewards for winners and for participants.
          </p>

          <div className="pt-16 flex flex-col max-md:items-center">
            <img src={rewards} alt="" className="w-[80%] " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
