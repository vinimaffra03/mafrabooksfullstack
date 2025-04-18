const { Router } = require("express");
const {
  getLivros,
  getLivro,
  postLivro,
} = require("../controladores/livroscontrol.js");

// criando instancia do Router
const router = Router();

// usando get com router para criar uma rota
// sempre conferir a rota que está sendo criada
// e a rota que está sendo usada no app.js
// GET's para livros e livro por id
router.get("/", getLivros);

router.get("/:id", getLivro);

// POST
router.post("/", postLivro);

// PATCH
router.patch("/", (req, res) => {
  res.send("Voce fez uma requisicao do tipo PATCH !");
});

// DELETE
router.delete("/", (req, res) => {
  res.send("Voce fez uma requisicao do tipo DELETE !");
});

module.exports = router;
// exportando o router
