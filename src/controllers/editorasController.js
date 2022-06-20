import editoras from "../models/Editoras.js";

export default class EditorasController {
    static listarEditoras = (_, resp) => {
        editoras.find((err, editoras) => {
            if (err) {
                resp.status(400).send({ "message": err.message })
            } else {
                resp.status(200).json(editoras)
            }
        })
    }

    static buscarPeloID = (req, resp) => {
        let id = req.params.id;
        editoras.findById(id, (err, editoras) => {
            if (err) {
                resp.status(400).send({ "message": err.message })
            } else {
                resp.status(200).json(editoras)
            }
        });
    }

    static cadastrar = (req, resp) => {
        let editora = new editoras(req.body);
        editora.save((err) => {
            if (err) {
                resp.status(500).json({ "message": err })
            } else {
                resp.status(201).send(editora.toJSON())
            }
        })
    }

    static atualizarEditora = (req, resp) => {
        let id = req.params.id;
        editoras.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (err) {
                resp.status(500).send({ "message": err.message })
            } else {
                resp.status(200).send({ "message": "Editora atualizado com sucesso" })
            }
        })
    }

    static excluirEditora = (req, resp) => {
        let id = req.params.id;
        editoras.findByIdAndDelete(id, (err) => {
            if (err) {
                resp.status(500).send({ "message": err.message })
            } else {
                resp.status(200).send({ "message": "Editora removido com sucesso" })
            }
        })
    }
}
