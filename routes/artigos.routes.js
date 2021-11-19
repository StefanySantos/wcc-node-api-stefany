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

    app.use("/artigos", router);
}

//module.exports = (app) => {
//    const artigosListaController = require("../controllers/artigos.controller");
//    let router = require("express").Router();

//    router.get("/", artigosListaController);

//    app.use("/artigos", router);
//}