const { Membros } = require("./Membros");

describe('Membros', () => {
  let membro

  beforeEach(() => {
    membro = new Membros('Bia', 'Biografia', 'bia@example.com', 'Salvador');
});
  it('Deve criar um membro com os valores corretos', () => {
      expect(membro.nome).toBe('Bia');
      expect(membro.biografia).toBe('Biografia');
      expect(membro.email).toBe('bia@example.com');
      expect(membro.cidade).toBe('Salvador');
      expect(membro.favoritos).toEqual([]);
  });

  it('Deve adicionar um livro favorito corretamente', () => {
      membro.adicionarLivroFavorito('Hibisco Roxo');
      expect(membro.favoritos).toEqual(['Hibisco Roxo']);
  });

  it('Deve atualizar a biografia corretamente', () => {
      membro.setBiografia('Biografia Nova');
      expect(membro.biografia).toBe('Biografia Nova');
  });
});