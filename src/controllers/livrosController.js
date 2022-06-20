import livros from "../models/Livros.js";

export default class LivrosController {
    listarLivros = (_, resp) => {
        livros.find((err, livros) => this.#tratarResultado(err, livros, resp))
    }

    buscarPeloID = (req, resp) => {
        let id = req.params.id;
        livros.findById(id, (err, livro) => this.#tratarResultado(err, livro, resp));
    }

    cadastrar = (req, resp) => {
        let livro = new livros(req.body);
        livro.save((err) => {
            if (err) {
                resp.status(500).json({ "message": err })
            } else {
                resp.status(201).send(livro.toJSON())
            }
        })
    }

    #tratarResultado(err, result, respose) {
        if (err) {
            console.err(`Erro ao buscar os dados: `, err);
        } else {
            respose.status(200).json(result)
        }
    }
}
