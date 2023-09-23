import React from "react";
import { NavLink } from "react-router-dom";

type btnData = {
  title: string;
  path: string;
  padding: string;
};

const Button: React.FC<btnData> = ({ title, path, padding }) => {
  return (
    <div>
      <NavLink to={path}>
        <button
          style={{
            background:
              "linear-gradient(270deg, #903AFF 0%, #D434FE 56%, #FF26B9 100%, #FE34B9 100%)",
          }}
          className={`${padding} block text-sm  text-center text-white hover:text-white rounded-[4px] shadow md:inline`}
        >
          {title}
        </button>
      </NavLink>
    </div>
  );
};

export default Button;
