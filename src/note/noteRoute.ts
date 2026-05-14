import express from 'express';
import { createNote, deleteNote, listNotes, singleNote } from './noteController.js';
import {multer, storage} from '../middlewares/multerMiddleware.js';

const noteRoute = express.Router();
const upload = multer({ storage: storage });

noteRoute.route("/").post(upload.single('file'), createNote)
noteRoute.route("/list").get(listNotes);
noteRoute.route("/:id").delete(deleteNote);
noteRoute.route("/list/:id").get(singleNote);

export default noteRoute;

