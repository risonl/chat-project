
import {createSlice} from 'redux-toolkit'

export const userSlice = createSlice ({
    name: 'User',
    initialState: '',
    reducers: {
        setUser: (state , action) => { 

        },
        setColor: () => {

        },
        setAvi: () => {

        },
    },
})

export default userSlice.reducer

export const { setUser } = userSlice.actions