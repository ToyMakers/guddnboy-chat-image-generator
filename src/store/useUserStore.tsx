import { create } from "zustand";

interface User {
    name: string;
    message: string;
    time: string;
}

interface UserList {
    users: User[];
    addUser: (user: User) => void;
    updateUser: (index: number, user: User) => void;
    removeUser: (index: number) => void;
}

export const useUserStore = create<UserList>((set) => ({
    users: [],

    addUser: (user) =>
        set((state) => ({
            users: [...state.users, user],
        })),

    updateUser: (index, user) =>
        set((state) => {
            const updatedUsers = [...state.users];
            updatedUsers[index] = user;
            return { users: updatedUsers };
        }),
    removeUser: (index: number) =>
        set((state) => ({
            users: state.users.filter((_, i) => i !== index),
        })),
}));
