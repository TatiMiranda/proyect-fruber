import jwt from "jsonwebtoken";

export const generarToken = (usuario) => {
return jwt.sign(
{
id: usuario.id,
rol: usuario.rol,
nombre: usuario.nombre
},
process.env.JWT_SECRET,
{ expiresIn: "8h" }
);
};