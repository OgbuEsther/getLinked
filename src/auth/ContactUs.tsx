import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

const baseUrl = `https://backend.getlinked.ai`;

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState(0);
  const [first_name, setFirst_name] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = async (e: any) => {
    e.preventDefault();
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
        console.log(res);
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

  return (
    <main className="w-[100%] flex">
      <div className="relative flex-1 hidden items-center justify-center h-screen bg-gray-900 lg:flex">
        <div className="relative z-10 w-full max-w-md">
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-100">
            get<span className="text-[#D434FE]">Linked</span>
          </span>
          <div className=" mt-16 space-y-3">
            <h3 className="text-white text-3xl font-bold">
              Start growing your business quickly
            </h3>
            <p className="text-gray-300">
              Create an account and get access to all features for 30-days, No
              credit card required.
            </p>
          </div>
        </div>
        <div
          className="absolute inset-0 my-auto h-[500px]"
          style={{
            background: "linear-gradient(#150E28, #150E28, #2d2150",
            filter: "blur(118px)",
          }}
        ></div>
      </div>
      <div className="flex-1 flex items-center justify-center h-screen">
        <div className="w-full max-w-md space-y-8 px-4 bg-white text-gray-600 sm:px-0">
          <div className="">
            <img
              src="https://floatui.com/logo.svg"
              width={150}
              className="lg:hidden"
            />
            <div className="mt-5 space-y-2">
              <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                Questions or need assistance <br />
                Let us know about it{" "}
              </h3>
              <p className="">Already have an account? </p>
            </div>
          </div>

          <div className="relative">
            <span className="block w-full h-px bg-gray-300"></span>
            <p className="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto">
              Or continue with
            </p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div>
              <label className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                <input
                  onChange={(e) => {
                    setFirst_name(e.target.value);
                  }}
                  type="text"
                  id="first_name"
                  className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-[200px] h-[50px] "
                  placeholder="first_name"
                />

                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
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
                  className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-[200px] h-[50px] "
                  placeholder="phone_number"
                />

                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
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
                  className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-[200px] h-[50px] "
                  placeholder="Mail"
                />

                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
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
                  className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 w-[200px] h-[100px] "
                  placeholder="Message"
                />

                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                  Message
                </span>
              </label>
            </div>

            <button
              onClick={sendMessage}
              className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
            >
              Create account
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ContactUs;
