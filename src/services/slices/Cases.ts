import { createSlice } from "@reduxjs/toolkit";
import { Cases } from "../models/Cases";
import { FSA } from "../models/FluxStandardActions";
import { fetchCases, casesThunks } from "./CasesThunks";

export const casesSlice = createSlice({
  name: "cases",
  initialState: {
    meta: { pending: false },
    payload: {},
    error: false,
  } as FSA<Cases>,
  reducers: {},
  extraReducers: casesThunks,
});

export { fetchCases };
export default casesSlice.reducer;
