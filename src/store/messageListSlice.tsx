"use client";
import { MessageSlice } from "./messageSlice";

export interface MessageListSlice {
    users: MessageSlice[];

    setUsers: (users: MessageSlice[]) => void;
    addUserInformation: () => void;
    removeUserInformation: (userId: number) => void;
}
