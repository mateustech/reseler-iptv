import { useCallback, useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
export type QuestionProps = {
  question: string;
  response: string;
};

type FaqProps = {
  questions: QuestionProps[];
};

export const Faq = (props: FaqProps) => {
  const { questions } = props;
  return (
    <ul className="w-[40rem] space-y-1">
      {questions.map((question, key) => {
        return <Question key={key} {...question} />;
      })}
    </ul>
  );
};

const Question = (props: QuestionProps) => {
  const { question, response } = props;

  const [show, setShow] = useState(false);

  const onShow = useCallback(() => {
    setShow(!show);
  }, [show]);

  return (
    <li>
      <button
        onClick={onShow}
        className="text-xl bg-gray-800 text-white px-8 py-4 w-full flex justify-between rounded"
      >
        <div className="text-left"> {question}</div>
        <div>{!show ? <FiPlus /> : <FiMinus />}</div>
      </button>
      {show && <div className="bg-gray-700 p-4 text-gray-200">{response}</div>}
    </li>
  );
};
