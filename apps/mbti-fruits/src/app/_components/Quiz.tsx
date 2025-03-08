'use client';

import React, { useState } from "react";
import { Question, MBTIType, MBTIResult } from "../_types";
import { questions } from "../_define/question";
import { calculateMBTI } from "../_logic/mbti";
import { fruitsByMBTI } from "../_define/mbti";

interface QuizProps {
  onComplete: (result: MBTIResult) => void;
}

const Quiz = ({ onComplete }:QuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Record<MBTIType, number>>({
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  });

  const handleAnswer = (isYes: boolean) => {
    const question = questions[currentQuestion];
    const scoreType = isYes ? question.yesScore : question.noScore;

    setScores((prev) => ({
      ...prev,
      [scoreType]: prev[scoreType] + 1,
    }));

    if (currentQuestion === questions.length - 1) {
      const result = calculateMBTI(scores);
      onComplete(result);
    } else {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  return (
    <div className="quiz-container">
      <h2>질문 {currentQuestion + 1}</h2>
      <p>{questions[currentQuestion].text}</p>
      <div className="button-container">
        <button onClick={() => handleAnswer(true)}>예</button>
        <button onClick={() => handleAnswer(false)}>아니오</button>
      </div>
    </div>
  );
};
export default Quiz;
