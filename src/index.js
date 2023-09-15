const { Avaliacao } = require('./Avaliacao')
const { Membros } = require('./Membros')
const { Evento } = require('./Evento') 

const livro1 = new Avaliacao('Um defeito de cor');

// Adicionar avaliações
livro1.adicionarAvaliacao('Joana17', 5, 'Meu livro favorito!');
livro1.adicionarAvaliacao('Bia123', 4, 'Esperava mais');
livro1.adicionarAvaliacao('Helo', 5, 'Incrível. Recomendo!');


// Imprimir no terminal
console.log('Livro 1:');
console.log(`Título: ${livro1.titulo}`);
console.log('Avaliações:', livro1.avaliacoes);

// Chame o método para calcular a avaliação média e imprima no terminal
const media = livro1.calcularAvaliacaoMedia();
console.log(`Avaliação média para o livro "${livro1.titulo}": ${media.toFixed(2)} estrelas`);
console.log("\n");

const evento1 = new Evento("A filha perdida", "Elena Ferrante", "Presencial", "09/10/2023", "Livraria Jaqueira", "18:00");
evento1.adicionarDiscussao("Maternidade");
evento1.adicionarDiscussao("Psicanálise");
console.log(`Título: ${evento1.titulo}`)
console.log(`Autora: ${evento1.autora}`)
console.log(`Modalidade: ${evento1.modalidade}`)
console.log(`Data: ${evento1.data}`)
console.log(`Local: ${evento1.local}`)
console.log(`Hora: ${evento1.hora}`)
console.log(`Discussões: ${evento1.discussoes.join(", ")}`);
console.log("\n");


//Criar membros novos
const membro1 = new Membros("Alice","Feita de sal e sol", "alice@rep.com", "Recife");
const membro2 = new Membros("Beatriz", "Só se vive uma vez", "bia@rep.com", "Rio de Janeiro");
console.log(membro1, "\n", membro2);
