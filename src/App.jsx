import React, { useState } from "react";
import { v4 } from "uuid";

function App() {
  const [list, setList] = useState([{ id: v4(), task: "iniciar" }]);

  function inputMudou(event) {
    console.log(event.target.value);
    setList([{ id: v4(), task: event.target.value }]);

    console.log(setList);
  }
  function meuBotao() {
    console.log("meuBotao");
  }

  return (
    <>
      <div>
        <input onChange={inputMudou} placeholder="Digite aqui..." />
        <button onClick={meuBotao}>Adicionar</button>

        <ul>
          {list.map((item) => (
            <li key={item.id}>{item.task}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
