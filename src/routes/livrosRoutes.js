import express from "express";
import LivrosController from "../controllers/livrosController.js";

const routes = express.Router();

const controller = new LivrosController()

routes
    .get("/livros", controller.listarLivros)


export default routes