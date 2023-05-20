//@ts-nocheck
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IMessage } from "../../models/IMessage";
import { IUser } from "../../models/IUser";

export const chatApi = createApi({
  reducerPath: "chatApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.green-api.com" }),
  tagTypes: ["Message, Notification"],
  endpoints: (build) => ({
    sendMessage: build.mutation({
        query: (arg: ISendMessage) => ({
            url: `/waInstance${arg.user.idInstance}/sendMessage/${arg.user.apiTokenInstance}`,
            method: "POST",
            body: arg.message 
        })
    }),

    getNotification: build.query({
        query: (user: IUser) => `/waInstance${user.idInstance}/receiveNotification/${user.apiTokenInstance}`
    }),

    deleteNotification: build.mutation({
        query: (arg: IDeleteNotificatio) => ({
            url: `/waInstance${arg.user.idInstance}/deleteNotification/${arg.user.apiTokenInstance}/${arg.receiptId}`,
            method: "DELETE"
        })
    }),
    getHistory: build.mutation({
        query: (arg: IGetHistory) => ({
            url: `/waInstance${arg.user.idInstance}/GetChatHistory/${arg.user.apiTokenInstance}`,
            body: {
                chatId: arg.chatId,
                count: 100
            },
            method: "POST"
        })
    })
  })
});

export const {
  useDeleteNotificationMutation, 
  useGetNotificationQuery,
  useGetHistoryMutation,
  useSendMessageMutation
} = chatApi;

interface IGetHistory {
    user: IUser
    chatId: string
}

interface IDeleteNotificatio {
    user: IUser
    receiptId: number
}

interface ISendMessage {
    user: IUser
    message: IMessage
}



