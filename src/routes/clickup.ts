import { Router, Request, Response } from "express";

const router = Router();

router.get("/auth", (req: Request, res: Response) => {
  res.send("Rota de autenticação ClickUp funcionando!");
});

router.get("/callback", async (req: Request, res: Response) => {
  res.send("Rota de callback ClickUp funcionando!");
});

router.post("/create-task", async (req: Request, res: Response) => {
  res.send("Criação de tarefa ClickUp funcionando!");
});

export default router;
