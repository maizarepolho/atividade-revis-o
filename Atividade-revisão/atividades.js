//Atividade 1 //

const boasVindas = (nome) => `Bem-vindo(a), ${nome}!`;

console.log(boasVindas("Carla"));

//Atividade 2//

const parOuImpar = (numero) => (numero % 2 === 0 ? "Par" : "Ímpar");

console.log(parOuImpar(4,7)); 

//Atividade 3//

const precos = [10, 25, 40];

const precosFormatados = precos.map((preco) => `R$ ${preco}`);

console.log(precosFormatados); 

//Atividade 4//

const palavras = ["sol", "janela", "mar", "cadeira", "luz"];

const palavrasLongas = palavras.filter((palavra) => palavra.length > 4);

console.log(palavrasLongas); 

//Atividade 5//

const produtos = [
  { id: 1, nome: "Teclado", estoque: true },
  { id: 2, nome: "Mouse", estoque: false },
  { id: 3, nome: "Monitor", estoque: true },
];

const produtosEmEstoque = produtos
  .filter((produto) => produto.estoque) 
  .map((produto) => produto.nome); 

console.log(produtosEmEstoque); 
