import React from "react";
import { MBTIResult } from "../_types";
import { fruitsByMBTI } from "../_define/mbti";

interface ResultProps {
  mbtiResult: MBTIResult;
  onRestart: () => void;
}

const Result = ({ mbtiResult, onRestart }: ResultProps) => {
  const fruit = fruitsByMBTI[mbtiResult];

  return (
    <div className="result-container">
      <h2>당신의 MBTI는 {mbtiResult}입니다!</h2>
      <div className="fruit-result">
        <p>당신과 어울리는 과일은...</p>
        <h3>
          {fruit.name} {fruit.emoji}
        </h3>
      </div>
      <div className="characteristics">
        <h3>당신의 특징</h3>
        <ul>
          {fruit.characteristics.map((characteristic, index) => (
            <li key={index}>{characteristic}</li>
          ))}
        </ul>
      </div>
      <div className="compatibility">
        <h3>궁합 정보</h3>
        <div className="good-match">
          <h4>잘 맞는 유형 ✅</h4>
          <p>
            {fruit.compatibility.good.type} ({fruit.compatibility.good.name}{" "}
            {fruit.compatibility.good.emoji})
          </p>
          <p className="reason">{fruit.compatibility.good.reason}</p>
        </div>
        <div className="bad-match">
          <h4>안 맞는 유형 ❌</h4>
          <p>
            {fruit.compatibility.bad.type} ({fruit.compatibility.bad.name}{" "}
            {fruit.compatibility.bad.emoji})
          </p>
          <p className="reason">{fruit.compatibility.bad.reason}</p>
        </div>
      </div>
      <button onClick={onRestart}>다시 테스트하기</button>
    </div>
  );
};
export default Result;
