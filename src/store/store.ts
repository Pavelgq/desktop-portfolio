import { configureStore } from "@reduxjs/toolkit";

import mainReduser from "./mainStore";
import folderReduser from "./folderStore";



export const store = configureStore({
  reducer: {
    main: mainReduser,
    folder: folderReduser
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;