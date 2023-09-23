import { FC } from "react";
import flare from "../assets/Purple-Lens-Flare.svg";
import { contentData } from "../interfaces/Index";

const Content2: FC<contentData> = ({ order, img, visibility }) => {
  return (
    <div>
      <div
        id="overview"
        className="relative w-[90%] m-auto py-10 grid grid-cols-2 max-md:grid-cols-1 max-md:gap-8"
      >
        <div className={`${order} w-full grid  place-items-center`}>
          <img src={img} alt="" loading="lazy" className="max-md:w-[80%]" />
        </div>
        <img
          src={flare}
          alt=""
          style={{
            position: "absolute",
            top: -150,
            left: -100,
            height: "90vh",
          }}
          className={`${visibility}`}
        />

        {/* bottom */}

        <div className="flex flex-col justify-center">
          <h2 className="text-3xl tracking-tighter leading-1 text-white font-extrabold max-md:text-center max-md:text-2xl">
            Introduction to getlinked <br />{" "}
            <span className="text-[var(--accent-color)]">
              tech Hackathon 1.0
            </span>
          </h2>

          <p className="text-white pt-6 text-sm w-[80%] tracking-wide max-md:text-center max-md:w-full">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
      </div>
      <hr className="border-slate-800" />
    </div>
  );
};

export default Content2;
