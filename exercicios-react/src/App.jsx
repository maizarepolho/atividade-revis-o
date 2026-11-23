import { useState } from 'react';

// Exercício 6//
function Cartao({ titulo, descricao }) {
  return (
    <div>
      <h3>{titulo}</h3>
      <p>{descricao}</p>
    </div>
  );
}

// Exercício 7//
function Aviso({ urgente }) {
  return (
    <div>
      {urgente ? <p>ATENÇÃO: leia agora!</p> : <p>Aviso comum</p>}
    </div>
  );
}

// Exercício 8 //
function Curtidas() {
  const [curtidas, setCurtidas] = useState(0);

  return (
    <div>
      <button onClick={() => setCurtidas(curtidas + 1)}>Curtir</button>
      <p>{curtidas} curtidas</p>
      {curtidas > 10 && <p>Post popular!</p>}
    </div>
  );
}

// Exercício 9 //
function MostrarSenha() {
  const [visivel, setVisivel] = useState(false);

  return (
    <div>
      <button onClick={() => setVisivel(!visivel)}>
        {visivel ? 'Esconder' : 'Mostrar'}
      </button>
      {visivel && <p>Senha: 1234</p>}
    </div>
  );
}

// Exercício 10 //
function ListaTarefas() {
  const [tarefas, setTarefas] = useState([
    { id: 1, texto: "Estudar React", feita: false },
    { id: 2, texto: "Lavar a louça", feita: true },
    { id: 3, texto: "Fazer a atividade", feita: false },
  ]);

  const concluirTarefa = (id) => {
    const tarefasAtualizadas = tarefas.map((tarefa) =>
      tarefa.id === id ? { ...tarefa, feita: true } : tarefa
    );
    setTarefas(tarefasAtualizadas);
  };

  const tarefasPendentes = tarefas.filter((tarefa) => !tarefa.feita);

  return (
    <ul>
      {tarefasPendentes.map((tarefa) => (
        <li key={tarefa.id}>
          {tarefa.texto}{" "}
          <button onClick={() => concluirTarefa(tarefa.id)}>Concluir</button>
        </li>
      ))}
    </ul>
  );
}

// Componente Principal (App) exibindo todos os exercícios na tela
export default function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Exercício 6 - Cartões</h2>
      <Cartao titulo="React" descricao="Biblioteca para interfaces de usuário." />
      <Cartao titulo="JavaScript" descricao="Linguagem de programação da web." />
      <Cartao titulo="HTML & CSS" descricao="Estrutura e estilização de páginas." />

      <hr />

      <h2>Exercício 7 - Avisos</h2>
      <Aviso urgente={true} />
      <Aviso urgente={false} />

      <hr />

      <h2>Exercício 8 - Curtidas</h2>
      <Curtidas />

      <hr />

      <h2>Exercício 9 - Mostrar Senha</h2>
      <MostrarSenha />

      <hr />

      <h2>Exercício 10 - Lista de Tarefas</h2>
      <ListaTarefas />
    </div>
  );
}