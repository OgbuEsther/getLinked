import check from "../assets/check.svg";
import secure from "../assets/secure.png";

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#120b29] py-20">
      <div className="w-[90%] m-auto grid grid-cols-2 max-md:grid-cols-1">
        <div>
          <h2 className="text-3xl tracking-tighter leading-1 text-white font-extrabold max-md:text-center max-md:text-2xl">
            Privacy policy and <br />{" "}
            <span className="text-[var(--accent-color)]">Terms</span>
          </h2>
          <p className="py-5 text-gray-300 text-xs w-[60%]  max-md:w-full max-md:text-center">
            Last updated on September 12, 2023
          </p>
          <p className="py-5 text-white text-xs w-[60%]  max-md:w-full max-md:text-center">
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </p>
          {/* box */}
          <div className="py-8 px-10 border rounded border-[var(--accent-color)] w-[75%] shadow-md max-md:m-auto max-md:w-[95%]">
            <p className="text-gray-300 text-xs leading-loose max-md:text-center">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>

            <h3 className="pt-4 text-[var(--accent-color)] tracking-tighter font-semibold">
              Licensing Policy
            </h3>
            <p className="pt-2 text-white text-xs w-[60%]  max-md:w-full ">
              Here are terms of our Standard License:
            </p>
            <div className="flex gap-3 py-3">
              <img src={check} alt="" />
              <p className="text-gray-300 text-xs leading-loose">
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </p>
            </div>
            <div className="flex gap-3 py-3">
              <img src={check} alt="" />
              <p className="text-gray-300 text-xs leading-loose">
                You are licensed to use the item available at any free source
                sites, for your project developement
              </p>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className=" flex flex-col justify-end max-md:items-center max-md:pt-12">
          <img src={secure} alt="" className="w-[75%] " />
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
