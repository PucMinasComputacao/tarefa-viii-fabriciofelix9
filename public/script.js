// Definição dos dados (JSON)

const catalogo = [
  {
    id: 1,
    titulo: "Interestelar",
    tipo: "filme",
    ano: 2014,
    generos: ["ficção científica", "drama"],
    nota: 9.5,
    assistido: true
  },
  {
    id: 2,
    titulo: "Breaking Bad",
    tipo: "serie",
    ano: 2008,
    generos: ["drama", "crime"],
    nota: 9.8,
    assistido: true
  },
  {
    id: 3,
    titulo: "Matrix",
    tipo: "filme",
    ano: 1999,
    generos: ["ação"],
    nota: 8.7,
    assistido: false
  },
  {
    id: 4,
    titulo: "Stranger Things",
    tipo: "serie",
    ano: 2016,
    generos: ["ficção", "terror"],
    nota: 8.5,
    assistido: true
  },
  {
    id: 5,
    titulo: "O Senhor dos Anéis",
    tipo: "filme",
    ano: 2001,
    generos: ["fantasia", "aventura"],
    nota: 9.2,
    assistido: false
  },
  {
    id: 6,
    titulo: "Dark",
    tipo: "serie",
    ano: 2017,
    generos: ["ficção científica"],
    nota: 9.0,
    assistido: true
  }
];

// B.2 - Acesso aos dados

console.log(catalogo);

console.log("Primeiro título:", catalogo[0].titulo);

console.log("Ano do último:", catalogo[catalogo.length - 1].ano);

if (catalogo[2].generos[1]) {
  console.log("Segundo gênero do terceiro item:", catalogo[2].generos[1]);
} else {
  console.log("O terceiro item não possui segundo gênero.");
}

// B.3 - Iterators

// A) forEach
catalogo.forEach(item => {
  console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});

// B) map
const titulosEmCaixaAlta = catalogo.map(item => item.titulo.toUpperCase());
console.log(titulosEmCaixaAlta);

// C) filter
const naoAssistidos = catalogo.filter(item => !item.assistido);
console.log("Não assistidos:", naoAssistidos.length);

// D) find
const topItem = catalogo.find(item => item.nota >= 9);

if (topItem) {
  console.log(`Top: ${topItem.titulo} - Nota: ${topItem.nota}`);
} else {
  console.log("Nenhum item com nota >= 9");
}

// E) reduce

const mediaGeral =
  catalogo.reduce((acc, item) => acc + item.nota, 0) / catalogo.length;

const assistidos = catalogo.filter(item => item.assistido);

const mediaAssistidos =
  assistidos.reduce((acc, item) => acc + item.nota, 0) / assistidos.length;

console.log("Média geral:", mediaGeral.toFixed(2));
console.log("Média assistidos:", mediaAssistidos.toFixed(2));

// F) some e every

const temAntigo = catalogo.some(item => item.ano < 2000);
const todosTemGenero = catalogo.every(item => item.generos.length > 0);

console.log("Existe item antes de 2000?", temAntigo);
console.log("Todos têm gênero?", todosTemGenero);

// Saída na tela (DOM)

const total = catalogo.length;

const filmes = catalogo.filter(item => item.tipo === "filme").length;
const series = catalogo.filter(item => item.tipo === "serie").length;

// ranking top 3
const ranking = [...catalogo]
  .sort((a, b) => b.nota - a.nota)
  .slice(0, 3);

const output = document.getElementById("output");

output.innerHTML = `
  <p>Total de itens: ${total}</p>
  <p>Filmes: ${filmes} | Séries: ${series}</p>
  <p>Não assistidos: ${naoAssistidos.length}</p>
  <p>Média geral: ${mediaGeral.toFixed(2)}</p>
  <h3>Top 3:</h3>
  <ul>
    ${ranking
      .map(item => `<li>${item.titulo} (${item.nota})</li>`)
      .join("")}
  </ul>
`;