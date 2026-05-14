import mongoose from "mongoose";
import type { Note } from "./nodeTypes.js";

const noteSchema = new mongoose.Schema<Note>({
    title:{
        type: String,
        required: true
    },
    subtitle:{
        type: String,
    },
    description:{
        type: String,
        required: true
    },
    file:{
        type: String,
    },
},{timestamps: true});

const NoteModel = mongoose.model<Note>('Note', noteSchema);
export default NoteModel;