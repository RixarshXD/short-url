import { useRef, useState } from "react";

export default function Home() {
  // Creamos una referencia para el input de la URL
  const urlInput = useRef();
  // Creamos un estado para almacenar la URL acortada
  // Inicialmente, la URL acortada estará vacía
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = urlInput.current.value; // Obtenemos el valor del input de la URL
    // todo: peticion a la API

    // Realizamos una petición a la API para acortar la URL
    fetch("/api/shortUrl", {
      method: "POST",
      headers: {
        "content-type": "application/json", // Indicamos que el contenido es JSON
      },
      body: JSON.stringify({ url }),
    })
      .then((res) => res.json()) // Convertimos la respuesta a JSON
      .then((data) => {
        setShortUrl(data.shortUrl); // Actualizamos el estado con la URL acortada
      });
  };

  return (
    <>
      {/* diseño del fondo */}
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="https://github.com/RixarshXD?tab=repositories"
                  class="flex items-center cursor-pointer gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed bg-button text-white shadow-button hover:shadow-button-hover hover:scale-110 px-6 py-5 text-lg font-bold md:text-2xl rounded-xl"
                >
                  Repositorios
                </a>
              </li>
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=ricardovaldesmalla1@gmail.com
                          &su=Consulta&body=Hola%20me%20gustaría%20saber%20más%20sobre..."
                  target="_blank"
                  class="flex items-center cursor-pointer gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed bg-button text-white shadow-button hover:shadow-button-hover hover:scale-110 px-6 py-5 text-lg font-bold md:text-2xl rounded-xl"
                >
                  Enviame un correo
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <h1 className="text-center font-bold mt-4 text-4xl">Acortador de url</h1>

      <form class="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div class="relative z-0 w-full mb-5 group">
          <input
            ref={urlInput}
            type="url"
            name="url"
            id="url-input"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="url-input"
            class="font-bold peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            ingresar url
          </label>
        </div>

        <button
          id="acortar-boton"
          type="submit"
          class="flex items-center cursor-pointer gap-2 rounded-lg text-white px-3 py-[10px] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border border-midu-primary/40 bg-[#121226] hover:bg-[#1A1A2E] hover:border-midu-primary/60"
        >
          Acortar
        </button>

        <span class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
          {" "}
          {shortUrl}
        </span>

        <footer class="border-gray-200 dark:bg-gray-900 font-bold">
          proyecto echo por riki
        </footer>
      </form>
    </>
  );
}
