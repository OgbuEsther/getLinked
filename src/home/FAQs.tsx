import que from "../../assets/question.png";
import { faqsList } from "../components/Blocks/home/faq";

import FaqsCard from "../components/props/Accordion";

const FAQs = () => {
  return (
    <div id="faq" className="border-b border-gray-800">
      <div className="w-[90%] m-auto py-14 grid grid-cols-2 max-md:grid-cols-1 max-md:gap-8">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl tracking-tighter leading-1 text-white font-extrabold max-md:text-center max-md:text-2xl">
            Frequently Ask <br />{" "}
            <span className="text-[var(--accent-color)]">Question</span>
          </h2>
          <p className="py-5 text-white w-[60%]  max-md:w-full max-md:text-center max-md:text-sm">
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </p>

          {/* toggle */}
          <div className="mt-10 ">
            {faqsList.map((item, idx) => (
              <FaqsCard key={idx} idx={idx} faqsList={item} />
            ))}
          </div>
        </div>
        {/* bottom */}
        <div className={` w-full grid  place-items-center`}>
          <img
            src={que}
            alt=""
            loading="lazy"
            className="w-[80%] max-md:w-[80%]"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQs;
