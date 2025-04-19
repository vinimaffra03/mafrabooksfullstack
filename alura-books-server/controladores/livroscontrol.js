const {
  getTodosLivros,
  getLivroPorId,
  insereLivro,
  modificaLivro,
  deletaLivroPorId,
} = require("../services/livrosparse.js");

function getLivros(req, res) {
  try {
    //throw new Error("TESTE DE ERRO !");
    const livros = getTodosLivros();
    res.send(livros);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function getLivro(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      const livro = getLivroPorId(id);
      res.send(livro);
    } else {
      res.status(422);
      res.send("ID invalido, ID deve ser um numero");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function postLivro(req, res) {
  try {
    const livroNovo = req.body;

    if (req.body.nome) {
      insereLivro(livroNovo);
      res.status(201);
      res.send("Livro adicionado com sucesso");
    } else {
      res.status(422);
      res.send("Nome do livro é obrigatório");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function patchLivro(req, res) {
  try {
    const id = req.params.id;
    const body = req.body;

    modificaLivro(body, id);
    res.send("Livro alterado com sucesso");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function deleteLivro(req, res) {
  try {
    const id = Number(req.params.id);

    if (id && Number(id)) {
      deletaLivroPorId(id);
      res.send("livro deletado com sucesso");
    } else {
      res.status(422);
      res.send("ID invalido, ID deve ser um numero");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

module.exports = {
  getLivros,
  getLivro,
  postLivro,
  patchLivro,
  deleteLivro,
};
