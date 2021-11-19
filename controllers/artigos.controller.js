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
    const artigoLista = tabelaArtigo
    .findAll()
    .then((data) => response.send(data))
        .catch((error) => {
            console.log(error);
            response.status(500).send("Ocorreu um erro obtendo os artigos")
        
        })
};


exports.findById = (request, response) =>{
    const artigoFind = tabelaArtigo
    .findOne({where: {id: request.param.id}})
    .then((data) => response.send(data))
        .catch((error) => {
            console.log(error)
            response.status(500).send("Ocorreu um erro ao encontrar o arquivo", {id})
        })
};
