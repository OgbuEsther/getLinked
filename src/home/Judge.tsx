import { FC } from "react";
import immage from "../assets/analytic.png";
import Button from "../components/props/Button";
import Content from "./Content";

type contentData = {
  title: string;
  desc: string;
};

const Judge = () => {
  return (
    <div className="border-b border-slate-800">
      <div className="w-[90%] m-auto py-10 grid grid-cols-2 max-md:grid-cols-1 ">
        <div className="flex items-center max-md:justify-center">
          <img src={immage} alt="" className="w-[80%] object-contain " />
        </div>

        {/* content */}
        <div className="text-white max-md:w-full max-md:grid max-md:place-items-center max-md:text-center">
          <h2 className="text-4xl font-extrabold tracking-tighter leading-1 max-md:text-2xl">
            Judging Criteria <br />{" "}
            <span className="text-[var(--accent-color)]">Key attributes</span>
          </h2>
          <Content
            title="Innovation and Creativity:"
            desc=" Evaluate the uniqueness and creativity of the solution. Consider
          whether it addresses a real-world problem in a novel way or introduces
          innovative features."
          />
          <Content
            title="Functionality: "
            desc="Assess how well the solution works. Does it perform its 
intended functions effectively and without major issues? Judges would
consider the completeness and robustness of the solution."
          />
          <Content
            title="Impact and Relevance:"
            desc="Determine the potential impact of the solution 
in the real world. Does it address a significant problem, and is it relevant 
to the target audience? Judges would assess the potential social, 
economic, or environmental benefits."
          />
          <Content
            title="Technical Complexity:"
            desc="Evaluate the technical sophistication of the solution. 
Judges would consider the complexity of the code, the use of advanced 
technologies or algorithms, and the scalability of the solution."
          />
          <Content
            title="Adherence to Hackathon Rules:"
            desc="Judges will Ensure that the team adhered 
to the rules and guidelines of the hackathon, including deadlines, use of 
specific technologies or APIs, and any other competition-specific requirements."
          />

          <div className="mt-4">
            <Button title="Read More" path="" padding="py-[8px] px-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Judge;
