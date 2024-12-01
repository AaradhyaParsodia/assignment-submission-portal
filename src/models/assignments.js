import mongoose from "mongoose";
import Users from "./users.js";

const assignmentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Users,
        required: true
    },
    adminId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Users,
        required: true
    },
    tasks: {
        type: String,
        required: true
    },
    isAccepted: {
        type: Boolean
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

export default mongoose.model("Assignments", assignmentSchema);