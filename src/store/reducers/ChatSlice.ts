//@ts-nocheck
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";

interface AuthState {
  user?: IUser ;
  receiptId: number
  chatId: string
  chatIdArray: string[]
}

const initialState: AuthState = {
  user: {apiTokenInstance: '', idInstance: ''},
  receiptId: 1,
  chatId: '',
  chatIdArray: []
};

export const chatSlice = createSlice({
  name: "chatSlice",
  initialState,
  reducers: {
    userInfo: (state, action: PayloadAction<IUser>) => {
        state.user = action.payload;
    },
    setLastNotification: (state, action) => {
        state.receiptId = action.payload
    },
    setChatId: (state, action) => {
      state.chatId = action.payload
    },
    pushChatId: (state, action) => {
      state.chatIdArray.push(action.payload)
    }
  },
});

export const { userInfo, setLastNotification, setChatId, pushChatId } = chatSlice.actions;
export default chatSlice.reducer;


