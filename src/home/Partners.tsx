import liberty from "../assets/Liberty.png";
import win from "../assets/Liberty(2).png";
import imf from "../assets/wisper.png";
import winwise from "../assets/Winwise.png";
import pb from "../assets/Paybox.png";
import vp from "../assets/VizualPlus.png";

const Partners = () => {
  return (
    <div className=" pt-36 pb-20 bg-[#150e29] border-b border-slate-800">
      <div className="w-[90%] m-auto ">
        <h1 className="text-3xl tracking-tighter leading-1 text-white text-center font-extrabold max-md:text-center max-md:text-2xl">
          Partners and Sponsors
        </h1>
        <p className="text-center py-4 text-white text-sm w-[40%] m-auto max-md:w-[90%] max-md:text-xs">
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
        <div className="w-full grid place-items-center py-10 border mt-6 border-[var(--accent-color)] rounded">
          <div className="w-[50%] grid py-10 grid-cols-3 gap-4 place-items-center max-md:w-[80%]">
            <div className="">
              <img
                src={liberty}
                alt=""
                className="object-contain w-36 max-md:w-20"
              />
            </div>
            <div className="">
              <img src={win} alt="" className="object-contain w-30" />
            </div>
            <div className="">
              <img src={winwise} alt="" className="object-contain w-36" />
            </div>
            <div className="">
              <img
                src={imf}
                alt=""
                className="object-contain w-20 max-md:w-12"
              />
            </div>
            <div className="">
              <img src={pb} alt="" className="object-contain " />
            </div>
            <div className="">
              <img src={vp} alt="" className="object-contain w-40" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
