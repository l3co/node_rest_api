import mongoose from "mongoose";

const editorasSchema = new mongoose.Schema(
    {
        id: { type: String },
        nome: { type: String, require: true }
    }
)

const editora = mongoose.model("editoras", editorasSchema)

export default editora