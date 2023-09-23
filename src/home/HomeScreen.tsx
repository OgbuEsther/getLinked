import Header from "./Header";
import Hero from "./Hero";
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
      <Content2 order="" img={big} visibility="hidden" />
      <Content2 order="order-2 max-md:order-none" img={girl} visibility="" />
      <Judge />
      <FAQs />

      <TimeLine />
      <hr />
      <Prizes />
      <Partners />

      <PrivacyPolicy />

      <Footer />
    </div>
  );
};

export default HomeScreen;
