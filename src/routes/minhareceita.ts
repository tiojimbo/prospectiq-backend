import { Router, Request, Response } from "express";
import axios from "axios";

const router = Router();

router.get("/empresas", async (req: Request, res: Response) => {
  try {
    const { uf, atividade, municipio, natureza_juridica, porte } = req.query;

    const response = await axios.get("https://minhareceita.org/search", {
      params: {
        uf,
        atividade,
        municipio,
        natureza_juridica,
        porte,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error("Erro ao buscar dados da Minha Receita:", error);
    res.status(500).json({ error: "Erro ao buscar dados da Minha Receita" });
  }
});

export default router;
