//import * as api from '../api/index.js';

import newMessage from "../store/chatSlice"

const api = ""
export const createMessage = (formData, router) => async (dispatch) => {
    try {
        const {data} = await api.createMessage(formData);

        dispatch(newMessage(data));
    } catch (error) {
        console.log(error);
    }
};