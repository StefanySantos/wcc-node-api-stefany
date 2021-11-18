const { application, response } = require("express");
const express = require("express"); //importando o express
const app = express();
const port = 8080; //server node

//npm install --save dev nodemon    restart o server automaticamente

//leia arquivos de json
app.use(express.json());


app.get("/", function(request, response) {
    //console.log(request.body)
    response.send("Dasa Educa - Artigos");
});

const database = require("./models");
database.sequelizeDataBase.sync();
//database.sequelizeDataBase.sync({ force: true }).then(() => {
//    console.log("drop and re- sync db");
//});


const router = require("./routes/artigos.routes");
router(app);

app.listen(port, function() {
    console.log("Ouvindo a porta: ", port);
});