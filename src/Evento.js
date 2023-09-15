class Evento {
    titulo;
    autora;
    modalidade;
    data;
    local;
    hora;
    discussoes;
    #link;
  constructor(titulo, autora, modalidade, data, local, hora) {
      this.titulo = titulo;
      this.autora = autora;
      this.modalidade = modalidade;
      this.data = data;
      this.local = local;
      this.hora = hora;
      this.discussoes = [];
      this.#link = "";
  }

  adicionarDiscussao(discussao) {
      this.discussoes.push(discussao);
  }
  get linkEvento() {
    return this.#link;
  }
  set linkEvento(link) {
    this.#link = link;
  }}

 

  module.exports = { Evento };