import express from 'express';
import { getChat, createChat } from '../controller/generalchat.js';

const router = express.Router();

router.get('/', getChat);
router.post('/', createChat)

export default router