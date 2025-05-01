import React, { useState } from "react";
import { v4 } from "uuid";

function App() {
  const [list, setList] = useState([{ id: v4(), task: "iniciar" }]);
  const [inputTask, setInputTask] = useState("");

  function inputMudou(event) {
    setInputTask(event.target.value);
  }
  function meuBotao() {
    setList([...list, { id: v4(), task: inputTask }]);

    console.log(list);
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
