import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Content from "./Content";
import Content2 from "./Content2";
import FAQs from "./FAQs";
import TimeLine from "./TimeLine";
import Judge from "./Judge";
import Footer from "./Footer";
import Partners from "./Partners";
import Prizes from "./Prizes";
import PrivacyPolicy from "./PrivacyPolicy";
import big from "../assets/bigbulb.png";
import girl from "../assets/girl.png";
const HomeScreen = () => {
  return (
    <div className=" bg-[#150E28] ">
      <Header />
      <Hero />
      <Content2 order="" img={big} />
      <Content2 order="order-2 max-md:order-none" img={girl} />
      <Judge />
      <FAQs />
      <TimeLine />
      {/* <Content2 />
        <hr />
        <Content />
        <hr />
        <Judge />
       <hr />
        <FAQs />

        <hr />

        <TimeLine />
        <hr />
        <Prizes />
        <hr />
        <Partners />
        <hr />
        <PrivacyPolicy />
        <hr />
        <Footer /> */}
    </div>
  );
};

export default HomeScreen;
