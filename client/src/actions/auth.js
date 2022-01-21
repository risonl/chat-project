import * as api from '../api/index.js';
// import { authenticate } from '../store/userSlice.js'

export const signIn = (formData, router) => async (dispatch) => {
    try {
        const {data} = await api.signIn(formData);
        //dispatch(authenticate(data));
        //router.push('/');
    } catch (error) {
        console.log(error);
    }
};

export const signUp = (formData, router) => async (dispatch) => {
    try {
        const {data} = await api.signUp(formData);
        //dispatch(authenticate(data));
        //router.push('/');
    } catch (error) {
        console.log(error);
    }
};