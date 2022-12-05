import { Lens, lens } from "@dhmk/zustand-lens";
import { getMsg } from "../helpers/example";

const state = {
  counter: 0,
  msg: "",
};

export type ExampleState = typeof state;

export type ExampleActions = {
  increase: (by: number) => void;
  getMsg: (msg: string) => void;
};

export type ExampleStore = ExampleState & ExampleActions;
const exampleSlice: Lens<ExampleStore> = (set, get, api) => {
  return {
    ...state,
    increase: (by) => {
      set({ counter: get().counter + 1 });
    },
    getMsg: (msg: string) => {
      set({ msg });
    },
  };
};

export default lens(exampleSlice);
