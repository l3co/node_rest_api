import express from "express";
import LivrosController from "../controllers/livrosController.js";

const routes = express.Router();

const controller = new LivrosController()

routes
    .get("/livros", controller.listarLivros)
    .get("/livros/:id", controller.buscarPeloID)
    .post("/livros", controller.cadastrar)


export default routes