import { PayloadAction } from "@reduxjs/toolkit";
import { FSA } from "../models/FluxStandardActions";

const cleanupActionType = (type: string) => {
  return type.split("/", 3).slice(1, 2).join("/");
};

/**
 * Pending State
 *
 * @category Flux State Actions
 * @param {FSA} state
 * @param {PayloadAction} action
 */
export const fsaPending = (state: FSA<any>, action: any = null): void => {
  if (action && action.type) {
    if (!state.states) state.states = {} as any;
    state.states[cleanupActionType(action.type)] = true;
    return;
  }

  state.meta.pending = true;
};

/**
 * Fulfilled (Success) State
 *
 * @category Flux State Actions
 * @param {FSA} state
 * @param {PayloadAction} action
 */
export const fsaFulfilled = (
  state: FSA<any>,
  action: PayloadAction<any>,
  ignoreState = false
): void => {
  if (!ignoreState) {
    state.error = false;
    state.meta.pending = false;
    state.payload = { ...state.payload, ...action.payload };
  }

  if (state.states && state.states[cleanupActionType(action.type)]) {
    state.states[cleanupActionType(action.type)] = false;
  }
};

/**
 * Rejected (Failed) State
 *
 * @category Flux State Actions
 * @param {FSA} state
 * @param {PayloadAction} action
 */
export const fsaRejected = (
  state: FSA<any>,
  action: PayloadAction<any>,
  ignoreState = false
): void => {
  if (!ignoreState) {
    state.error = true;
    state.meta.pending = false;
    state.payload = new Error(action.payload);
  }

  if (state.states && state.states[cleanupActionType(action.type)]) {
    state.states[cleanupActionType(action.type)] = false;
  }
};
