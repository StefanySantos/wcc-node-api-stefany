const databaseConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

//conectando no banco
const sequelizeOptions = { dialect: databaseConfig.dialect }
const sequelizeDataBase = new Sequelize(databaseConfig.connectionStringUrl, sequelizeOptions);

const database = {
    Sequelize: Sequelize,
    sequelizeDataBase
};

const artigosModel = require("./artigos.model.js")
database.artigos = artigosModel(sequelizeDataBase, Sequelize);
//database.artigos = require("./artigos.model.js")(sequelizeDataBase, Sequelize)

//reutilizar trechos de códigos 
module.exports = database;