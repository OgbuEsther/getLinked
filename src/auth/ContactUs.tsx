import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import PopUp from "../model/pop-up/pop-up";

import { AiOutlineInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";

const baseUrl = `https://backend.getlinked.ai`;

import { RingLoader } from "react-spinners";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState(0);
  const [first_name, setFirst_name] = useState("");
  const [message, setMessage] = useState("");

  const [showPopUp, setShowPopUp] = useState(false);

  //loading state
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const sendMessage = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      // End the loading state
      setIsLoading(false);
    }, 2000);
    await axios
      .post(
        `${baseUrl}/hackathon/contact-form
      `,
        {
          email,
          phone_number,
          first_name,
          message,
        }
      )
      .then((res) => {
        console.log(res?.data);

        Swal.fire({
          position: "center",
          icon: "success",
          title: "mail sent successfully ",
          showConfirmButton: false,
          timer: 2500,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const NotShow = () => {
    setShowPopUp(false);
  };

  return (
    <div className="h-screen">
      {isLoading ? (
        <div className="fixed inset-0 flex justify-center items-center bg-purple-400">
          <RingLoader color="#150E28" size={60} />
        </div>
      ) : (
        <main className="w-[100%] h-[100vh] flex bg-[#150E28] items-center bg-hero bg-left-top bg-no-repeat">
          <div className="relative flex-1 hidden items-center justify-center h-screen  lg:flex">
            <div className="relative z-10 w-full max-w-md">
              {/* <span className="ml-2 text-xl font-bold tracking-wide text-gray-100">
          get<span className="text-[#D434FE]">Linked</span>
        </span> */}
              <div className=" mt-16 space-y-3">
                <h2 className="text-[#D434FE] text-3xl font-bold">
                  Get in touch
                </h2>
                <p className="text-white font-semibold">
                  Contact <br />
                  information
                </p>
                <br />
                <p className="text-white font-semibold">
                  27 , Alara Street <br />
                  Yaba 100012 <br />
                  Lagos State
                </p>
                <br />
                <p className="text-white font-semibold">
                  Call Us : 07067981819
                </p>
                <br />
                <p className="text-white font-semibold">
                  we are open from Monday-Friday <br /> 08:00am - 05:00pm
                </p>
                <br />
                <br />
                <p className="flex gap-2 font-semibold text-[14px] text-[#D434FE] sm:mb-[30px] lg:mb-0">
                  Share on{" "}
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
            </div>
            <div className="absolute inset-0 my-auto h-[500px]"></div>
          </div>
          <div className="flex-1 flex items-center justify-center sm:h-screen lg:h-[80vh] shadow-lg">
            <div className="w-full max-w-md space-y-8 px-4 p-[30px] bg-transparent text-gray-600 sm:px-0">
              <div className="">
                <div className="mt-5 space-y-2">
                  <h3 className="text-[#D434FE] text-2xl font-bold sm:text-3xl">
                    Questions or need assistance ? Let us know about it{" "}
                  </h3>
                </div>
              </div>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                {/* <div className="relative">
              <label className="sr-only"> Email </label>

              <input
                type="email"
                id="UserEmail"
                placeholder="flea@rhcp.com"
                className="w-full rounded-md border-gray-200 pe-10 shadow-sm sm:text-sm"
              />

              <span className="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.404 14.596A6.5 6.5 0 1116.5 10a1.25 1.25 0 01-2.5 0 4 4 0 10-.571 2.06A2.75 2.75 0 0018 10a8 8 0 10-2.343 5.657.75.75 0 00-1.06-1.06 6.5 6.5 0 01-9.193 0zM10 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </div> */}
                <div>
                  <label className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                    <input
                      onChange={(e) => {
                        setFirst_name(e.target.value);
                      }}
                      type="text"
                      id="first_name"
                      className="peer border-none flex  bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-[100%] h-[50px] text-white "
                      placeholder="first_name"
                    />

                    <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 text-white pl-2 pr-2 p-0.5 text-xs bg-[#150E28] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                      First Name
                    </span>
                  </label>
                </div>
                <div>
                  <label className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                    <input
                      onChange={(e: any) => {
                        setPhone_number(e.target.value);
                      }}
                      type="text"
                      id="phone_number"
                      className="peer text-white border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-[100%] h-[50px] "
                      placeholder="phone_number"
                    />

                    <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 p-0.5 text-xs pl-2 pr-2 bg-[#150E28] text-white  transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                      Phone Number
                    </span>
                  </label>
                </div>
                <div>
                  <label className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                    <input
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      type="text"
                      id="Mail"
                      className="peer text-white border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-[100%] h-[50px] "
                      placeholder="Mail"
                    />

                    <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 p-0.5 text-xs pl-2 pr-2 bg-[#150E28] text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                      Mail
                    </span>
                  </label>
                </div>
                <div>
                  <label className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                    <input
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                      type="text"
                      id="Message"
                      className="peer text-white border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-[100%] h-[100px] "
                      placeholder="Message"
                    />
                    <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 p-0.5 text-xs pl-2 pr-2 bg-[#150E28] text-white transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                      Message
                    </span>
                    {/* <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-transparent pl-2 pr-2 p-0.5 text-xs text-white bg-[#150E28] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                      Message
                    </span> */}
                  </label>
                </div>

                <div className="mb-10 mt-[50px]  sm:text-center sm:mt-[30px] md:mb-16 lg:mb-20">
                  <button
                    onClick={sendMessage}
                    className="inline-flex items-center p-[20px] justify-center w-auto h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 bg-gradient-to-r from-[#D434FE] to-[#903AFF]  hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  >
                    Submit
                  </button>

                  <p className="flex gap-2 font-semibold text-[14px] text-[#D434FE] sm:mb-[30px] lg:mb-0 justify-center items-center mt-[20px] lg:hidden sm:flex">
                    Share on{" "}
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
              </form>
            </div>
          </div>
        </main>
      )}
    </div>
  );
};

export default ContactUs;
