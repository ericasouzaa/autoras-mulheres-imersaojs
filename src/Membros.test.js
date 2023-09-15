const { Members } = require("./Membros");

test('Deve inicializar um membro corretamente', () => {
    const member = new Members('Nome', 'Biografia', 'email@reprograma.com', 'Cidade')
    expect(member.nome).toBe('Nome');
    expect(member.biografia).toBe('Biografia');
    expect(member.email).toBe('email@reprograma.com');
    expect(member.cidade).toBe('Cidade');
    expect(member.favoritos).toEqual([]);
  });

  test('Deve adicionar um favorito à lista', () => {
    const member = new Members('Nome', 'Biografia', 'email@example.com', 'Cidade');
    const favorito = 'Item favorito';
    member.favoritos.push(favorito);
    expect(member.favoritos).toContain(favorito);
  });

  //revisar teste favoritos