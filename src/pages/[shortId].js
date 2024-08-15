import { PrismaClient } from "@prisma/client";
import { redirect } from "next/dist/server/api-utils";

export default function ShortUrl() {
  return <>shortID Redirect</>;
}

// Función que se ejecuta en el servidor antes de renderizar la página
// Recibe un objeto con los parámetros de la URL
export async function getServerSideProps({ params }) {
  const client = new PrismaClient(); // Creamos una instancia de PrismaClient

  const { shortId } = params; // Extraemos el parámetro shortId de los parámetros de la solicitud

  // Buscamos en la base de datos un registro que coincida con el shortId
  const data = await client.link.findUnique({
    where: { shortUrl: shortId },
  });

  // Si no se encuentra el registro, redirigimos a la página principal
  if (!data) {
    return { redirect: { destination: "/" } };
  }
  // Si se encuentra el registro, redirigimos a la URL original
  return {
    redirect: { destination: data.url },
  };
}
