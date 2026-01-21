import bcrypt from "bcrypt";
import prisma from "../prisma.js";
import { generarToken } from "../utils/jwt.js";

export const login = async (req, res) => {
const { email, password } = req.body;

const usuario = await prisma.usuario.findUnique({ where: { email } });

if (!usuario) {
return res.status(401).json({ message: "Credenciales incorrectas" });
}

const valido = await bcrypt.compare(password, usuario.password);

if (!valido) {
return res.status(401).json({ message: "Credenciales incorrectas" });
}

const token = generarToken(usuario);

res.json({
token,
usuario: {
id: usuario.id,
nombre: usuario.nombre,
rol: usuario.rol
}
});
};