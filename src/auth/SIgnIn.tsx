import React, { useEffect } from "react";
import girl from "../assets/auth.png";
import axios from "axios";
import Swal from "sweetalert2";

const baseUrl = `https://backend.getlinked.ai`;

const SIgnIn = () => {
  //setting states
  const [category, setCategory] = React.useState();
  const [categories, setCategories] = React.useState([]);
  const [email, setEmail] = React.useState();
  const [phone_number, setPhone_number] = React.useState();
  const [team_name, setTeam_name] = React.useState();
  const [group_size, setGroup_size] = React.useState(0);
  const [categoryNum, setCategoryNum] = React.useState(0);
  const [project_topic, setProject_topic] = React.useState();
  const [privacy_poclicy_accepted, setPrivacy_poclicy_accepted] =
    React.useState(true);

  //api consumption (post and get)
  useEffect(() => {
    axios
      .get(`${baseUrl}/hackathon/categories-list`)
      .then((res) => {
        // console.log(res?.data);
        setCategories(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const registerTeam = async (e: any) => {
    e.preventDefault();
    await axios
      .post(`${baseUrl}/hackathon/registration`, {
        team_name,
        email,
        phone_number,
        group_size,
        category,
        project_topic,
        privacy_poclicy_accepted,
      })
      .then((res) => {
        console.log(res);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Product Uploaded successfully ",
          showConfirmButton: false,
          timer: 2500,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-[#150E28] ">
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt="Night"
              src={girl}
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />

            <div className="hidden lg:relative lg:block lg:p-12">
              <a className="block text-white" href="/">
                <span className="sr-only">Home</span>
              </a>

              <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Welcome to getLinked
              </h2>

              <p className="mt-4 leading-relaxed text-white/90">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
              </p>
            </div>
          </section>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative -mt-16 block lg:hidden">
                <a
                  className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
                  href="/"
                >
                  <span className="sr-only">Home</span>
                </a>

                <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                  Welcome to getLinked
                </h1>

                <p className="mt-4 leading-relaxed text-gray-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
                </p>
              </div>

              <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <div>
                    <label className="block py-3 text-gray-500">
                      Team's Name
                    </label>
                    <div className="flex items-center p-2 border rounded-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-gray-400 w-7 h-7"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <input
                        onChange={(e: any) => {
                          setTeam_name(e.target.value);
                          console.log("this is team name ", team_name);
                        }}
                        placeholder="Enter the name of your group"
                        className="w-full p-1 ml-3 text-gray-500 outline-none bg-transparent"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <div>
                    <label className="block py-3 text-gray-500">Phone</label>
                    <div className="flex items-center p-2 border rounded-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-gray-400 w-7 h-7"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <input
                        onChange={(e: any) => {
                          setPhone_number(e.target.value);
                          console.log("this is phone number", phone_number);
                        }}
                        placeholder="Enter your phone number"
                        className="w-full p-1 ml-3 text-gray-500 outline-none bg-transparent"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <div>
                    <label className="block py-3 text-gray-500">Email</label>
                    <div className="flex items-center p-2 border rounded-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-gray-400 w-7 h-7"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <input
                        onChange={(e: any) => {
                          setEmail(e.target.value);
                          console.log("this is email", email);
                        }}
                        type="email"
                        placeholder="Enter your email address"
                        className="w-full p-1 ml-3 text-gray-500 outline-none bg-transparent"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <div>
                    <label className="block py-3 text-gray-500">
                      Project Topic
                    </label>
                    <div className="flex items-center p-2 border rounded-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-gray-400 w-7 h-7"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <input
                        onChange={(e: any) => {
                          setProject_topic(e.target.value);
                          console.log("this is project topic", project_topic);
                        }}
                        placeholder="What is your group project topic"
                        className="w-full p-1 ml-3 text-gray-500 outline-none bg-transparent"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <div>
                    <label className="block py-3 text-gray-500">Category</label>
                    <div className="flex items-center p-2 border rounded-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-gray-400 w-7 h-7"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>

                      <select
                        className="w-full p-1 ml-3 text-gray-500 outline-none bg-transparent"
                        onChange={(e: any) => {
                          setCategory(e.target.value);
                          console.log("this is category", category);
                        }}
                        name=""
                        id=""
                      >
                        <option value="">Select your category</option>

                        {categories?.map((el: any) => (
                          <option key={el?.id}>{el?.id}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <div>
                    <label className="block py-3 text-gray-500">
                      Group Size
                    </label>
                    <div className="flex items-center p-2 border rounded-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-gray-400 w-7 h-7"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <select
                        className="w-full p-1 ml-3 text-gray-500 outline-none bg-transparent"
                        onChange={(e: any) => {
                          setGroup_size(e.target.value);
                          console.log("this is group size", group_size);
                        }}
                        name=""
                        id=""
                      >
                        <option value={1}>Select</option>
                        <option value={2}>1</option>
                        <option value={3}>2</option>
                        <option value={4}>3</option>
                        <option value={5}>4</option>
                        <option value={6}>5</option>
                        {/* <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option> */}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="col-span-6">
                  <label className="flex gap-4">
                    <input
                      onChange={(e: any) => {
                        setPrivacy_poclicy_accepted(e.target.value);
                        console.log(
                          "setPrivacy_poclicy_accepted",
                          privacy_poclicy_accepted
                        );
                      }}
                      type="checkbox"
                      name="marketing_accept"
                      className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                    />

                    <span className="text-sm text-gray-700">
                      I want to receive emails about events, product updates and
                      company announcements.
                    </span>
                  </label>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    onClick={registerTeam}
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                  >
                    Create an account
                  </button>

                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Already have an account?
                    <a href="#" className="text-gray-700 underline">
                      Log in
                    </a>
                    .
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default SIgnIn;
