import { v4 } from "uuid";

function App() {
  const list = [
    { id: v4(), task: "Estudar programação" },
    { id: v4(), task: "Leitura diária" },
    { id: v4(), task: "Finalizar modulo de React" },
    { id: v4(), task: "Conquistar meu 1°emprego como dev" },
    { id: v4(), task: "muito bom map estrutura em react" },
    { id: v4(), task: "top dominando react" },
  ];

  console.log(list);

  function inputMudou(event) {
    console.log(event.target.value);
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
