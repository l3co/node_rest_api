import mongoose from "mongoose";

mongoose.connect("mongodb+srv://l3costa:1234@cluster0.ejefg.mongodb.net/node_rest")

let db = mongoose.connection

export default db