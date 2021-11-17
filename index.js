const { application } = require("express");
const express = require("express"); //importando o express
const app = express();
const port = 8080; //server node

//leia arquivos de json
app.use(express.json());

//criando rotas - endpoint
//funçao callback pegando um dado
app.get("/", function(req, res) {
    res.send("minha primeira requisição");
});

app.get("/segunda-req", function(req, res) {
    res.send("Minha segunda requisicao");
})

app.get("/com-parametros", function(req, res) {
    if (req.query.nome === 'stefany') {
        res.send("stefany chamou requisição")
    }
    res.send('Com parametros funciona! bora viajar ' + req.query.nome /*+ req.query.sobrenome*/ );
});


//post
app.post("/meu-primeiro-post", function(req, res) {
    //imprima requisições do body
    console.log(req.body);
    res.send("meu post funciona");
});

//put
app.put("/meu-primeiro-put/:id", function(req, res) {
    console.log(req.body, req.params.id);
    res.send("meu put funciona");
});

//delete
app.delete("/meu-primeiro-delete/:id", function(req, res) {
    console.log(req.params.id);
    res.send("meu delete funciona " + req.params.id)
})

app.listen(port, function() {
    console.log("Ouvindo a porta: ", port);
});