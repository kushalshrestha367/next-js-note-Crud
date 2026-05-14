import type { NextFunction, Request, Response } from "express";
import NoteModel from "./noteModel.js";
import envConfig from "../config/config.js";
import createHttpError from "http-errors";


const createNote = async (req:Request, res:Response, next: NextFunction) => {
  try {
      // const file = req.file ? `${envConfig.backendUrl}/${req.file.filename}` : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYHA5wrJ9UjwKdl3YFTHNc_d2P6HVU4STcow&s";
   const {title,subtitle,description} = req.body;
   if(!title || !subtitle || !description ){
    res.status(400).json({
        message: "All fields are required"
    })
    return;
   }
   await NoteModel.create({
    title,
    subtitle,
    description,

   })
   res.status(201).json({
    message: "Note created successfully"
   });
  } catch (error) {
    console.log(error);
    return next(createHttpError(500, "Failed to create note"));
  }
}

const listNotes = async(req:Request, res:Response, next: NextFunction) => {
  try {
    const notes = await NoteModel.find();
    res.status(200).json({
        message: "Notes retrieved successfully",
        data: notes
    })
  } catch (error) {
    return next(createHttpError(500, "Failed to retrieve notes"));
  }
}
const singleNote = async(req:Request, res:Response, next: NextFunction) => {
  try {
    const {id} = req.params;
    const note = await NoteModel.findById(id);
    if(!note){
        res.status(404).json({
            message: "Note not found"
        })
        return;
    }
    res.status(200).json({
        message: "Note retrieved successfully",
        data: note
    })
  } catch (error) {
    return next(createHttpError(500, "Failed to retrieve note"));
  }
}

const deleteNote = async(req:Request, res:Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    await NoteModel.findByIdAndDelete(id);
    res.status(200).json({
        message: "Note deleted successfully"
    })
  } catch (error) {
    return next(createHttpError(500, "Failed to delete note"));
  }
}

export {createNote, listNotes, deleteNote, singleNote};