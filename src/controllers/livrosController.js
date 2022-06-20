import livros from "../models/Livros.js";

export default class LivrosController {
    static listarLivros = (_, resp) => {
        livros.find()
            .populate("autor")
            .exec((err, livros) => {
                if (err) {
                    resp.status(400).send({ "message": err.message })
                } else {
                    resp.status(200).json(livros)
                }
            })
    }

    static buscarPeloID = (req, resp) => {
        let id = req.params.id;
        livros.findById(id, (err, livro) => {
            if (err) {
                resp.status(400).send({ "message": err.message })
            } else {
                resp.status(200).json(livro)
            }
        });
    }

    static cadastrar = (req, resp) => {
        let livro = new livros(req.body);
        livro.save((err) => {
            if (err) {
                resp.status(500).json({ "message": err })
            } else {
                resp.status(201).send(livro.toJSON())
            }
        })
    }

    static atualizarLivro = (req, resp) => {
        let id = req.params.id;
        livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (err) {
                resp.status(500).send({ "message": err.message })
            } else {
                resp.status(200).send({ "message": "livro atualizado com sucesso" })
            }
        })
    }

    static excluirLivro = (req, resp) => {
        let id = req.params.id;
        livros.findByIdAndDelete(id, (err) => {
            if (err) {
                resp.status(500).send({ "message": err.message })
            } else {
                resp.status(200).send({ "message": "livro removido com sucesso" })
            }
        })
    }
}
