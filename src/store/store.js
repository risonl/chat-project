import {configureStore} from '@reduxjs/toolkit'
import messageReducer from './chatSlice'


export const store = configureStore({
    reducer: {
        chat: messageReducer,
    },
})