import { Lens, lens, ResolveStoreApi, Setter } from "@dhmk/zustand-lens";
import { GetState } from "zustand";
import { getMsg } from "../helpers/example";

const state = {
  counter: 0,
  msg: "",
};

export type State = typeof state;

export type Actions = {
  increase: (by: number) => void;
  getMsg: (msg: string) => void;
};

export type ExampleStore = State & Actions;

const actions: (
  set: Setter<ExampleStore>,
  get: GetState<ExampleStore>,
  api: ResolveStoreApi<unknown>,
  path: ReadonlyArray<string>
) => Actions = (set, get, api): Actions => {
  return {
    increase: (by) => {
      set({ counter: get().counter + 1 });
    },
    getMsg: (msg: string) => {
      set({ msg });
    },
  };
};

const slice: Lens<ExampleStore> = (set, get, api, path) => {
  return {
    ...state,
    ...actions(set, get, api, path),
  };
};

export default lens(slice);
