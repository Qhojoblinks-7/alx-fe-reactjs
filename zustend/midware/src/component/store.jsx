import { create } from 'zustand';
import { persist, devtools} from 'zustand/middleware';

const useStore = create (
    devtools(
        persist(
            (set,get) => ({
                count: 0,
                increase: () => set((state) => ({count: state.count + 1})),
                decrease: ()  => set((state) => ({count: state.count - 1})),
                reset: () => set({count: 0})
            }),
            {
                name: 'counter-storage',//the name used for persisting state
                getStorage: () => localStorage// to store data in the storage of trhe local browser
            }
        )
    )
);