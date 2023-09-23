import { useRef, useState } from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { FaqItem } from "../../interfaces/Index";

interface FaqsCardProps {
  faqsList: FaqItem;
  idx: number;
}
const FaqsCard: React.FC<FaqsCardProps> = ({ faqsList, idx }) => {
  const answerElRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");

  const handleOpenAnswer = () => {
    if (answerElRef.current) {
      const answerElH = (answerElRef.current.firstChild as HTMLElement)
        .offsetHeight;
      setState(!state);
      setAnswerH(`${answerElH + 20}px`);
    }
  };

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden border-b border-[var(--accent-color)]"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-200 font-medium">
        {faqsList.q}
        {state ? (
          <IoIosRemove className="h-5 w-5 text-[var(--accent-color)] ml-2" />
        ) : (
          <IoIosAdd className="h-5 w-5 text-[var(--accent-color)] ml-2" />
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div>
          <p className="text-gray-400">{faqsList.a}</p>
        </div>
      </div>
    </div>
  );
};

export default FaqsCard;
