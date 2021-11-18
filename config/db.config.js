//configuração do banco de dados

//instalar o dotenv (biblioteca) - npm install --save dotenv

const dotenv = require("dotenv");

dotenv.config();

module.exports = {
    //string conexao no banco
    connectionStringUrl: process.env.DB_CONNECTION_STRING_URL,
    dialect: 'postgres'
};