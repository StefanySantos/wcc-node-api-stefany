const { application } = require("express");
const express = require("express"); //importando o express
const app = express();
const port = 8080; //server node

//npm install --save dev nodemon    restart o server automaticamente

//leia arquivos de json
app.use(express.json());


app.get("/", function(req, res) {
    res.send("Dasa Educa - Artigos");
});


app.listen(port, function() {
    console.log("Ouvindo a porta: ", port);
});