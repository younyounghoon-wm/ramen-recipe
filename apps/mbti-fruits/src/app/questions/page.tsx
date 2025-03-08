"use client";

import { useLayoutEffect, useState } from "react";
import { QUESTIONS } from "../_define/question";
import { useMbtiStore } from "../_store/mbtiStore";
import { MBTIType } from "../_types";
import { useRouter } from "next/navigation";
import { calculateMBTI } from "../_logic/mbti";

function QuestionsPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { setMbtiScore, setMbti, mbtiScore } = useMbtiStore();

  const currentQuestion = QUESTIONS[currentIndex];

  const onNextQuestion = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const handleAnswer = (type: MBTIType) => () => {
    // 점수 누적
    setMbtiScore(type);

    // 다음 질문
    onNextQuestion();
  };

  useLayoutEffect(() => {
    // 질문 종료
    if (currentIndex === QUESTIONS.length) {
      console.log("질문 종료");
      setMbti(calculateMBTI(mbtiScore));
      router.push("/result");
    }
  }, [currentIndex]);

  if (currentIndex === QUESTIONS.length) {
    return null;
  }

  return (
    <div className="min-h-dvh bg-[#B2C2FF] flex flex-col items-center justify-center">
      <div className="flex flex-col gap-[24px] items-center px-[16px]">
        {/* 진행률 */}
        <div>
          <p className="font-bold text-[16px]">{currentIndex + 1}/10</p>
        </div>
        {/* 질문 */}
        <div>
          <p className="text-[28px] font-bold text-center break-keep">
            {currentQuestion.text}
          </p>
        </div>
        {/* 버튼 */}
        <div className="flex gap-[8px] w-full">
          <button
            onClick={handleAnswer(currentQuestion.yesScore)}
            className="flex-1 h-[65px] bg-white rounded-[16px] font-extrabold text-[28px] flex items-center justify-center"
          >
            Yes
          </button>
          <button
            onClick={handleAnswer(currentQuestion.noScore)}
            className="flex-1 h-[65px] bg-white rounded-[16px] font-extrabold text-[28px] flex items-center justify-center"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
export default QuestionsPage;
