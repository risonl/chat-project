import mongoose from 'mongoose';
import PostChat from '../models/postChat.js';

export const getChat = async (req, res) => {
    try {
        const postChat = await PostChat.find();

        res.status(200).json(postChat)
    }
    catch (error) {
        res.status(404).json({message: error.message});
    }
};

export const createChat = async (req, res) => {
    const chat = req.body;
    const newChatMessage = new PostChat({...chat, createdAt: new Date().toISOString()});
    
    try {
        await newChatMessage.save();

        res.status(201).json(newChatMessage)
    }
    catch (error) {
        res.status(409).json({message: error.message});
    }
};

