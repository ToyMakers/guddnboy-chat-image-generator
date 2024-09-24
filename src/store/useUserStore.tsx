import { create } from "zustand";

interface User {
    name: string;
    message: string;
    time: string;
}

interface UserList {
    users: User[];
    addUser: (user: User) => void;
    removeUser: (name: string) => void;
    clearUsers: () => void;
}

export const useUserStore = create<UserList>((set) => ({
    users: [],

    addUser: (user) =>
        set((state) => ({
            users: [...state.users, user],
        })),

    removeUser: (name) =>
        set((state) => ({
            users: state.users.filter((user) => user.name !== name),
        })),

    clearUsers: () => set(() => ({ users: [] })),
}));
