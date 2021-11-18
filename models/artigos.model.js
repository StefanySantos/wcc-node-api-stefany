//model da tabela de artigos

//titulo, descricao, publicado

module.exports = (sequelizeDataBase, Sequelize) => {
    const Artigo = sequelizeDataBase.define("artigos", {
        titulo: {
            type: Sequelize.STRING
        },
        descricao: {
            type: Sequelize.STRING
        },
        publicado: {
            type: Sequelize.BOOLEAN
        }
    });

    return Artigo;
};