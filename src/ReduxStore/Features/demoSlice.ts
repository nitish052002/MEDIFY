import { createSlice } from "@reduxjs/toolkit";
import generateUniqueID from "../../utils/idGenerator";


interface TODO {
    id: number,
    label: string

}

interface State {
    todo: TODO[]
    error: string | null
}

const initialState: State = {
    todo: [{ id: 33, label: "walking" }],
    error: null
}


const demoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodoController: (state, action) => {

            const id = generateUniqueID()
            const todo = {
                id: id,
                label: action.payload
            }
            state.todo.push(todo)




        },

        generateError: (state, action) => {
            return {
                ...state,
                error: action.payload
            }
        }
    }
})

export default demoSlice.reducer

export const { addTodoController, generateError } = demoSlice.actions