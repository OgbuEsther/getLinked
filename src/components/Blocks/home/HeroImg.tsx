import img from "../../../assets/heroimg.png";
// import matrix from "../../../assets/metrix.png";

const HeroImg = () => {
  return (
    <div
      className="max-md:mt-5"
      // style={{
      //   backgroundImage: `url(${matrix})`,
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      // }}
    >
      <img src={img} alt="" />
    </div>
  );
};

export default HeroImg;
