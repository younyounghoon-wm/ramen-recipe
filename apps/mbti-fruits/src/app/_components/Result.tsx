import React from 'react';
import { MBTIResult } from '../_types';
import { fruitsByMBTI } from '../_define/mbti';

interface ResultProps {
  mbtiResult: MBTIResult;
  onRestart: () => void;
}

const Result = ({ mbtiResult, onRestart }:ResultProps) => {
  const fruit = fruitsByMBTI[mbtiResult];

  return (
    <div className="result-container">
      <h2>당신의 MBTI는 {mbtiResult}입니다!</h2>
      <div className="fruit-result">
        <p>당신과 어울리는 과일은...</p>
        <h3>{fruit.name} {fruit.emoji}</h3>
      </div>
      <div className="characteristics">
        <h3>당신의 특징</h3>
        <ul>
          {fruit.characteristics.map((characteristic, index) => (
            <li key={index}>{characteristic}</li>
          ))}
        </ul>
      </div>
      <button onClick={onRestart}>다시 테스트하기</button>
    </div>
  );
};
export default Result;