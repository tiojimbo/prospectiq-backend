"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/auth", (req, res) => {
    res.send("Rota de autenticação ClickUp funcionando!");
});
router.get("/callback", async (req, res) => {
    res.send("Rota de callback ClickUp funcionando!");
});
router.post("/create-task", async (req, res) => {
    res.send("Criação de tarefa ClickUp funcionando!");
});
exports.default = router;
