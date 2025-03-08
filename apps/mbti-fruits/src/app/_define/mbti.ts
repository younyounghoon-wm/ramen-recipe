import { MBTIResult } from "../_types";

interface MBTIFruit {
  name: string;
  emoji: string;
  image: string;
  characteristics: string[];
  compatibility: {
    good: {
      type: string;
      name: string;
      emoji: string;
      reason: string;
      image: string;
    };
    bad: {
      type: string;
      name: string;
      emoji: string;
      reason: string;
      image: string;
    };
  };
  bgColor: string;
  boxColor: string;
}

export const fruitsByMBTI: Record<MBTIResult, MBTIFruit> = {
  ISTJ: {
    name: "사과",
    emoji: "🍎",
    image: "/istj.svg",
    characteristics: [
      "책임감이 강하고 신뢰할 수 있음",
      "계획을 철저하게 세우고 실행함",
      "전통과 원칙을 중요하게 생각함",
      "조용하지만 효율적으로 일함",
      "감정보다는 논리와 사실을 기반으로 판단",
      "안정적인 환경을 선호",
    ],
    compatibility: {
      good: {
        type: "ESFP",
        name: "수박",
        emoji: "🍉",
        reason:
          "활발하고 따뜻한 ESFP는 ISTJ에게 새로운 경험을 주고, ISTJ는 ESFP에게 안정감을 줌",
        image: "/esfp.svg",
      },
      bad: {
        type: "ENFP",
        name: "파인애플",
        emoji: "🍍",
        reason: "즉흥적이고 자유로운 ENFP와 계획적인 ISTJ는 생활 방식이 다름",
        image: "/enfp.svg",
      },
    },
    bgColor: "#01D4AD",
    boxColor: "#FF5142",
  },
  ISFJ: {
    name: "배",
    emoji: "🍐",
    image: "/isfj.svg",
    characteristics: [
      "따뜻하고 배려심이 많음",
      "사람들에게 헌신적인 성향",
      "조용하고 신중하지만 친절함",
      "감정 표현이 서툴지만 깊은 정을 가짐",
      "세심하고 꼼꼼하게 일함",
      "안정된 인간관계를 중요하게 여김",
    ],
    compatibility: {
      good: {
        type: "ESFJ",
        name: "복숭아",
        emoji: "🍑",
        reason: "둘 다 따뜻하고 배려심이 많아 감정적으로 잘 통함",
        image: "/esfj.svg",
      },
      bad: {
        type: "ENTP",
        name: "자몽",
        emoji: "🍊",
        reason:
          "논쟁을 즐기는 ENTP는 조용하고 섬세한 ISFJ에게 부담이 될 수 있음",
        image: "/entp.svg",
      },
    },
    bgColor: "#FFEFC4",
    boxColor: "#E0C063",
  },
  INFJ: {
    name: "블루베리",
    emoji: "🫐",
    image: "/infj.svg",
    characteristics: [
      "직관력이 뛰어나고 깊은 통찰력을 가짐",
      "타인의 감정을 잘 이해하는 공감 능력",
      "의미 있는 관계를 중시함",
      "창의적이고 독창적인 아이디어를 생각함",
      "혼자 있는 시간을 통해 에너지를 충전함",
      "세상을 더 나은 곳으로 만들고 싶어함",
    ],
    compatibility: {
      good: {
        type: "ENFP",
        name: "파인애플",
        emoji: "🍍",
        reason: "창의적이고 감성적인 두 유형이 서로에게 영감을 줌",
        image: "/enfp.svg",
      },
      bad: {
        type: "ESTP",
        name: "오렌지",
        emoji: "🍊",
        reason:
          "즉흥적이고 현실적인 ESTP와 깊이 고민하는 INFJ는 서로를 이해하기 어려움",
        image: "/estp.svg",
      },
    },
    bgColor: "#FFDFFF",
    boxColor: "#7E65F0",
  },
  INTJ: {
    name: "키위",
    emoji: "",
    image: "/intj.svg",
    characteristics: [
      "전략적이고 체계적인 사고를 함",
      "독립적이며 혼자서도 잘 해냄",
      "목표 지향적이고 논리적임",
      "새로운 아이디어를 고민하고 실행에 옮김",
      "감정보다는 효율과 성과를 중요하게 생각함",
      "미래를 계획하고 장기적인 비전을 가짐",
    ],
    compatibility: {
      good: {
        type: "ENTP",
        name: "자몽",
        emoji: "🍊",
        reason: "둘 다 지적 대화를 좋아하고 도전적인 성향이 비슷함",
        image: "/entp.svg",
      },
      bad: {
        type: "ESFP",
        name: "수박",
        emoji: "🍉",
        reason:
          "감정적이고 즉흥적인 ESFP는 계획적이고 논리적인 INTJ와 충돌할 가능성이 높음",
        image: "/esfp.svg",
      },
    },
    bgColor: "#FF8600",
    boxColor: "#A8C708",
  },
  ISTP: {
    name: "레몬",
    emoji: "🍋",
    image: "/istp.svg",
    characteristics: [
      "실용적이고 현실적인 사고를 함",
      "문제 해결 능력이 뛰어나며 손재주가 좋음",
      "즉흥적이지만 효과적인 해결책을 찾음",
      "감정보다는 논리와 분석을 우선함",
      "혼자 있는 걸 좋아하며 자유를 중요하게 여김",
      "모험을 즐기고 새로운 도전을 좋아함",
    ],
    compatibility: {
      good: {
        type: "ESTP",
        name: "오렌지",
        emoji: "🍊",
        reason:
          "둘 다 현실적이고 즉흥적인 성향이라 함께 재미있는 경험을 많이 할 수 있음",
        image: "/estp.svg",
      },
      bad: {
        type: "INFJ",
        name: "블루베리",
        emoji: "🫐",
        reason:
          "INFJ는 깊이 있는 대화를 원하지만 ISTP는 감정적인 대화에 관심이 적음",
        image: "/infj.svg",
      },
    },
    bgColor: "#5B79FF",
    boxColor: "#FFE600",
  },
  ISFP: {
    name: "망고",
    emoji: "🥭",
    image: "/isfp.svg",
    characteristics: [
      "감성적이고 예술적인 기질이 있음",
      "자유로운 삶을 추구하며 규칙에 얽매이기 싫어함",
      "감정이 풍부하고 섬세하지만 표현이 서툴 수 있음",
      "현재 순간을 즐기며 즉흥적인 편",
      "타인의 감정을 잘 이해하고 배려함",
      "경쟁보다는 조화로운 관계를 원함",
    ],
    compatibility: {
      good: {
        type: "ESFP",
        name: "수박",
        emoji: "🍉",
        reason:
          "감성적이고 자유로운 성향이 비슷해 함께 즐거운 시간을 보낼 수 있음",
        image: "/esfp.svg",
      },
      bad: {
        type: "ENTJ",
        name: "석류",
        emoji: "",
        reason:
          "계획적이고 강한 리더십을 가진 ENTJ는 자유로운 ISFP를 답답하게 느낄 수 있음",
        image: "/entj.svg",
      },
    },
    bgColor: "#D5FFE8",
    boxColor: "#FFAE23",
  },
  INFP: {
    name: "체리",
    emoji: "🍒",
    image: "/infp.svg",
    characteristics: [
      "상상력이 풍부하고 창의적임",
      "깊은 내면 세계를 가지고 있음",
      "의미 있는 일에 열정을 가짐",
      "감정이 풍부하고 공감 능력이 뛰어남",
      "이상주의적이며 세상을 더 나은 곳으로 만들고 싶어함",
      "혼자만의 시간을 중요하게 생각함",
    ],
    compatibility: {
      good: {
        type: "ENFJ",
        name: "딸기",
        emoji: "🍓",
        reason: "따뜻하고 배려심이 깊은 ENFJ가 INFP를 잘 이끌어 줌",
        image: "/enfj.svg",
      },
      bad: {
        type: "ESTJ",
        name: "바나나",
        emoji: "🍌",
        reason: "논리적이고 현실적인 ESTJ는 감성적인 INFP와 사고방식이 다름",
        image: "/estj.svg",
      },
    },
    bgColor: "#FFD8D8",
    boxColor: "#CF2726",
  },
  INTP: {
    name: "포도",
    emoji: "🍇",
    image: "/intp.svg",
    characteristics: [
      "논리적이고 분석적인 사고를 함",
      "새로운 아이디어를 탐구하는 것을 좋아함",
      "독립적이고 혼자 있는 걸 즐김",
      "기존의 틀을 깨는 혁신적인 사고를 가짐",
      "감정보다는 이성과 논리를 우선함",
      "호기심이 많고 항상 새로운 것을 배우려 함",
    ],
    compatibility: {
      good: {
        type: "ENTP",
        name: "자몽",
        emoji: "🍊",
        reason:
          "둘 다 논리적이고 아이디어를 공유하는 걸 좋아해 지적 대화가 잘 통함",
        image: "/entp.svg",
      },
      bad: {
        type: "ESFJ",
        name: "복숭아",
        emoji: "🍑",
        reason:
          "감정적이고 사람 중심적인 ESFJ와 논리적인 INTP는 갈등이 많을 수 있음",
        image: "/esfj.svg",
      },
    },
    bgColor: "#FFED7A",
    boxColor: "#6D3A8C",
  },
  ESTP: {
    name: "오렌지",
    emoji: "🍊",
    image: "/estp.svg",
    characteristics: [
      "에너지가 넘치고 사교적임",
      "순간적인 결단력과 실행력이 뛰어남",
      "실용적인 문제 해결 능력을 가짐",
      "활동적이며 모험을 즐김",
      "감정보다는 현실적이고 논리적인 사고를 함",
      "즉흥적이지만 상황을 잘 파악함",
    ],
    compatibility: {
      good: {
        type: "ISTP",
        name: "레몬",
        emoji: "🍋",
        reason:
          "즉흥적이고 모험적인 성향이 잘 맞아 함께 다이나믹한 활동을 즐길 수 있음",
        image: "/istp.svg",
      },
      bad: {
        type: "INFJ",
        name: "블루베리",
        emoji: "🫐",
        reason:
          "깊이 있는 감정 교류를 원하는 INFJ와 즉흥적인 ESTP는 가치관이 다름",
        image: "/infj.svg",
      },
    },
    bgColor: "#1A5CDB",
    boxColor: "#FF8600",
  },
  ESFP: {
    name: "수박",
    emoji: "🍉",
    image: "/esfp.svg",
    characteristics: [
      "밝고 긍정적인 에너지를 가짐",
      "사람들과 어울리는 걸 좋아함",
      "감각적이고 즐거운 경험을 추구함",
      "감정을 솔직하게 표현함",
      "즉흥적이며 현재를 즐기는 성향",
      "타인을 배려하고 분위기를 잘 맞춤",
    ],
    compatibility: {
      good: {
        type: "ISFP",
        name: "망고",
        emoji: "🥭",
        reason:
          "감성적이고 즉흥적인 성향이 비슷해 함께 즐거운 시간을 보낼 수 있음",
        image: "/isfp.svg",
      },
      bad: {
        type: "INTJ",
        name: "키위",
        emoji: "",
        reason:
          "계획적이고 논리적인 INTJ는 감정적이고 자유로운 ESFP와 맞지 않음",
        image: "/intj.svg",
      },
    },
    bgColor: "#BAFF89",
    boxColor: "#F4548E",
  },
  ENFP: {
    name: "파인애플",
    emoji: "🍍",
    image: "/enfp.svg",
    characteristics: [
      "창의적이고 활발한 성격",
      "항상 새로운 경험을 추구함",
      "타인과의 관계에서 에너지를 얻음",
      "감정이 풍부하고 표현력이 뛰어남",
      "즉흥적이지만 열정적으로 몰입함",
      "틀에 갇히는 걸 싫어하고 자유를 중요하게 여김",
    ],
    compatibility: {
      good: {
        type: "INFJ",
        name: "블루베리",
        emoji: "🫐",
        reason: "서로의 강점을 보완하며 깊이 있는 대화를 나눌 수 있음",
        image: "/infj.svg",
      },
      bad: {
        type: "ISTJ",
        name: "사과",
        emoji: "🍎",
        reason: "즉흥적이고 자유로운 ENFP와 계획적인 ISTJ는 생활 방식이 다름",
        image: "/istj.svg",
      },
    },
    bgColor: "#ADFFEB",
    boxColor: "#FFC500",
  },
  ENTP: {
    name: "자몽",
    emoji: "🍊",
    image: "/entp.svg",
    characteristics: [
      "호기심이 많고 다양한 아이디어를 떠올림",
      "논쟁을 즐기며 토론을 좋아함",
      "즉흥적이고 도전적인 성향",
      "유머 감각이 뛰어나고 재치가 있음",
      "변화를 즐기고 새로운 기회를 찾음",
      "전통보다는 혁신을 중요하게 여김",
    ],
    compatibility: {
      good: {
        type: "INTP",
        name: "포도",
        emoji: "🍇",
        reason: "서로의 아이디어를 공유하며 자극을 주고받을 수 있음",
        image: "/intp.svg",
      },
      bad: {
        type: "ISFJ",
        name: "배",
        emoji: "🍐",
        reason:
          "조용하고 배려심 많은 ISFJ는 논쟁을 즐기는 ENTP에게 피곤함을 느낄 수 있음",
        image: "/isfj.svg",
      },
    },
    bgColor: "#FAD902",
    boxColor: "#FF6362",
  },
  ESTJ: {
    name: "바나나",
    emoji: "🍌",
    image: "/estj.svg",
    characteristics: [
      "책임감이 강하고 체계적임",
      "목표를 설정하고 이를 달성하는 데 집중함",
      "현실적이며 논리적으로 판단함",
      "계획을 세우고 이를 실행하는 걸 좋아함",
      "조직과 질서를 중요하게 생각함",
      "효율적이고 결과 중심적인 사고방식을 가짐",
    ],
    compatibility: {
      good: {
        type: "ISTJ",
        name: "사과",
        emoji: "🍎",
        reason: "둘 다 현실적이고 계획적인 성향이라 잘 맞음",
        image: "/istj.svg",
      },
      bad: {
        type: "INFP",
        name: "체리",
        emoji: "🍒",
        reason:
          "감성적이고 이상주의적인 INFP와 현실적인 ESTJ는 사고방식이 다름",
        image: "/infp.svg",
      },
    },
    bgColor: "#005B4E",
    boxColor: "#FFEA45",
  },
  ESFJ: {
    name: "복숭아",
    emoji: "🍑",
    image: "/esfj.svg",
    characteristics: [
      "사교적이고 사람들과 잘 어울림",
      "타인을 배려하고 감정적으로 공감하는 능력이 뛰어남",
      "전통과 규범을 중요하게 여김",
      "팀워크와 협력을 중요하게 생각함",
      "세심하고 섬세한 성향",
      "남을 돕는 것을 좋아하며 인정받는 걸 원함",
    ],
    compatibility: {
      good: {
        type: "ISFJ",
        name: "배",
        emoji: "🍐",
        reason: "서로 배려하고 조화를 중요하게 생각하는 성향이라 잘 맞음",
        image: "/isfj.svg",
      },
      bad: {
        type: "INTP",
        name: "포도",
        emoji: "🍇",
        reason:
          "감정보다는 논리를 중시하는 INTP와 감성적인 ESFJ는 서로를 이해하기 어려움",
        image: "/intp.svg",
      },
    },
    bgColor: "#E4234F",
    boxColor: "#FFBEBE",
  },
  ENFJ: {
    name: "딸기",
    emoji: "🍓",
    image: "/enfj.svg",
    characteristics: [
      "사람들에게 영감을 주고 동기를 부여함",
      "공감 능력이 뛰어나고 따뜻함",
      "타인의 성장과 발전을 중요하게 여김",
      "감정이 풍부하고 표현력이 뛰어남",
      "조직을 이끌고 조정하는 능력이 있음",
      "갈등을 해결하고 조화를 이루는 데 능숙함",
    ],
    compatibility: {
      good: {
        type: "INFP",
        name: "체리",
        emoji: "🍒",
        reason: "따뜻한 성향이 비슷하고 서로의 감정을 잘 이해함",
        image: "/infp.svg",
      },
      bad: {
        type: "ISTP",
        name: "레몬",
        emoji: "🍋",
        reason:
          "감정 표현이 적고 즉흥적인 ISTP와 깊이 있는 관계를 원하는 ENFJ는 성향 차이가 있음",
        image: "/istp.svg",
      },
    },
    bgColor: "#00EFC1",
    boxColor: "#F45454",
  },
  ENTJ: {
    name: "석류",
    emoji: "",
    image: "/entj.svg",
    characteristics: [
      "리더십이 강하고 목표 지향적임",
      "논리적이고 체계적으로 계획을 세움",
      "결단력이 뛰어나고 도전적인 성향",
      "효율성을 중시하며 실행력이 뛰어남",
      "독립적이며 경쟁적인 환경을 선호함",
      "전략적으로 사고하고 큰 그림을 봄",
    ],
    compatibility: {
      good: {
        type: "INTJ",
        name: "키위",
        emoji: "",
        reason: "목표 지향적이고 전략적인 성향이 잘 맞아 함께 성장할 수 있음",
        image: "/intj.svg",
      },
      bad: {
        type: "ISFP",
        name: "망고",
        emoji: "🥭",
        reason:
          "자유롭고 감성적인 ISFP는 강한 리더십을 가진 ENTJ와 스타일이 맞지 않음",
        image: "/isfp.svg",
      },
    },
    bgColor: "#0B1D42",
    boxColor: "#015834",
  },
};
