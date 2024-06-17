interface Pessoa {
  nome: string;
};

interface Pessoa {
  readonly sobrenome: string;
};

interface Pessoa {
  readonly enderecos: string[];
};

const pessoa: Pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  enderecos: ['Av. Brasil'],
};

pessoa.enderecos.push('Rua Nova');
console.log(pessoa);
