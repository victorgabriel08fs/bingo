import { useState } from "react";

const HomePage = () => {
  const [sorteados, setSorteados] = useState([]);

  const aleatorio = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const sortear = () => {
    if (sorteados.length === 75) {
      if (
        window.confirm(
          "Foram sorteados todos os 75 números. Deseja reiniciar o jogo?"
        )
      ) {
        setSorteados([]);
      }
    } else {
      const num = aleatorio(1, 75);
      if (!sorteados.includes(num)) setSorteados([...sorteados, num]);
      else sortear();
    }
  };
  var arr = [];
  for (var i = 1; i <= 75; i++) {
    arr.push(i);
  }
  return (
    <div className="w-[95%] h-[80vh] p-4 bg-slate-400 flex flex-col">
      <h1 className="mb-3">Bingo</h1>
      <div className="max-sm:h-[80%] h-[75%] bg-slate-700 rounded-md p-4">
        <h3 className="mb-7">Lista de números</h3>

        <div className="grid gap-3 max-sm:grid-cols-7 grid-cols-9 max-sm:max-h-[500px] max-h-[80%] overflow-auto">
          {arr.map((num) => (
            <div key={num} className="p-2">
              <p
                className={`${
                  sorteados.includes(num)
                    ? num === sorteados[sorteados.length - 1]
                      ? "bg-green-400"
                      : "bg-white text-black"
                    : ""
                } ${""} rounded-md`}
              >
                {num}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="self-center w-full flex gap-4 justify-center">
        <button
          onClick={() => {
            if (window.confirm("Deseja realmente resetar?")) setSorteados([]);
          }}
          className="bg-gray-500 rounded-md  my-3 w-[20%] h-full"
        >
          Resetar
        </button>
        <button
          onClick={sortear}
          className="bg-green-500 rounded-md my-3 w-[20%] h-full"
        >
          Sortear
        </button>
      </div>
    </div>
  );
};
export default HomePage;
