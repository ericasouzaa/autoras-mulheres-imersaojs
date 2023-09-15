 class Membros {
    nome;
    biografia;
    cidade;
    email;
    #favoritos;

    constructor(nome, biografia, email, cidade) {
      this.nome = nome;
      this.biografia = biografia;
      this.email = email;
      this.cidade = cidade;
      this.#favoritos = [];
    }

    get favoritos() {
    return this.#favoritos;
  }

  adicionarLivroFavorito(livro) {
   return this.#favoritos.push(livro);
}

setBiografia(biografia) {
  this.biografia = biografia;
}}



module.exports = { Membros };