import { createSlice } from '@reduxjs/toolkit'
import { current } from '@reduxjs/toolkit'

const chatSlice = createSlice({
    name: 'Chat',
    initialState: [],
    reducers: {
        newMessage: (state, action) => {
           state.push(action.payload)
           console.log(action.payload)
           console.log(current(state))
        },
        viewChat: (state, action) => {
            console.log(action.payload)
            state.push(...action.payload)
            state = action.payload
        }
    },
})

export const { newMessage, viewChat } = chatSlice.actions

export const viewMessage = (state) => state.chat

export default chatSlice.reducer
