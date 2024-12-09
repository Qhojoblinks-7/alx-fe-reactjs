import { create } from  'zustand'

const createUserSlice = (set) => ({
    user: {
        name: '',
        email: '',
        isAuthenticated: false,
    },

    //Purpose:
// Defines the login action. It takes name and email as arguments and sets the user state:
// Updates the user's name and email.
// Sets isAuthenticated to true.
// Why? This is how a user logs into the app.
    login: (name, email) => set({
        user: {name, email, isAuthenticated: true}
    }),


// Purpose:
// Defines the logout action. It clears the user data and sets isAuthenticated to false.
// Why? This action is used to log the user out.
    logout: () => set(
        {user: {name: '', email: '', isAuthenticated: false}}
    ),

    
// Purpose:
// Defines the updateUser action. It takes an updatedUser object and updates specific fields in the user state without overwriting the rest.
// ...state.user: Keeps the current user details.
// ...updatedUser: Overwrites the updated fields.
// Why? This allows users to change their profile details without resetting the entire state.
    updateUser: (updateUser) => set(
        (state) => ({user: {...state.user, ...updateUser}})
    )
})


// Purpose:
// Defines the addTask action. It:
// Takes a task object.
// Adds it to the existing tasks array (...state.tasks).
// Sets completed to false for new tasks.
// Why? This action allows users to add new tasks.
const createTasksSlice = (set) => (
    {
        tasksList: [],
        addTask: (task) => set(
            (state) => ({tasksList: [...state.tasksList, {...task, complete: false}]})
        ),


// Purpose:
// Defines the completeTask action. It:
// Takes the index of a task in the tasks array.
// Updates the completed field of the matching task to true.
// Keeps other tasks unchanged.
// Why? This action marks a specific task as completed.
        completeTask: (index) => set((state) => 
        ({
            tasksList: state.tasks.map((task, taskIndex) =>
            taskIndex === index ? {...task, complete: true} : task),
        
        })),

        removeTask: (index) => set((state) => ({
            tasksList: state.tasksList.filter((removed, removedIndex) => removedIndex !== index),
        }))
    }
);

const useDashboardStore = create ((set) => ({
    ...createUserSlice(set),
    ...createTasksSlice(set),
}));

export default useDashboardStore;