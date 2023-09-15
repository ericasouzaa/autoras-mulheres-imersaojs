const { Avaliacao } = require('./Avaliacao');

describe('Avaliacao', () => {
    let avaliacao;

    beforeEach(() => {
        avaliacao = new Avaliacao('Um defeito de cor');
    });

    it('Deve adicionar uma avaliação válida', () => {
        avaliacao.adicionarAvaliacao('Membro1', 4, 'Ótimo livro!');
        expect(avaliacao.listarAvaliacoes()).toHaveLength(1);
    });
    it('Deve listar as avaliações', () => {
        avaliacao.adicionarAvaliacao('Membro1', 4, 'Ótimo livro!');
        avaliacao.adicionarAvaliacao('Membro2', 5, 'Adorei!');
        expect(avaliacao.listarAvaliacoes()).toHaveLength(2);
    });
    it('Deve calcular a avaliação média corretamente', () => {
        avaliacao.adicionarAvaliacao('Membro1', 4, 'Ótimo livro!');
        avaliacao.adicionarAvaliacao('Membro2', 5, 'Adorei!');
        const media = avaliacao.calcularAvaliacaoMedia();
        expect(media).toEqual(4.5);
    });

    it('Deve retornar média 0 se não houver avaliações', () => {
        expect(avaliacao.calcularAvaliacaoMedia()).toBe(0);
    });
    it('Deve lançar um erro ao adicionar uma avaliação inválida', () => {
        expect(() => avaliacao.adicionarAvaliacao('Membro1', 'invalido', 'Comentário inválido')).toThrow(Error);
    });
});