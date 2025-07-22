import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    todoName: {
        type: String,
        required: true
    },
    todoDescription: {
        type: String,
        required: true
    },
     todoPriority: {
        type: String,
        required: true
    },
    todoStatus: {
        type: Boolean,
        default: false,
    }
}, {
    timestamps: true
})


export default mongoose.model('Todo', userSchema);