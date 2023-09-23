import { FC } from "react";

type contentData = {
  title: string;
  desc: string;
};

const Content: FC<contentData> = ({ title, desc }) => {
  return (
    <div className="py-5 ">
      <h2 className="font-semibold text-[var(--accent-color)] w-[83%] max-md:w-full">
        {title}
        <span className="px-2 text-white font-normal text-sm ">{desc}</span>
      </h2>
    </div>
  );
};

export default Content;
