import logo from "../assets/getlinked.png";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="bg-[#100b20] py-10 ">
      <div className="w-[90%] m-auto flex flex-col gap-6">
        {/* top */}
        <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
          <div className="flex flex-col gap-5">
            <img src={logo} alt="" width={120} />
            <p className="text-white text-xs w-[90%] tracking-tight">
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>

            <p className="text-white text-xs mt-8 flex gap-2">
              Terms of Use <span className="w-[2px] h-full bg-[#D434FE]"></span>
              <p>Privacy Policy</p>
            </p>
          </div>

          {/* second nav */}
          <div className="flex flex-col gap-5 text-xs text-white">
            <h3 className="t font-bold text-[15px] text-[#D434FE]">
              Useful Links
            </h3>
            <p className="cursor-pointer">Overview</p>
            <p className="cursor-pointer">Timeline</p>
            <p className="cursor-pointer">FAQs</p>
            <p className="cursor-pointer">Register</p>
            <p className="flex gap-2 font-semibold text-[14px] text-[#D434FE] sm:mb-[30px] lg:mb-0">
              Follow us{" "}
              <span className="text-white flex gap-3 ml-[20px] text-[20px]">
                <p>
                  <AiOutlineInstagram />
                </p>
                <p>
                  <FaXTwitter />
                </p>
                <p>
                  <BiLogoFacebook />
                </p>
                <p>
                  <BiLogoLinkedin />
                </p>
              </span>
            </p>
          </div>

          {/* third nav */}
          <div className="flex flex-col gap-5 text-xs text-white">
            <h3 className="font-bold text-[15px] text-[#D434FE] ">
              Contact Us
            </h3>
            <p className="flex font-semibold text-[15px] items-center">
              <FiPhoneCall />{" "}
              <span className="ml-[20px] font-light text-sm">
                +234 6707653444
              </span>
            </p>
            <p className="flex font-semibold text-[15px]">
              <FaLocationDot />{" "}
              <span className="ml-[20px] font-light  text-sm/10">
                27,Alara Street <br />
                Yaba 100012 <br />
                Lagos State
              </span>
            </p>
          </div>
        </div>

        {/* bottom */}
        <div className="grid mt-3 place-items-center text-white text-xs">
          All rights reserved. © getlinked Ltd.
        </div>
      </div>
    </div>
  );
};

export default Footer;
