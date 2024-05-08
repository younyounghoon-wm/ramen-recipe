import { atom } from "jotai";

type TTab = "TODO" | "DONE";

export const tabAtoms = atom<TTab>("TODO");
