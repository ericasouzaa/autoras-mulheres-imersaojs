const { Evento } = require("./Evento");

describe('Evento', () => {
    let evento;

    beforeEach(() => {
        evento = new Evento('Livro', 'Autora', 'Remoto', '15/10/2023', 'Google Meet', '18:00');
    });

    it('Deve criar um evento com os valores corretos', () => {
        expect(evento.titulo).toBe('Livro');
        expect(evento.autora).toBe('Autora');
        expect(evento.modalidade).toBe('Remoto');
        expect(evento.data).toBe('15/10/2023');
        expect(evento.local).toBe('Google Meet');
        expect(evento.hora).toBe('18:00');
        expect(evento.discussoes).toEqual([]);
        expect(evento.linkEvento).toBe('');
    });

    it('Deve adicionar uma discussão ao evento', () => {
        evento.adicionarDiscussao('Discussão 1');
        expect(evento.discussoes).toEqual(['Discussão 1']);
    });

    it('Deve configurar e obter o link do evento', () => {
        evento.linkEvento = 'https://www.example.com/evento-a';
        expect(evento.linkEvento).toBe('https://www.example.com/evento-a');
    });

});