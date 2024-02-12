const questions = [
  {
    question: "O que é JavaScript?",
    answers: [
      "Uma linguagem de marcação",
      "Um framework de desenvolvimento web",
      "Uma linguagem de programação de alto nível",
    ],
    correct: 2,
  },
  {
    question: "Qual é a função do operador '+' em JavaScript?",
    answers: [
      "Concatenar strings",
      "Realizar adição numérica",
      "Ambas as opções anteriores",
    ],
    correct: 2,
  },
  {
    question: "Qual é o método usado para imprimir algo no console do navegador?",
    answers: [
      "console.log()",
      "print()",
      "write()",
    ],
    correct: 0,
  },
  {
    question: "Como você define uma variável em JavaScript usando a palavra-chave 'let'?",
    answers: [
      "let myVar = 5;",
      "var myVar = 5;",
      "const myVar = 5;",
    ],
    correct: 0,
  },
  {
    question: "O que é o DOM (Document Object Model) em JavaScript?",
    answers: [
      "Um modelo de objetos que representa a estrutura de uma página web",
      "Uma linguagem de programação",
      "Um framework de desenvolvimento web",
    ],
    correct: 0,
  },
  {
    question: "Qual é a diferença entre '==' e '===' em JavaScript?",
    answers: [
      "'==' verifica apenas o valor, enquanto '===' verifica o valor e o tipo de dados",
      "'==' verifica apenas o tipo de dados, enquanto '===' verifica o valor e o tipo de dados",
      "'==' e '===' são equivalentes em JavaScript",
    ],
    correct: 0,
  },
  {
    question: "Qual é a função do método 'addEventListener' em JavaScript?",
    answers: [
      "Remover um evento de um elemento HTML",
      "Adicionar um evento a um elemento HTML",
      "Criar um novo elemento HTML",
    ],
    correct: 1,
  },
  {
    question: "Qual é a saída do seguinte código JavaScript? 'console.log(typeof true)';",
    answers: [
      "boolean",
      "string",
      "number",
    ],
    correct: 0,
  },
  {
    question: "Como você escreve um comentário de uma linha em JavaScript?",
    answers: [
      "// Isto é um comentário",
      "<!-- Isto é um comentário -->",
      "/* Isto é um comentário */",
    ],
    correct: 0,
  },
  {
    question: "Qual é o resultado da expressão '10 % 3' em JavaScript?",
    answers: [
      "3",
      "1",
      "0.333333",
    ],
    correct: 1,
  },
];

const quiz = document.querySelector('#quiz');
const template = document.querySelector('template');

for(const item of questions) {
  const quizItem = template.content.cloneNode(true);

  quizItem.querySelector('h3').textContent = item.question;
  
  for(const answer of item.answers) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true);

    dt.querySelector('span').textContent = answer;

    quizItem.querySelector('dl').appendChild(dt);
  }

  quizItem.querySelector('dl dt').remove();

  quiz.appendChild(quizItem);
}