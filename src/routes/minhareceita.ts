import { Router } from "express";
const router = Router();

router.get("/empresas", (req, res) => {
  res.send("Rota de busca Minha Receita funcionando!");
});

export default router;
