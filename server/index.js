import express from 'express';
import  mongoose  from 'mongoose';
import cors from 'cors';
import chatRoutes from './routes/chat.js';
import testRoutes from './routes/test.js';
import  {Server}  from 'socket.io';
import {createServer} from 'http';



const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());


const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ['GET', 'POST']
  }
});

io.on('connection', (socket) => {
  console.log("New Connection..." + socket.id);


  // socket.on("userJoin", (room) => {
  //   socket.join(room)
  // });

  //send a message to everyone but the original sender
  socket.on("message", (data) => {
    //broadcast from the original sender socket
    socket.broadcast.emit("serverMessage", data, socket.id);

  });

  // socket.on("usermessage", (room, data) => {
  //   socket.leave("public")
  //   socket.join(room);
  //   console.log(data);
  //   socket.to(room).emit("serverMessage", data, socket.id); 
  //   io.to(socket.id).emit("PM", `message sent: ${data}`) //this is how you PM 
  // });

  

  // Here is where we handle the disconnect of a socket.
  socket.on("disconnect", (userList) => {
    console.log("user disconnected");
    //io.emit("userLeft", `${socket.id} disconnected`);
  });

  
});

const PORT= 4000;
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
app.use("/test", testRoutes)

 mongoose.connect(CONNECTION_URL)
     .then(()=> httpServer.listen(PORT,()=>console.log(`Server is running on port ${PORT}`)))
     .catch((err) => console.log(err.message));