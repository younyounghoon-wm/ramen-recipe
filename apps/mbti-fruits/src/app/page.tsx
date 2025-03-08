"use client";

import { useState } from "react";
import { MBTIResult } from "./_types";
import Result from "./_components/Result";
import Quiz from "./_components/Quiz";
import Image from "next/image";
import Link from "next/link";

function App() {
  return (
    <div className="min-h-dvh bg-[#B2C2FF] flex justify-center items-center">
      <div className="flex flex-col items-center gap-[24px]">
        <Image width={400} height={235} src={"/logo.svg"} alt="logo" />
        <h1 className="text-[48px] font-bold text-white">나의 과일 유형은?</h1>
        <Link
          href={"/questions"}
          className="bg-black h-[52px] rounded-[16px] w-full font-bold text-[24px] flex justify-center items-center text-white"
        >
          시작하기
        </Link>
      </div>
    </div>
  );
}
export default App;
