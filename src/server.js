//Importa as dependências que acabamos de instalar
const express = require("express");
const path = require("path");

const app = express();

// Serve os arquivos estáticos da pasta dist (gerada pelo ng build)
app.use(express.static(__dirname + "/dist/botpodcut"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/botpodcut/index.html"));
});

for(i =0; i < 20; i++){
    console.log('Rodando arquivo server.js')
}

// Inicia a aplicação pela porta configurada
app.listen(process.env.PORT || 8080);