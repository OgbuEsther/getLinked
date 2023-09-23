import React, { useEffect } from "react";
import girl from "../assets/auth.png";
import axios from "axios";
import Swal from "sweetalert2";
import star from "../assets/star.svg";
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
        // console.log(res);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Team Registration Successfully ",
          showConfirmButton: false,
          timer: 2500,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="">
      <section className="bg-[#150E28]">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-30 items-end lg:col-span-5 lg:h-full xl:col-span-6 bg-hero">
            <img
              alt="Night"
              src={girl}
              className="inset-0 h-full w-full object-cover opacity-80"
            />
            <img className="absolute top-[85%] right-20" src={star} alt="" />
            <img className="absolute top-100 left-10" src={star} alt="" />
            <img className="absolute top-10" src={star} alt="" />
            <img className="absolute top-10" src={star} alt="" />
          </section>

          <main className=" lg:h-screen px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl shadow-2xl p-[70px]">
              <div>
                <h3 className="text-[#D434FE] text-2xl font-bold sm:text-3xl">
                  Register
                </h3>
                <br />
                <br />
                <p className="text-white mb-[20px]">Be part of this movement</p>
                <h3 className="text-2xl text-white font-bold sm:text-3xl">
                  CREATE YOUR ACCOUNT
                </h3>
              </div>
              <form action="#" className="mt-8 grid grid-cols-6 gap-6 ">
                <div className="col-span-6 sm:col-span-3">
                  <div>
                    <label className="block py-3 text-white">Team's Name</label>
                    <div className="flex items-center p-2 border rounded-md">
                      <input
                        onChange={(e: any) => {
                          setTeam_name(e.target.value);
                        }}
                        placeholder="Enter the name of your group"
                        className="w-full p-1 ml-3 text-white outline-none bg-transparent"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <div>
                    <label className="block py-3 text-white">Phone</label>
                    <div className="flex items-center p-2 border rounded-md">
                      <input
                        onChange={(e: any) => {
                          setPhone_number(e.target.value);
                        }}
                        placeholder="Enter your phone number"
                        className="w-full p-1 ml-3 text-white outline-none bg-transparent"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <div>
                    <label className="block py-3 text-white">Email</label>
                    <div className="flex items-center p-2 border rounded-md">
                      <input
                        onChange={(e: any) => {
                          setEmail(e.target.value);
                        }}
                        type="email"
                        placeholder="Enter your email address"
                        className="w-full pr-3 p-1 ml-3 text-white outline-none bg-transparent"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <div>
                    <label className="block py-3 text-white">
                      Project Topic
                    </label>
                    <div className="flex items-center p-2 border rounded-md">
                      <input
                        onChange={(e: any) => {
                          setProject_topic(e.target.value);
                        }}
                        placeholder="What is your group project topic"
                        className="w-[650px]  ml-3 text-white outline-none bg-transparent"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <div>
                    <label className="block py-3 text-white">Category</label>
                    <div className="flex items-center p-2 border rounded-md">
                      <select
                        className="w-full p-1 ml-3 text-white outline-none bg-transparent"
                        onChange={(e: any) => {
                          setCategory(e.target.value);
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
                    <label className="block py-3 text-white">Group Size</label>
                    <div className="flex items-center p-2 border rounded-md">
                      <select
                        className="w-full p-1 ml-3 text-white outline-none bg-transparent"
                        onChange={(e: any) => {
                          setGroup_size(e.target.value);
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
                  <p className="text-[#D434FE] italic mb-[20px] font-semibold">
                    please review your registration details before submitting
                  </p>
                  <label className="flex gap-4">
                    <input
                      onChange={(e: any) => {
                        setPrivacy_poclicy_accepted(e.target.value);
                      }}
                      type="checkbox"
                      className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                    />

                    <span className="text-sm text-white">
                      I agreed with the event terms and conditions and privacy
                      policy
                    </span>
                  </label>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    onClick={registerTeam}
                    className="inline-flex items-center p-[20px] justify-center sm:w-auto md:w-[700px] h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md  bg-deep-purple-accent-400 bg-gradient-to-r from-[#D434FE] to-[#903AFF]  hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  >
                    Register
                  </button>
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
