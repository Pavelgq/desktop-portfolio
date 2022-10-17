import { createSlice } from "@reduxjs/toolkit";
import { PalletViewI } from "../interfaces/common";
import { RootState } from "./store";


export interface FolderStoreInterface {
  folderPalletView: PalletViewI;
  folderInfoBarState: boolean;
  folderCurrentId: number;
  folderScrollPosition: number;
  sidebarScrollPosition: number;
}

const initialState: FolderStoreInterface = {
  folderPalletView: 'Tile',
  folderInfoBarState: false,
  folderCurrentId: 0,
  folderScrollPosition: 0,
  sidebarScrollPosition: 0,

}


export const folderSlice = createSlice({
  name: 'folder',
  initialState,
  reducers: {
    setFolderPalletView(state, action) {
      state.folderPalletView = action.payload
    },
    setFolderInfoBarState(state, action) {
      state.folderInfoBarState= action.payload
    },
    setFolderCuttentId(state, action) {
      state.folderCurrentId = action.payload;
    },
    setFolderScrollPosition(state, action) {
      state.folderScrollPosition = action.payload;
    },
    setSidebarScrollPosition(state, action) {
      state.sidebarScrollPosition = action.payload;
    }
  }
});

export const {setFolderPalletView, setFolderInfoBarState, setFolderCuttentId, setFolderScrollPosition, setSidebarScrollPosition} = folderSlice.actions;

export default folderSlice.reducer;

export const selectFolderPalletView = (state: RootState) => state.folder.folderPalletView;
export const selectFolderInfoBar = (state: RootState) => state.folder.folderInfoBarState;
export const selectFolderCurrentId = (state: RootState) => state.folder.folderCurrentId;
export const selectFolderScrollPosition = (state: RootState) => state.folder.folderScrollPosition;
export const selectSidebarScrollPosition = (state: RootState) => state.folder.sidebarScrollPosition;