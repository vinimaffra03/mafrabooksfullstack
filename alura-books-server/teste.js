const fs = require("fs");

const dadosAtuais = JSON.parse(fs.readFileSync("livros.json"));
const dadosNovos = { id: 3, nome: "Livro mais que demais" };

//testando dados atuais antes de adicionar novos livros
console.log(dadosAtuais);

// adicionando livros atuais com spread e escrevendo novo objeto dentro do json
// stringify abrangendo todo o write
fs.writeFileSync("livros.json", JSON.stringify([...dadosAtuais, dadosNovos]));

console.log(dadosAtuais);
