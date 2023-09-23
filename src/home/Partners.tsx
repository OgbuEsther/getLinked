import partners from "../assets/Partner_and_Sponsors.png";
import flare from "../assets/Purple-Lens-Flare.svg";

const Partners = () => {
  return (
    <div className=" pt-36 pb-20 bg-[#1dod3a] border-b border-slate-800">
      <div className="w-[80%] m-auto ">
        <h1 className="text-3xl tracking-tighter leading-1 text-white text-center font-extrabold max-md:text-center max-md:text-2xl">
          Partners and Sponsors
        </h1>
        <p className="text-center py-4 text-white text-sm w-[40%] m-auto max-md:w-[90%] max-md:text-xs">
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
        <div className="w-full grid place-items-center py-10 border mt-6 border-[var(--accent-color)] rounded">
          <div className=" relative w-[50%] grid py-10  place-items-center max-md:w-[80%]">
            <div>
              <img src={partners} alt="" className="object-contain " />
            </div>
            <img
              src={flare}
              style={{
                position: "absolute",
                top: -300,
                left: -400,
                height: "90vh",
              }}
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
