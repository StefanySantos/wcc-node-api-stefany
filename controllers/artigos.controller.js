//regra de negocios do sistema de artigos

const { response } = require("express");
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

    //promise pode ou não ser resolvida
    tabelaArtigo.create(artigo)
        //entao crie o artigo e retorne o sucesso
        .then(() => response.send("Artigo criado com sucesso"))
        //caso nao de certo retorne o erro status 500
        .catch(() => response.status(500).send("Ocorreu um erro ao salvar o artigo"))

};