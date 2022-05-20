import { createSlice } from "@reduxjs/toolkit";
import { AlarmNamesType, alarms } from "../data/common";
import { ModalDataI } from "../interfaces/common";
import { RootState } from "./store";

export interface MainStoreInterface {
  targetWindowTitle: string;
  fullScreen: boolean;
  currentFrameScroll: number;
  alarmMessage: AlarmNamesType;
  showAlarm: boolean;
  mainLoaging: boolean;
}

const initialState: MainStoreInterface = {
  targetWindowTitle: '',
  fullScreen: false,
  currentFrameScroll: 0,
  alarmMessage: 'empty',
  showAlarm: false,
  mainLoaging: true,
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setTargetWindowTitle(state, action) {
      state.targetWindowTitle = action.payload;
    },
    setFullScreen(state, action) {
      state.fullScreen = action.payload;
    },
    toggleFullScreen(state) {
      state.fullScreen = !state.fullScreen;
    },
    setCurrentFrameScroll(state, action) {
      state.currentFrameScroll = action.payload;
    },
    setAlarmMessage(state, action: {payload: AlarmNamesType}) {
      state.alarmMessage = action.payload;
      state.showAlarm = true;
    },
    resetAlarmMessage(state) {
      state.alarmMessage = 'empty';
      state.showAlarm = false;
    },
    loadingComplite(state) {
      state.mainLoaging = false;
    }
  }
})

export const {setTargetWindowTitle, toggleFullScreen, setCurrentFrameScroll, setFullScreen, setAlarmMessage, resetAlarmMessage, loadingComplite} = mainSlice.actions;

export default mainSlice.reducer;

export const selectMainLoading = (state: RootState) => state.main.mainLoaging;
export const selectTitle = (state: RootState) => state.main.targetWindowTitle;
export const selectFullScreen = (state: RootState) => state.main.fullScreen;
export const selectFrameScroll = (state: RootState) => state.main.currentFrameScroll;
export const selectAlarmMessage = (state: RootState) => { return {...alarms[state.main.alarmMessage], showMessage: state.main.showAlarm}}