import logo from "../assets/getlinked.png";

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
            <h3 className="t">Useful Links</h3>
            <p>Overview</p>
            <p>Timeline</p>
            <p>FAQs</p>
            <p>Register</p>
            <p className="flex gap-2 text-[var(--primary-color)]">
              Follow us{" "}
              <span className="text-white flex gap-3">
                <p>instagram</p>
                <p>instagram</p>
                <p>instagram</p>
              </span>
            </p>
          </div>

          {/* third nav */}
          <div className="flex flex-col gap-5 text-xs text-white">
            <h3 className="t">contact us</h3>
            <p>Overview</p>
            <p>Timeline</p>
            <p>FAQs</p>
            <p>Register</p>
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
