import create from 'zustand';

//create a store to manage the counter store
const useStore = create((set) => ({
    counter: 0,
    increment: () => set((state) => ({counter: state.counter+1})),
    decrement: () => set((state) => ({counter: state.counter-1}))
}));