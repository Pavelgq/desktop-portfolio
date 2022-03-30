import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface MainStoreInterface {
  targetWindowTitle: string;
}

const initialState: MainStoreInterface = {
  targetWindowTitle: '',
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setTargetWindowTitle(state, action) {
      state.targetWindowTitle = action.payload;
    }
  }
})

export const {setTargetWindowTitle} = mainSlice.actions;

export default mainSlice.reducer;

export const selectTitle = (state: RootState) => state.main.targetWindowTitle;