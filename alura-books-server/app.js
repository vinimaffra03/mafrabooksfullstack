// importando express
const express = require("express");

// importando rota livros
const rotaLivros = require("./routes/livros.js");

const cors = require("cors");

// usando express para criar um servidor
const app = express();

// usando express para fazer o parse do json extremamente importante
app.use(express.json());

app.use(cors({ origin: "*" }));

// definindo a rota /livros para usar o arquivo de rotas livros.js
app.use("/livros", rotaLivros);

// definindo a porta
const port = 8000;

// usando o express para criar uma rota
//app.get("/", (req, res) => {
//  res.send("Hello World Tesing nodemon!");
//});

// usando listen em uma porta para exibir algo no console
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
