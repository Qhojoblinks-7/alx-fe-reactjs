import { create } from 'zustand';
import useMessageStore from './useMessageStore';

const useTaskStore = create ((set) => ({
    taskList: [],
    addTask: (task) => {
        set((state) => ({taskList: [...state.taskList, task]}));
    },

    removeTask: (taskId) => {
        set((state) => ({taskList: state.taskListfilter(task => task.id !== taskId)}))
    },

    toggleTask: (id) => {
        set((state) => ({
            taskList: state.taskList.map(task =>task.id === id ? {...task, completed: !task.completed} : task
            ),
        }));
    },

    fetchTasks : async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await response.json();
            set({taskList: data.slice(0, 5)});
            useMessageStore.getState().setMessage('Tasks fetched successfully', 'success');
        }catch(error){
            console.error('Error fetching tasks:', error);
            useMessageStore.getState().setMessage('Error fetching tasks', 'error');
        }
    }
}))

export default useTaskStore;