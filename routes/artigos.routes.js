//rotas do sistemas de arquivos

/**
 * GET :
 *      - obter todos os artigos
 *      - obter um artigo especifico
 *      - obter todos os artigos publicados
 * 
 * POST: 
 *      - criar um novo artigo
 * 
 * PUT: 
 *      - Publicar meu artigo
 * 
 * DELETE:
 *      - Deletar meu artigo
 */

module.exports = (app) => {
    const artigosController = require("../controllers/artigos.controller");
    let router = require("express").Router();

    //chamando create da controller
    router.post("/", artigosController.create);
    router.get("/findAll", artigosController.findAll);
    router.get("/findByTitulo/:id", artigosController.findByTitulo);
    router.get("/findById/", artigosController.findById);


    app.use("/artigos", router);
}