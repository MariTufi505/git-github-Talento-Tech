import React from 'react'

const App = () => {
  return (
    <div className="w-full bg-cyan-600">
      <h1 className="text-cyan-800 p-12 text-5xl flex justify-center italic">
        Proyecto Git - Github
        <br /> Talento Tech
      </h1>
      <hr />
      <div className="m-auto text-3xl text-cyan-900 flex-wrap columns-1 w-3/4">
        <p className="flex justify-center m-5">
          En Git tenemos diferentes comandos. Los más utilizados son:
        </p>
        <ul className="m-3 text-xl">
          <li className="border p-5">
            git init: Inicializa un reposotorio en Git.{" "}
          </li>
          <li className="border p-5">
            git status: Muestra el estado de los archivos en el respositorio.
          </li>
          <li className="border p-5">
            git add: Agrega archivos en el Staging Area. Si se utiliza con un
            punto (.) agrega todos los archivos. En cambio si escribo el
            archivo, se agregará ese archivo individual.
          </li>
          <li className="border p-5">
            git commit: Guarda los archivos en el Working Directory
          </li>
          <li className="border p-5">
            git push: Sube los archivos del Working Direcotry al repositorio
            remoto.
          </li>
          <li className="border p-5">
            git pull: Trae los cambios del respositorio remoto al local
          </li>
          <li className="border p-5">git merge: Une ramas en una sola.</li>
        </ul>
      </div>
      <hr />
    </div>
  );
}

export default App
