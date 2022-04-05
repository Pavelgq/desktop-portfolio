import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface MainStoreInterface {
  targetWindowTitle: string;
  fullScreen: boolean;
}

const initialState: MainStoreInterface = {
  targetWindowTitle: '',
  fullScreen: false,
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setTargetWindowTitle(state, action) {
      state.targetWindowTitle = action.payload;
    },
    toggleFullScreen(state) {
      state.fullScreen = !state.fullScreen;
    }
  }
})

export const {setTargetWindowTitle, toggleFullScreen} = mainSlice.actions;

export default mainSlice.reducer;

export const selectTitle = (state: RootState) => state.main.targetWindowTitle;
export const selectFullScreen = (state: RootState) => state.main.fullScreen;