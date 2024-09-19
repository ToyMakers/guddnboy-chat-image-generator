import { create, StateCreator } from "zustand";
import { MessageSlice } from "./messageSlice";
import { MessageListSlice } from "./messageListSlice";

const createMessageSlice: StateCreator<MessageSlice & MessageListSlice> = (
    set
) => ({
    username: "",
    message: "",
    time: "",

    users: [],
    setUsers: (users) => set({ users }),
    addUserInformation: () => {},
    removeUserInformation: () => {},

    setUsername: (username) => set({ username }),
    setMessage: (message) => set({ message }),
    setTime: (time) => set({ time }),
});

export const useMessageStore = create<MessageSlice & MessageListSlice>()(
    (...a) => ({
        ...createMessageSlice(...a),
    })
);
