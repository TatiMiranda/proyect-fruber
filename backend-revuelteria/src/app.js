import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(errorHandler); // maneja errores internos del servidor en un solo lugar
app.use(notFound); // maneja rutas no encontradas
app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
res.json({ message: "API Revueltería funcionando" });
});


export default app;