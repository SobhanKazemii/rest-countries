import { Dispatch, createContext } from "react";
import { ActionI } from "../types/state.type";
import { initialState } from "./reducer";

export const stateContext = createContext(initialState);
export const dispatchContext = createContext({} as Dispatch<ActionI>);
