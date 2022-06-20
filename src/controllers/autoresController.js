import autores from "../models/Autor.js";

export default class AutoresController {
    static listarAutores = (_, resp) => {
        autores.find((err, autores) => {
            if (err) {
                resp.status(400).send({ "message": err.message })
            } else {
                resp.status(200).json(autores)
            }
        })
    }

    static buscarPeloID = (req, resp) => {
        let id = req.params.id;
        autores.findById(id, (err, autor) => {
            if (err) {
                resp.status(400).send({ "message": err.message })
            } else {
                resp.status(200).json(autor)
            }
        });
    }

    static cadastrar = (req, resp) => {
        let autor = new autores(req.body);
        autor.save((err) => {
            if (err) {
                resp.status(500).json({ "message": err })
            } else {
                resp.status(201).send(autor.toJSON())
            }
        })
    }

    static atualizarAutor = (req, resp) => {
        let id = req.params.id;
        autores.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (err) {
                resp.status(500).send({ "message": err.message })
            } else {
                resp.status(200).send({ "message": "autor atualizado com sucesso" })
            }
        })
    }

    static excluirAutor = (req, resp) => {
        let id = req.params.id;
        autores.findByIdAndDelete(id, (err) => {
            if (err) {
                resp.status(500).send({ "message": err.message })
            } else {
                resp.status(200).send({ "message": "autor removido com sucesso" })
            }
        })
    }
}
