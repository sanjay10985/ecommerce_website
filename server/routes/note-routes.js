import express from 'express'
import { createNote, deleteNote,editNote, getNotes } from '../controllers/note-controller.js';

const router = express.Router();

router.get("/getnotes", getNotes)
router.post("/createnote", createNote);
router.delete("/deletenote/:id", deleteNote);
router.put("/editnote/:id", editNote)

export default router;