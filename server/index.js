import express from 'express';
import  mongoose  from 'mongoose';
import cors from 'cors';

import chatRoutes from './routes/chat.js';



const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors())

const PORT= 5000;
const CONNECTION_URL = "mongodb+srv://arrayclass:array123@cluster0.wyyr0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// app.post('/chat', (req, res) => {
//     const body = req.body;

//     res.status(200).json([
//         body
//     ])
// }); 

// app.get('/chat', (req,res) =>{
//     res.status(200).send("successful get")
// });

app.use('/chat', chatRoutes);

// mongoose.connect(CONNECTION_URL)
//     .then(()=> app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`)))
//     .catch((err) => console.log(err.message));

app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))