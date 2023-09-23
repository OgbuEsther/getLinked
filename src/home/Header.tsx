import { useState } from "react";
import logo from "../assets/getlinked.png";
import close from "../assets/close.svg";
import flare from "../assets/Purple-Lens-Flare.svg";
import navIcon from "../assets/navIcon.svg";
import Button from "../components/props/Button";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState<boolean>(false);

  const navigation = [
    { title: "Timeline", path: "#timeline" },
    { title: "Overview", path: "#overview" },
    { title: "FAQs", path: "#faq" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <header className="relative h-[10vh] bg-[var(--primary-color)] border-b border-slate-800">
      {/* flare */}
      <div>
        <img
          src={flare}
          alt=""
          style={{
            position: "absolute",
            top: -250,
            left: -200,
          }}
        />
      </div>
      <div className="w-[90%] flex justify-between items-center  m-auto h-full ">
        {/* logo */}
        <img src={logo} alt="logo" loading="lazy" width={120} />

        {/* navs s */}
        <nav>
          <div
            className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              show ? "block" : "hidden"
            }`}
          >
            <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
              {navigation.map((item, idx) => {
                return (
                  <li key={idx} className="text-gray-700 ">
                    <a
                      href={item.path}
                      className="block text-white text-sm cursor-pointer"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}

              <div className="items-center gap-x-6 md:flex md:space-y-0">
                <Button title="register" path="auth" padding="py-[8px] px-6 " />
              </div>
            </ul>
          </div>
        </nav>
        {show ? (
          <div className="w-full h-screen top-0 left-0 z-20 fixed flex items-center justify-center bg-[var(--primary-color)]">
            <div className="w-[90%] h-[80%] ">
              <div className="w-full flex justify-end">
                <img
                  src={close}
                  alt="close"
                  loading="lazy"
                  onClick={() => {
                    setShow(!show);
                  }}
                  className="cursor-pointer"
                />
              </div>

              <nav className="mt-8">
                {navigation.map((item, idx) => {
                  return (
                    <nav key={idx}>
                      <Link
                        to={item.path}
                        className="block py-2 text-white text-base font-medium cursor-pointer"
                      >
                        {item.title}
                      </Link>
                    </nav>
                  );
                })}
              </nav>
              <NavLink to="auth">
                <button
                  style={{
                    background:
                      "linear-gradient(270deg, #903AFF 0%, #D434FE 56%, #FF26B9 100%, #FE34B9 100%)",
                  }}
                  className="mt-8 block py-3 px-9 text-base  text-center text-white hover:text-white rounded-[4px] shadow md:inline"
                >
                  Register
                </button>
              </NavLink>
            </div>
          </div>
        ) : null}

        <div className="md:hidden">
          <img
            src={navIcon}
            alt="nav"
            onClick={() => {
              setShow(!show);
            }}
            className="cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
