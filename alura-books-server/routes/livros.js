const { Router } = require("express");
// criando instancia do Router
const router = Router();

// usando get com router para criar uma rota
// sempre conferir a rota que está sendo criada
// e a rota que está sendo usada no app.js
router.get("/", (req, res) => {
  res.send("Criando rota /livros com express");
});

module.exports = router;
// exportando o router
