const { Livro } = require('./Livro');

describe('Testes Classe Livro', () => {
    it('Deve criar um livro com os valores corretos', () => {
        const livro = new Livro('Hibisco Roxo', 'Chimamanda Ngozi Adichie', 'Ficção', 'Sinopse do livro...');
        expect(livro.titulo).toBe('Hibisco Roxo');
        expect(livro.autora).toBe('Chimamanda Ngozi Adichie');
        expect(livro.genero).toBe('Ficção');
        expect(livro.sinopse).toBe('Sinopse do livro...');
    });

    it('Deve criar outro livro com os valores corretos', () => {
        const livro = new Livro('Um Defeito de Cor', 'Ana Maria Gonçalves', 'Romance', 'Sinopse do livro...');
        expect(livro.titulo).toBe('Um Defeito de Cor');
        expect(livro.autora).toBe('Ana Maria Gonçalves');
        expect(livro.genero).toBe('Romance');
        expect(livro.sinopse).toBe('Sinopse do livro...');
    });
});