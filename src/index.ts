import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import clickupRoutes from "./routes/clickup";
import minhaReceitaRoutes from "./routes/minhareceita";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/clickup", clickupRoutes);
app.use("/minhareceita", minhaReceitaRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
