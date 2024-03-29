import {createSlice} from '@reduxjs/toolkit';

const initialState = [
    {
        id: '1',
        title: 'Task 1',
        description: 'Task descripttion',
        completed: false
    },
    {
        id: '2',
        title: 'Task 2',
        description: 'Task descripttion',
        completed: false
    },
]

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            console.log(state, action)
            state.push(action.payload)
        },
        editTask: (state, action) => {
            const {id, title, description} = action.payload;
            const foundTask = state.find((task) => task.id === id)
            if (foundTask) {
                foundTask.title = title;
                foundTask.description = description;
            }
        },
        deleteTask: (state, action) => {
            const foundTask = state.find((task) => task.id === action.payload)
            if (foundTask) {
                state.splice(state.indexOf(foundTask), 1)
            }
        }
    }
});

export const {addTask, editTask, deleteTask} = taskSlice.actions
export default taskSlice.reducer