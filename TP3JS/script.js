const figurasHistoricas = [
  {
    nome: "Albert",
    sobrenome: "Einstein",
    idade: 76,
    dataNascimento: "1879/03/14",
    dataFalecimento: "1955/04/18",
    paisOrigem: "Alemanha",
    profissao: "Físico teórico",
    contribuicoes: [
      "Teoria da relatividade",
      "E=mc²",
      "Desenvolvimento da mecânica quântica",
    ],
  },
  {
    nome: "Marie",
    sobrenome: "Curie",
    idade: 66,
    dataNascimento: "1867/11/07",
    dataFalecimento: "1934/07/04",
    paisOrigem: "Polônia",
    profissao: "Química e Física",
    contribuicoes: [
      "Descoberta do rádio",
      "Descoberta do polônio",
      "Primeira mulher a ganhar um Prêmio Nobel",
    ],
  },
  {
    nome: "Nelson",
    sobrenome: "Mandela",
    idade: 95,
    dataNascimento: "1918/07/18",
    dataFalecimento: "2013/12/05",
    paisOrigem: "África do Sul",
    profissao: "Advogado e Ativista",
    contribuicoes: [
      "Luta contra o apartheid",
      "Primeiro presidente negro da África do Sul",
      "Prêmio Nobel da Paz",
    ],
  },
  {
    nome: "Leonardo",
    sobrenome: "da Vinci",
    idade: 67,
    dataNascimento: "1452/04/15",
    dataFalecimento: "1519/05/02",
    paisOrigem: "Itália",
    profissao: "Artista e Inventor",
    contribuicoes: [
      "Pintura de 'Mona Lisa'",
      "Estudos em anatomia",
      "Invenções e projetos de engenharia",
    ],
  },
  {
    nome: "Mahatma",
    sobrenome: "Gandhi",
    idade: 78,
    dataNascimento: "1869/10/02",
    dataFalecimento: "1948/01/30",
    paisOrigem: "Índia",
    profissao: "Líder Político e Espiritual",
    contribuicoes: [
      "Movimento de independência da Índia",
      "Filosofia da não-violência",
      "Defesa dos direitos civis",
    ],
  },
  {
    nome: "Isaac",
    sobrenome: "Newton",
    idade: 84,
    dataNascimento: "1643/01/04",
    dataFalecimento: "1727/03/31",
    paisOrigem: "Inglaterra",
    profissao: "Matemático e Físico",
    contribuicoes: [
      "Leis do movimento",
      "Lei da gravitação universal",
      "Cálculo diferencial e integral",
    ],
  },
  {
    nome: "Frida",
    sobrenome: "Kahlo",
    idade: 47,
    dataNascimento: "1907/07/06",
    dataFalecimento: "1954/07/13",
    paisOrigem: "México",
    profissao: "Artista",
    contribuicoes: [
      "Pinturas autobiográficas",
      "Ícone do feminismo",
      "Uso da arte para abordar temas sociais",
    ],
  },
  {
    nome: "Winston",
    sobrenome: "Churchill",
    idade: 90,
    dataNascimento: "1874/11/30",
    dataFalecimento: "1965/01/24",
    paisOrigem: "Inglaterra",
    profissao: "Político e Escritor",
    contribuicoes: [
      "Liderança durante a Segunda Guerra Mundial",
      "Prêmios Nobel de Literatura",
      "Discursos inspiradores",
    ],
  },
  {
    nome: "Rosa",
    sobrenome: "Parks",
    idade: 92,
    dataNascimento: "1913/02/04",
    dataFalecimento: "2005/10/24",
    paisOrigem: "Estados Unidos",
    profissao: "Ativista dos Direitos Civis",
    contribuicoes: [
      "Ação de desobediência civil",
      "Símbolo do movimento dos direitos civis",
      "Autora e ativista",
    ],
  },
  {
    nome: "George",
    sobrenome: "Washington",
    idade: 67,
    dataNascimento: "1732/02/22",
    dataFalecimento: "1799/12/14",
    paisOrigem: "Estados Unidos",
    profissao: "General e Político",
    contribuicoes: [
      "Primeiro presidente dos EUA",
      "Comandante do Exército Continental",
      "Contribuição na redação da Constituição",
    ],
  },
  {
    nome: "César",
    sobrenome: "Chávez",
    idade: 66,
    dataNascimento: "1927/03/31",
    dataFalecimento: "1993/04/23",
    paisOrigem: "Estados Unidos",
    profissao: "Ativista e Líder Sindical",
    contribuicoes: [
      "Fundação da United Farm Workers",
      "Luta pelos direitos dos trabalhadores",
      "Ações de desobediência civil",
    ],
  },
  {
    nome: "Cleópatra",
    sobrenome: "VII",
    idade: 39,
    dataNascimento: "0069/01/01",
    dataFalecimento: "0030/01/01",
    paisOrigem: "Egito",
    profissao: "Rainha",
    contribuicoes: [
      "Última rainha do Egito",
      "Alianças políticas com Roma",
      "Promotora da cultura egípcia",
    ],
  },
  {
    nome: "Martin",
    sobrenome: "Luther King Jr.",
    idade: 39,
    dataNascimento: "1929/01/15",
    dataFalecimento: "1968/04/04",
    paisOrigem: "Estados Unidos",
    profissao: "Pastor e Ativista",
    contribuicoes: [
      "Liderança no movimento dos direitos civis",
      "Discurso 'I Have a Dream'",
      "Prêmio Nobel da Paz",
    ],
  },
  {
    nome: "Malala",
    sobrenome: "Yousafzai",
    idade: 27,
    dataNascimento: "1997/07/12",
    dataFalecimento: null,
    paisOrigem: "Paquistão",
    profissao: "Ativista",
    contribuicoes: [
      "Ativismo pela educação de meninas",
      "Prêmio Nobel da Paz",
      "Autora de 'Eu sou Malala'",
    ],
  },
  {
    nome: "Vincenzo",
    sobrenome: "Bellini",
    idade: 33,
    dataNascimento: "1801/11/03",
    dataFalecimento: "1835/09/23",
    paisOrigem: "Itália",
    profissao: "Compositor",
    contribuicoes: [
      "Óperas como 'Norma' e 'La sonnambula'",
      "Desenvolvimento da ópera romântica",
      "Influência na música clássica",
    ],
  },
  {
    nome: "Simone",
    sobrenome: "de Beauvoir",
    idade: 78,
    dataNascimento: "1908/01/09",
    dataFalecimento: "1986/04/14",
    paisOrigem: "França",
    profissao: "Filósofa e Escritora",
    contribuicoes: [
      "Obra 'O Segundo Sexo'",
      "Pioneira do feminismo moderno",
      "Filosofia existencialista",
    ],
  },
  {
    nome: "Vincent",
    sobrenome: "van Gogh",
    idade: 37,
    dataNascimento: "1853/03/30",
    dataFalecimento: "1890/07/29",
    paisOrigem: "Países Baixos",
    profissao: "Pintor",
    contribuicoes: [
      "Estilo pós-impressionista",
      "Obras como 'Noite Estrelada'",
      "Influência na arte moderna",
    ],
  },
  {
    nome: "Stephen",
    sobrenome: "Hawking",
    idade: 76,
    dataNascimento: "1942/01/08",
    dataFalecimento: "2018/03/14",
    paisOrigem: "Inglaterra",
    profissao: "Físico teórico",
    contribuicoes: [
      "Teoria dos buracos negros",
      "Obra 'Uma Breve História do Tempo'",
      "Contribuições à física teórica",
    ],
  },
  {
    nome: "Alexander",
    sobrenome: "Graham Bell",
    idade: 75,
    dataNascimento: "1847/03/03",
    dataFalecimento: "1922/08/02",
    paisOrigem: "Escócia",
    profissao: "Inventor",
    contribuicoes: [
      "Invenção do telefone",
      "Fundação da AT&T",
      "Pesquisas em comunicação",
    ],
  },
  {
    nome: "Coco",
    sobrenome: "Chanel",
    idade: 87,
    dataNascimento: "1883/08/19",
    dataFalecimento: "1971/01/10",
    paisOrigem: "França",
    profissao: "Designer de Moda",
    contribuicoes: [
      "Revolução na moda feminina",
      "Criação do perfume Chanel No. 5",
      "Estilo 'chic' e atemporal",
    ],
  },
];
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// Ex 1
const nomesCompletos = figurasHistoricas.map(
  (figurasHistoricas) =>
    `${figurasHistoricas.nome} ${figurasHistoricas.sobrenome}`
);

console.log(nomesCompletos);

// Ex 2
const idadeMaiorQue70 = figurasHistoricas.filter(
  (figurasHistoricas) => figurasHistoricas.idade >= 70
);

console.log(idadeMaiorQue70);

// Exercicio 3
let somaIdade = 0;
let total = 0;

figurasHistoricas.forEach((figurasHistoricas) => {
  somaIdade += figurasHistoricas.idade;
  total++;
});

const mediaIdade = somaIdade / total;

console.log(mediaIdade);

// Exercicio 4
const nomesCompletosInglesesEstadunidenses = figurasHistoricas
  .filter(
    (figurasHistoricas) =>
      figurasHistoricas.paisOrigem === "Inglaterra" ||
      figurasHistoricas === "Estados Unidos"
  )
  .map(
    (figurasHistoricas) =>
      `${figurasHistoricas.nome} ${figurasHistoricas.sobrenome}`
  );

console.log(nomesCompletosInglesesEstadunidenses);

// Exercicio 5
const ativistas = figurasHistoricas.filter(
  (figurasHistoricas) => figurasHistoricas.profissao === "Ativista"
);

let somaIdadeAtivistas = 0;
let totalAtivistas = 0;

ativistas.forEach((ativistas) => {
  somaIdadeAtivistas += ativistas.idade;
  totalAtivistas++;
});

const mediaIdadeAtivista = somaIdadeAtivistas / totalAtivistas;

console.log(mediaIdadeAtivista);

// Exercicio 6 - Errado
const figurasDeJunho = figurasHistoricas.filter(figura => {
  const mesNascimento = new Date(figura.dataNascimento).getMonth() + 1; 
  return mesNascimento === 6;});

let contagem = 0;
figurasDeJunho.forEach(() => {
  contagem++;
});

console.log(`Figuras históricas que nasceram em junho: ${contagem}`);

// Exercicio 7 - Errado
const figurasMesIgual = figurasHistoricas.filter(figura => {
  const dataNascimento = new Date(figura.dataNascimento);
  const dataFalecimento = figura.dataFalecimento ? new Date(figura.dataFalecimento) : null;

  return dataFalecimento && dataNascimento.getMonth() === dataFalecimento.getMonth();
});

const nomescompletos = figurasMesIgual.map(figura => `${figura.nome} ${figura.sobrenome}`);

console.log(nomescompletos);

// Exercicio 8
const todasContribuicoes = figurasHistoricas
  .map((figurasHistoricas) => figurasHistoricas.contribuicoes)
  .flat();

console.log(todasContribuicoes);

// Exercicio 9
const contribuicoesFisico = figurasHistoricas
  .filter((figurasHistoricas) =>
    figurasHistoricas.profissao.toLocaleLowerCase().includes("físico")
  )
  .map((figurasHistoricas) => figurasHistoricas.contribuicoes)
  .flat();

console.log(contribuicoesFisico);

// Exercicio 10
let totalDeCaracteres = 0;

figurasHistoricas.forEach((figurasHistoricas) => {
  totalDeCaracteres += figurasHistoricas.nome.length;
});

console.log(totalDeCaracteres);

// Exercicio 11
const figurasHistoricasPorPais = figurasHistoricas.reduce(
  (agrupar, figurasHistoricas) => {
    if (!agrupar[figurasHistoricas.paisOrigem]) {
      agrupar[figurasHistoricas.paisOrigem] = [];
    }
    agrupar[figurasHistoricas.paisOrigem].push(figurasHistoricas.nome);

    return agrupar;
  }
);

console.log(figurasHistoricasPorPais);

// Exercicio 12
let n1 = 0;
let n2 = 1;
let fibonacci = 0;

for (let i = 2; i <= 20; i++) {
  fibonacci = n1 + n2;
  n1 = n2;
  n2 = fibonacci;
}

console.log(fibonacci);

// Exercicio 13
const numero = parseInt(prompt("Digite um número: "));

function calcularFatorial(numero) {
  let fatorial = 1;
  for (let i = numero; i > 1; i--) {
    fatorial *= i;
  }

  return fatorial;
}

const resultado = calcularFatorial(numero);
console.log(`O fatorial é ${resultado}`);

// Exercicio 14
function ordernarDecrescente(a, b, c) {
  const numeros = [a, b, c];

  numeros.sort((x, y) => y - x);

  return numeros;
}

const primeiroNumero = parseInt(prompt("Digite o primeiro numero:"));
const segundoNumero = parseInt(prompt("Digite o segundo numero:"));
const terceiroNumero = parseInt(prompt("Digite o terceiro numero:"));

const numerosOrdenados = ordernarDecrescente(
  primeiroNumero,
  segundoNumero,
  terceiroNumero
);

console.log("Os números em ordem decrescente: ", numerosOrdenados);

// Exercicio 15 -> na pasta, separado

// Exercicio 16 -> na pasta, separado