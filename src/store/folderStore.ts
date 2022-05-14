import { createSlice } from "@reduxjs/toolkit";
import { PalletViewI } from "../interfaces/common";
import { RootState } from "./store";


export interface FolderStoreInterface {
  folderPalletView: PalletViewI;
  folderInfoBarState: boolean;
  folderCurrentId: number;
}

const initialState: FolderStoreInterface = {
  folderPalletView: 'Tile',
  folderInfoBarState: true,
  folderCurrentId: 0,
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
    }
  }
});

export const {setFolderPalletView, setFolderInfoBarState, setFolderCuttentId} = folderSlice.actions;

export default folderSlice.reducer;

export const selectFolderPalletView = (state: RootState) => state.folder.folderPalletView;
export const selectFolderInfoBar = (state: RootState) => state.folder.folderInfoBarState;
export const selectFolderCurrentId = (state: RootState) => state.folder.folderCurrentId;