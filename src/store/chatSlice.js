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
        //    let plainPost
        //    let stylishPost = plainPost.classList.add('chatMessage')
        //    let chatBox = document.getElementsByClassName('chatBox')
        //    let appendedPost = chatBox.append(stylishPost)
        //    let finishedPost = appendedPost.appendChild(action.payload)
        //    return (
        //        finishedPost
        //    )
        },
    },
})

export const { newMessage } = chatSlice.actions

export const viewMessage = (state) => state.chat

export default chatSlice.reducer
