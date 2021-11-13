const express = require("express"); //importando o express
const app = express();
const port = 8080; //server node

//criando rotas
//funçao callback pegando um dado
app.get("/", function(req, res) {
    res.send("minha primeira requisição");
});

app.get("/segunda-req", function(req, res) {
    res.send("Minha segunda requisicao");
})


app.listen(port, function() {
    console.log("Ouvindo a porta: ", port);
});