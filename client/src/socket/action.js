import io from "socket.io-client" //this doesn't seem to be working
const ENDPOINT = "http://localhost:4000"

const socket = io(ENDPOINT);


socket.on('connect', () => {
    console.log("connected to server")
  //console.log(`connected as ${socket.id}`)
  //socket.emit("userJoin", "public")
})

socket.on("greeting", greeting => console.log(greeting))

socket.on("serverMessage", (data, id) => {
  //dispatch(messageReducer(data))
  console.log(`from ${id}: ${data}`)
})

socket.on("PM", data => {
  //dispatch(messageReducer(data))
  console.log(`from server: ${data}`)
})

socket.on("userLeft", (exit) => {
  console.log(exit);

});

export default socket