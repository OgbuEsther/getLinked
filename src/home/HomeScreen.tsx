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

import Fade from "react-reveal/Fade";

const HomeScreen = () => {
  return (
    <div className=" bg-[#150E28] ">
     
        <Header />
     
    
        <Hero />
     
      <Fade>
        <Content2 order="" img={big} visibility="hidden" />
      </Fade>
      <Fade>
        <Content2 order="order-2 max-md:order-none" img={girl} visibility="" />
      </Fade>
      <Fade>
        <Judge />
      </Fade>
      <Fade>
        <FAQs />
      </Fade>
      <Fade>
        <TimeLine />
      </Fade>
      <Fade>
        <Prizes />
      </Fade>
      <Fade>
        <Partners />
      </Fade>
      <Fade>
        <PrivacyPolicy />
      </Fade>
      <Fade>
        <Footer />
      </Fade>
    </div>
  );
};

export default HomeScreen;
