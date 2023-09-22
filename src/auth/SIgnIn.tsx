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
    <div className="">
      <section className="bg-[#150E28]">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-32 items-end lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt="Night"
              src={girl}
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />
          </section>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl shadow-2xl p-[70px]">
              <form action="#" className="mt-8 grid grid-cols-6 gap-6 ">
                <div className="col-span-6 sm:col-span-3">
                  <div>
                    <label className="block py-3 text-white">Team's Name</label>
                    <div className="flex items-center p-2 border rounded-md">
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
                    <label className="block py-3 text-white">Phone</label>
                    <div className="flex items-center p-2 border rounded-md">
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
                    <label className="block py-3 text-white">Email</label>
                    <div className="flex items-center p-2 border rounded-md">
                      <input
                        onChange={(e: any) => {
                          setEmail(e.target.value);
                          console.log("this is email", email);
                        }}
                        type="email"
                        placeholder="Enter your email address"
                        className="w-full pr-3 p-1 ml-3 text-gray-500 outline-none bg-transparent"
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
                          console.log("this is project topic", project_topic);
                        }}
                        placeholder="What is your group project topic"
                        className="w-[650px]  ml-3 text-gray-500 outline-none bg-transparent"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <div>
                    <label className="block py-3 text-white">Category</label>
                    <div className="flex items-center p-2 border rounded-md">
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
                    <label className="block py-3 text-white">Group Size</label>
                    <div className="flex items-center p-2 border rounded-md">
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
