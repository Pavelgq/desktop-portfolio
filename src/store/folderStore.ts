import { createSlice } from "@reduxjs/toolkit";
import { PalletViewI } from "../interfaces/common";
import { RootState } from "./store";


export interface FolderVariantI {
    portfolio: number;
    courses: number;
    certificates: number;
  };
export interface FolderStoreInterface {
  folderPalletView: PalletViewI;
  folderInfoBarState: boolean;
  folderCurrentIds: FolderVariantI;
  folderScrollPosition: number;
  sidebarScrollPosition: number;
}

const initialState: FolderStoreInterface = {
  folderPalletView: 'Tile',
  folderInfoBarState: false,
  folderCurrentIds: {
    portfolio: 0,
    courses: 0,
    certificates: 0,
  },
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
    setCurrentId(state, action: {payload: {
      item: keyof FolderVariantI,
      id: number
    }}) {
      switch (action.payload.item) {
        case 'portfolio':
          state.folderCurrentIds.portfolio = action.payload.id
          break;
        case 'courses':
          state.folderCurrentIds.courses = action.payload.id
          break;
        case 'certificates':
          state.folderCurrentIds.certificates = action.payload.id
          break;
        default:
          break;
      }
      
    },
    setPortfolioCurrentId(state, action) {
      state.folderCurrentIds.portfolio = action.payload;
    },
    setCoursesCurrentId(state, action) {
      state.folderCurrentIds.courses = action.payload;
    },
    setFolderScrollPosition(state, action) {
      state.folderScrollPosition = action.payload;
    },
    setSidebarScrollPosition(state, action) {
      state.sidebarScrollPosition = action.payload;
    }
  }
});

export const {setFolderPalletView, setFolderInfoBarState, setPortfolioCurrentId, setCoursesCurrentId, setFolderScrollPosition, setSidebarScrollPosition, setCurrentId} = folderSlice.actions;

export default folderSlice.reducer;

export const selectFolderPalletView = (state: RootState) => state.folder.folderPalletView;
export const selectFolderInfoBar = (state: RootState) => state.folder.folderInfoBarState;
export const selectFolderCurrentIds = (state: RootState) => state.folder.folderCurrentIds;
export const selectFolderScrollPosition = (state: RootState) => state.folder.folderScrollPosition;
export const selectSidebarScrollPosition = (state: RootState) => state.folder.sidebarScrollPosition;