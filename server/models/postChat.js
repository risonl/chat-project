import mongoose from "mongoose";

const chatSchema = mongoose.Schema({
    text:{type: String, required: true},
    createdAt:{
        type: Date,
        default: new Date(),
    }
});

const PostChat = mongoose.model('PostChat', chatSchema);

export default PostChat