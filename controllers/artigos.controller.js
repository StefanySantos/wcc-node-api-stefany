//regra de negocios do sistema de artigos

const { response, request } = require("express");
const database = require("../models");
const tabelaArtigo = database.artigos;

//cria um novo artigo
exports.create = (request, response) => {
    //boa pratica para não alterar o artigo json
    const artigo = {
        titulo: request.body.titulo,
        descricao: request.body.descricao,
        publicado: request.body.publicado
    };

    if (!artigo.titulo) {
        return response.status(400).send("Voce precisa de um titulo")
    }

    //promise pode ou não ser resolvida - e o tempo tambem varia podendo ou nao estourar um erro para o user
    tabelaArtigo.create(artigo)
        //entao crie o artigo e retorne o sucesso
        .then(() => response.send("Artigo criado com sucesso"))
        //caso nao de certo retorne o erro status 500
        .catch((error) => {
            console.log(error);
            response.status(500).send("Ocorreu um erro ao salvar o artigo");
        })


};

exports.findAll = (request, response) => {
    tabelaArtigo.findAll()
        .then(function(data) {
            response.send(data)
        })
        .catch(function(error) {
            console.log(error);
            response.status(500).send("Ocorreu um erro obtendo os artigos")
        })
};

//object destructuring ou desestruturação de objeto
exports.findById = (request, response) => {
    const { id } = request.query;
    tabelaArtigo.findByPk(id)
        .then((data) => {
            if (data) {
                response.send(data);
            } else {
                response
                    .status(404)
                    .send(`Não foi possível encontrar nenhum artigo com o id ${id} `);
            }
        })
        .catch(() =>
            response.status(500).send(`Ocorreu um erro ao buscar o artigo com esse id ${id}`)
        );
};

exports.findByTitulo = (request, response) => {
    const { titulo } = request.query;
    tabelaArtigo.findOne({ where: { titulo } })
        .then((data) => {
            if (data) {
                response.send(data);
            } else {
                response
                    .status(404)
                    .send(`Não foi possível encontrar nenhum artigo com esse título ${titulo} `);
            }
        })
        .catch(() =>
            response
            .status(500)
            .send(`Ocorreu um erro ao buscar o artigo com o título ${titulo}`)
        );
};

exports.update = (request, response) => {
    tabelaArtigos
        .update(request.body, { where: { id: req.params.id } })
        .then((data) => response.send(data))
        .catch(() => response.status(500).send("Ocorreu um erro "));
};