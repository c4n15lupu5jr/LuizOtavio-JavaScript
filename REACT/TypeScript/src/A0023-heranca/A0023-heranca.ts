export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {}
export class Cliente extends Pessoa {}

const pessoa = new Pessoa('Luiz', 'Miranda', 30, '000.000.000-00');
const aluno = new Aluno('Luiz', 'Miranda', 30, '000.000.000-00');
const cliente = new Cliente('Luiz', 'Miranda', 30, '000.000.000-00');

console.log(pessoa);
console.log(aluno);
console.log(cliente);
