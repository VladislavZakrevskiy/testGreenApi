import { configureStore, combineReducers } from "@reduxjs/toolkit";
import chatSlice from './reducers/ChatSlice';
import { chatApi } from "./API/ChatAPI";

const reducers = combineReducers({
  chatSlice,
  [chatApi.reducerPath]: chatApi.reducer
})

export const store = configureStore({
  reducer: reducers,
  devTools: import.meta.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat([chatApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;