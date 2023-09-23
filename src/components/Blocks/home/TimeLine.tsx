import React from "react";
import Button from "../../props/Button";

type timelineData = {
  first_order: string;
  last_order: string;
  title: string;
  desc: string;
  date: string;
  number: string;
  descAlign?: string;
  titleAlign?: string;
};

const Timeline: React.FC<timelineData> = ({
  date,
  desc,
  title,
  last_order,
  first_order,
  number,
  descAlign,
  titleAlign,
}) => {
  return (
    <div className="pt-7 text-white w-[70%] m-auto max-md:w-full">
      <div className="grid grid-cols-[1fr,0.4fr,1fr] max-md:grid-cols-[0.2fr,1fr]">
        {/* left */}
        <div className={`${first_order} flex gap-3 flex-col max-md:order-1 `}>
          <h3
            className={` ${titleAlign}  max-md:text-start text-base text-[var(--accent-color)] tracking-tighter font-bold`}
          >
            {title}
          </h3>
          <p
            className={`${descAlign}  text-xs max-md:text-start max-md:w-full`}
          >
            {desc}
          </p>
          <h3 className=" md:hidden text-base text-[var(--accent-color)] tracking-tighter font-bold">
            {date}
          </h3>
        </div>

        {/* mid */}
        <div className="flex items-center flex-col  gap-1">
          {/* line */}
          <div className="w-[2.5px]  h-[90px] bg-[#d434fe]"></div>
          <Button
            padding="py-2 px-4 cursor-default rounded-full"
            title={number}
            path="#"
          />
        </div>

        {/* right */}
        <div
          className={`flex text-base   ${last_order} flex-col max-md:hidden`}
        >
          <h3 className=" text-lg text-[var(--accent-color)] tracking-tighter font-bold">
            {date}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
