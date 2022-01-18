import * as api from '../api/index.js';

import {newMessage, viewChat} from "../store/chatSlice"


export const createMessage = (formData, router) => async (dispatch) => {
    try {
        const {data} = await api.createChat(formData);

        dispatch(newMessage(data));
    } catch (error) {
        console.log(error);
    }
};

export const viewChats = () => async (dispatch) => {
    try {
        const {data} = await api.getChat();

        dispatch(viewChat(data));
    } catch (error) {
        console.log(error);
    }
};