import React, { useState } from "react";
import { v4 } from "uuid";

import { FcCheckmark, FcFullTrash } from "react-icons/fc";

import { Container, ToDoList, Input, Button, ListItem } from "./styles";

function App() {
  const [list, setList] = useState([
    { id: v4(), task: "Iniciar", finished: true },
  ]);
  const [inputTask, setInputTask] = useState("");

  function inputMudou(event) {
    setInputTask(event.target.value);
  }
  function meuBotao() {
    setList([...list, { id: v4(), task: inputTask, finished: false }]);

    console.log(list);
  }

  return (
    <Container>
      <ToDoList>
        <Input onChange={inputMudou} placeholder="Digite aqui..." />
        <Button onClick={meuBotao}>Adicionar</Button>

        <ul>
          {list.map((item) => (
            <ListItem isFinished={item.finished}>
              <FcCheckmark />
              <li key={item.id}>{item.task}</li>
              <FcFullTrash />
            </ListItem>
          ))}
        </ul>
      </ToDoList>
    </Container>
  );
}

export default App;
