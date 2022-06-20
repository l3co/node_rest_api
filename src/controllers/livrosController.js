import livros from "../models/Livros.js";

export default class LivrosController {
    listarLivros = (req, resp) => {
        livros.find((err, livros) => this.#tratarResultado(err, livros, resp))
    }

    #tratarResultado(err, result, respose) {
        if (err) {
            console.err(`Erro ao buscar os dados: `, err);
        } else {
            respose.status(200).json(result)
        }
    }
}
