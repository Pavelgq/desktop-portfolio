import { configureStore } from "@reduxjs/toolkit";

import mainReduser from "./mainStore";

export const store = configureStore({
  reducer: {
    main: mainReduser,
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;