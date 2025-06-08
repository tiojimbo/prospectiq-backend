"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const axios_1 = __importDefault(require("axios"));
const router = (0, express_1.Router)();
router.get("/empresas", async (req, res) => {
    try {
        const { uf, atividade, municipio, natureza_juridica, porte } = req.query;
        const response = await axios_1.default.get("https://minhareceita.org/search", {
            params: {
                uf,
                atividade,
                municipio,
                natureza_juridica,
                porte,
            },
        });
        res.json(response.data);
    }
    catch (error) {
        console.error("Erro ao buscar dados da Minha Receita:", error);
        res.status(500).json({ error: "Erro ao buscar dados da Minha Receita" });
    }
});
exports.default = router;
