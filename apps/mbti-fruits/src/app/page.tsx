'use client';

import { useState } from "react";
import { MBTIResult } from "./_types";
import Result from "./_components/Result";
import Quiz  from "./_components/Quiz";

function App() {
  const [result, setResult] = useState<MBTIResult | null>(null);

  const handleComplete = (mbtiResult: MBTIResult) => {
    setResult(mbtiResult);
  };

  const handleRestart = () => {
    setResult(null);
  };

  return (
    <div className="app">
      <h1>MBTI로 알아보는 나는 어떤 과일일까?</h1>
      {result ? (
        <Result mbtiResult={result} onRestart={handleRestart} />
      ) : (
        <Quiz onComplete={handleComplete} />
      )}
    </div>
  );
}
export default App;