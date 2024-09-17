import { create, StateCreator } from "zustand";

interface MessageSlice {
    message: string;
    setMessage: (message: string) => void;
}

interface UserNameSlice {
    username: string;
    setUsername: (profile: string) => void;
}

const createMessageSlice: StateCreator<MessageSlice> = (set) => ({
    message: "",
    setMessage: (message) => set({ message }),
});

const createUserNameSlice: StateCreator<UserNameSlice> = (set) => ({
    username: "",
    setUsername: (username) => set({ username }),
});

export const useMessageStore = create<MessageSlice & UserNameSlice>()(
    (...a) => ({
        ...createMessageSlice(...a),
        ...createUserNameSlice(...a),
    })
);
