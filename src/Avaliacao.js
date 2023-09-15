class Avaliacao {
    titulo;
    avaliacoes;
    constructor(titulo) {
        this.titulo = titulo;
        this.avaliacoes = [];
      }
  
    adicionarAvaliacao(membro, estrelas, comentario) {
        if (typeof membro !== 'string' || typeof estrelas !== 'number' || estrelas < 1 || estrelas > 5 || typeof comentario !== 'string') {
            throw new Error('Dados de avaliação inválidos. Tente novamente.')
        }
        const avaliacao = { membro, estrelas, comentario };
        this.avaliacoes.push(avaliacao);
    }

    calcularAvaliacaoMedia() {
        if (this.avaliacoes.length === 0) {
            return 0;
        }
        const totalEstrelas = this.avaliacoes.reduce((acumulador, avaliacao) => acumulador + avaliacao.estrelas, 0);
        const media = totalEstrelas / this.avaliacoes.length;
        return media
    }

    listarAvaliacoes() {
        return this.avaliacoes;
    }

}


    module.exports = { Avaliacao };