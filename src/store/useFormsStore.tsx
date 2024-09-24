import { create } from "zustand";

interface userForms {
    userForms: number[];
    addUserForm: () => void;
    removeUserForm: (indexToRemove: number) => void;
}

export const useFormsStore = create<userForms>((set) => ({
    userForms: [0],

    addUserForm: () => {
        set((state) => ({
            userForms: [...state.userForms, state.userForms.length],
        }));
    },

    removeUserForm: (indexToRemove) => {
        set((state) => ({
            userForms: state.userForms.filter(
                (_, index) => index !== indexToRemove
            ),
        }));
    },
}));
