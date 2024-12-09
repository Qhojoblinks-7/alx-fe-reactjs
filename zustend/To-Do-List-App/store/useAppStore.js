import { create } from 'zustand';

const createCounterSlice = (set) => ({
    count: 0,
    increment: () => set((state) => ({count: state.count + 1})),
    decrement: () => set((state) => ({count: state.count - 1})),
    reset: () => set({count: 0}),
});

//To-do slice
const createTodoSlice = (set) => ({
    todoList: [],
    addTodo: (todo) => set((state) =>({todoList: [...state.todoList, todo]})),
    removeTodo: (index) => set((state) => ({
        todoList: state.todoList.filter((removed, removedIndex) => removedIndex !== index),
    })),
});


//combine slices
const useAppStore = create((set) => ({
    ...createCounterSlice(set),
    ...createTodoSlice(set),
}));


export default useAppStore;

