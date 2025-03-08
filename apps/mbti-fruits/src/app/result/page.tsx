"use client";

import Image from "next/image";
import { useMbtiStore } from "../_store/mbtiStore";
import { fruitsByMBTI } from "../_define/mbti";

function ResultPage() {
  const { mbtiScore, mbtiResult } = useMbtiStore();

  const { image, name, characteristics, compatibility, bgColor, boxColor } =
    fruitsByMBTI[mbtiResult!];

  return (
    <div
      className={`min-h-dvh flex flex-col items-center justify-center px-[16px] pb-[24px]`}
      style={{
        backgroundColor: bgColor,
      }}
    >
      {/* 이미지 */}
      <div>
        <Image src={image} width={320} height={320} alt="fruit" />
      </div>
      {/* 과일이름 */}
      <div
        className="rounded-[24px] font-extrabold text-[24px] min-w-[112px] w-min flex items-center justify-center text-white px-[24px] py-[8px] mb-[16px]"
        style={{
          background: boxColor,
        }}
      >
        {name}
      </div>
      {/* MBTI 설명 */}
      <div className="w-full rounded-[16px]  flex flex-col gap-[8px] bg-white p-[24px] mb-[16px]">
        {characteristics.map((character) => (
          <span key={character}>{character}</span>
        ))}
      </div>
      {/* 찰떡/앙숙 */}
      <div className="flex gap-[16px] w-full">
        <div className="bg-white rounded-[16px] h-[147px] flex-1 flex flex-col items-center gap-[8px] justify-center">
          <p className="font-bold text-[16px]">찰떡 과일</p>
          <Image
            src={compatibility.good.image}
            width={64}
            height={64}
            alt="fruit"
          />
          <span className="inline-block font-normal text-[14px]">
            {compatibility.good.name}
          </span>
        </div>
        <div className="bg-white rounded-[16px] h-[147px] flex-1 flex flex-col items-center gap-[8px] justify-center">
          <p className="font-bold text-[16px]">앙숙 과일</p>
          <Image
            src={compatibility.bad.image}
            width={64}
            height={64}
            alt="fruit"
          />
          <span className="inline-block font-normal text-[14px]">
            {compatibility.bad.name}
          </span>
        </div>
      </div>
      {/* 다시하기 */}
      {/* <button
        style={{
          backgroundColor: bgColor,
          opacity: 0.1,
        }}
        className="h-[52px] rounded-[16px] text-white"
      >
        다시하기
      </button> */}
    </div>
  );
}
export default ResultPage;
