import create from "zustand";
import { withLenses, lens } from "@dhmk/zustand-lens";
import slice, { ExampleStore } from "./example.slice";

export type StoreState = {
  example: ExampleStore;
};

export const useStore = create(
  withLenses({
    example: slice,
  })
);
