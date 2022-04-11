import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface MainStoreInterface {
  targetWindowTitle: string;
  fullScreen: boolean;
  currentFrameScroll: number;
}

const initialState: MainStoreInterface = {
  targetWindowTitle: '',
  fullScreen: false,
  currentFrameScroll: 0,
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
    },
    setCurrentFrameScroll(state, action) {
      state.currentFrameScroll = action.payload;
    }
  }
})

export const {setTargetWindowTitle, toggleFullScreen, setCurrentFrameScroll} = mainSlice.actions;

export default mainSlice.reducer;

export const selectTitle = (state: RootState) => state.main.targetWindowTitle;
export const selectFullScreen = (state: RootState) => state.main.fullScreen;
export const selectFrameScroll = (state: RootState) => state.main.currentFrameScroll;