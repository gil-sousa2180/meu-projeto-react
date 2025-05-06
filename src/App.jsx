import React, { useState } from "react";
import { v4 } from "uuid";

import {
  Container,
  ToDoList,
  Input,
  Button,
  ListItem,
  Check,
  Trash,
  WrapperList,
} from "./styles.js";

function App() {
  const [list, setList] = useState([
    { id: v4(), task: "Iniciar", finished: true },
  ]);
  const [inputTask, setInputTask] = useState("");

  function inputMudou(event) {
    setInputTask(event.target.value);
  }
  function meuBotao() {
    if (inputTask) {
      setList([...list, { id: v4(), task: inputTask, finished: false }]);
    }
  }

  function finalizarTarefa(id) {
    const newList = list.map((item) =>
      item.id === id ? { ...item, finished: !item.finished } : item
    );

    setList(newList);
  }

  function excluirTarefa(id) {
    const newList = list.filter((item) => item.id !== id);

    setList(newList);
  }

  return (
    <Container>
      <ToDoList>
        <h1>Lista de Tarefas</h1>
        <Input onChange={inputMudou} placeholder="Digite aqui..." />
        <Button onClick={meuBotao}>Adicionar</Button>

        <ul>
          {list.length > 0 ? (
            list.map((item) => (
              <ListItem isFinished={item.finished} key={item.id}>
                <Check onClick={() => finalizarTarefa(item.id)} />
                <li>{item.task}</li>
                <Trash onClick={() => excluirTarefa(item.id)} />
              </ListItem>
            ))
          ) : (
            <h2>Não exitem itens nesta lista</h2>
          )}
        </ul>
      </ToDoList>
    </Container>
  );
}

export default App;
