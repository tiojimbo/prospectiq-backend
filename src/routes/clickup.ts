import { Router } from "express";
const router = Router();

router.get("/auth", (req, res) => {
  res.send("Rota de autenticação ClickUp funcionando!");
});

export default router;
