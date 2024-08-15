// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client"; // Importamos PrismaClient de @prisma/client

const prisma = new PrismaClient(); // Creamos una instancia de PrismaClient

// Exportamos una función asíncrona que maneja las solicitudes a esta ruta API
export default async (req, res) => {
  const { url } = req.body;
  const shortUrl = Math.random().toString(36).substring(2, 7);

  try {
    // Intentamos crear un nuevo registro en la base de datos con la URL original y la URL corta
    const data = await prisma.link.create({
      data: { url, shortUrl },
    });
    return res.status(200).send(data); // Enviamos una respuesta exitosa con los datos creados
  } catch (error) {
    return res.status(500).send({ error }); // En caso de error, enviamos una respuesta de error
  }
};
