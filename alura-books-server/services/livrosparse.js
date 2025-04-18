const fs = require("fs");

function getTodosLivros() {
  return JSON.parse(fs.readFileSync("livros.json"));
}

function getLivroPorId(id) {
  const livros = JSON.parse(fs.readFileSync("livros.json"));

  const livroFiltrado = livros.filter((livro) => livro.id == id)[0];
  // sempre conferir o operador de comparacao para evitar erros de tipo
  // sempre ira retornar apenas um resultado pois id sempre sera unico e acessamos o indice 0 tendo certeza desse id

  return livroFiltrado;
}

function insereLivro(livroNovo) {
  const livros = JSON.parse(fs.readFileSync("livros.json"));

  const novaListaDeLivros = [...livros, livroNovo];

  fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros));
}

module.exports = {
  getTodosLivros,
  getLivroPorId,
  insereLivro,
};
