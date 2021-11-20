//model da tabela de artigos

//titulo, descricao, publicado

module.exports = (sequelizeDataBase, Sequelize) => {
    //criando uma variavel que recebe uma tabela chamada 'artigo' que tera os campos 'titulo, descricao, publicado'
    const Artigo = sequelizeDataBase.define("artigos", {
        titulo: {
            type: Sequelize.STRING
        },
        descricao: {
            type: Sequelize.STRING,
            allowNull: false,
            //descrição padrão
            defaultValue: "Artigo em construção"
        },
        publicado: {
            type: Sequelize.BOOLEAN
        }
    });

    return Artigo;
};