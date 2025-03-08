import { create } from "zustand";
import { MBTIResult, MBTIType } from "../_types";

interface State {
  mbtiScore: Record<MBTIType, number>;
  mbtiResult: MBTIResult | undefined;
}

interface Actions {
  setMbtiScore: (type: MBTIType) => void;
  setMbti: (mbti: MBTIResult) => void;
}

const initialState: State = {
  mbtiScore: {
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    P: 0,
    J: 0,
  },
  mbtiResult: undefined,
};

export const useMbtiStore = create<State & Actions>((set) => ({
  mbtiScore: initialState.mbtiScore,
  mbtiResult: initialState.mbtiResult,
  setMbtiScore: (type: MBTIType) =>
    set((state) => ({
      mbtiScore: {
        ...state.mbtiScore,
        [type]: state.mbtiScore[type] + 1,
      },
    })),
  setMbti: (mbti) =>
    set({
      mbtiResult: mbti,
    }),
}));
