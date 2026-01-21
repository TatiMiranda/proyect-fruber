import prisma from "../prisma.js";


const usuarios = await prisma.usuario.findMany();