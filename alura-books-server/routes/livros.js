const { Router } = require("express");
const {
  getLivros,
  getLivro,
  postLivro,
  patchLivro,
  deleteLivro,
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
router.patch("/:id", patchLivro);

// DELETE
router.delete("/:id", deleteLivro);

module.exports = router;
// exportando o router
