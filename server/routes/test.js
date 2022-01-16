import express from "express";
import {getTest, postTest} from '../controller/test.js';

const router = express.Router()

router.get('/get', getTest);
router.post('/post', postTest);

export default router