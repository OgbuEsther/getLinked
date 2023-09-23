import React from "react";
import img from "./img1-removebg-preview.png";
//

interface IProps {
  OnClick: () => void;
}
const PopUp: React.FC<IProps> = ({ OnClick }: any) => {
  return (
    <div className="fixed top-0 w-full h-screen bg-[#160e29ea] flex justify-center items-center backdrop-blur-md z-50">
      <div className="w-[300px] md:w-[400px] py-6 md:h-[440px] h-fit border-[1px] border-[#8d26ae] flex justify-center items-center">
        <div className="w-[88%] h-[86%] ">
          <div className="w-full h-[200px]">
            <img
              src={img}
              className="w-full h-full object-contain object-center"
            />
          </div>
          <div className="text-xl text-center font-[600] text-white">
            Congratulations
            <br /> you have successfully Registered!
          </div>
          <div className="text-center text-[#ffffffad] text-xs">
            Yes, it was easy and you did it!
            <br /> check your mail box for next step 😅
          </div>
          <button
            style={{
              background:
                "linear-gradient(270deg, #903AFF 0%, #D434FE 56%, #FF26B9 100%, #FE34B9 100%)",
            }}
            onClick={OnClick}
            className="text-white rounded-[4px] w-full mt-5 h-9 text-xs font-[600] cursor-pointer"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
