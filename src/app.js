import express from "express";
import db from "./config/dbConnection.js";
import livros from "./models/Livros.js";

import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Erro de conexão"))
db.on("open", () => console.log("Conexão estabelecida com sucesso"))

const app = express();
routes(app)

export default app