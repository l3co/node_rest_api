import express from "express";
import Controller from "../controllers/editorasController.js";

const routes = express.Router();

routes
    .get("/editoras", Controller.listarEditoras)
    .get("/editoras/:id", Controller.buscarPeloID)
    .post("/editoras", Controller.cadastrar)
    .put("/editoras/:id", Controller.atualizarEditora)
    .delete("/editoras/:id", Controller.excluirEditora)


export default routes