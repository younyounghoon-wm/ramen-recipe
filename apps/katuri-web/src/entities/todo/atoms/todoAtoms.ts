import { ITodo } from "../../../../types";
import { atomWithStorage } from "jotai/utils";

const TODOS_STORAGE_KEY = "TODOS_STORAGE_KEY";

export const todosAtom = atomWithStorage<ITodo[]>(TODOS_STORAGE_KEY, []);
