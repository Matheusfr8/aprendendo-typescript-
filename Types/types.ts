// string

let nome = "joão";
console.log(nome);

//nome = 28

///************* */

// Numbers

let idade = 27;
//idade = 'aNA'
idade = 27.5; // numero é numer sendo real ou inteiro quando declarado como number

// boolean

let possuiHobbies = false;
//possuiHobbies = 1
console.log(possuiHobbies);

// tipos explicitos

let minhaIdade;

minhaIdade = 27;
console.log(typeof minhaIdade);
minhaIdade = " iadde é 27 ";
console.log(typeof minhaIdade);

//ARRAY

let hobbies: any[] = ["cozinhar", "andar de moto", "sair"];

console.log(hobbies[0]);
console.log(hobbies[1]);
console.log(hobbies[2]);
console.log(typeof hobbies);

///tuplas

let endereco: [string, number] = ["5th avenue", 99];
console.log(endereco);
// um array que é necessário a especificação de tipo para cada posição

// enums

enum Cor {
  cinza,
  azul,
  verde,
}

let minhaCor: Cor = Cor.verde;
console.log(minhaCor);

// any

let carro: any = " BMW";
console.log(carro);
carro = {
  marca: "bmw",
  ano: 2019,
};
console.log(carro);

// functions

function retornaMeuNome(): string {
  return nome;
}
console.log(nome);

function digaOi(): void {
  console.log("oi");
}

// objects

let usuario: { nome: string; idade: number } = {
  nome: "joão",
  idade: 27,
};

console.log(usuario);
//alias AL
type Funcionario = {
  nome: string;
  cargo: string;
  salario: number;
  supervisores: string[];
  baterPonto: (horas: number) => string;
};

let funcionario: Funcionario = {
  nome: "denver",
  cargo: "técnico",
  salario: 5800,
  supervisores: ["doria", "cristo", "alonso"],
  baterPonto(horas: number): string {
    if (horas <= 8) {
      return "ponto normal";
    } else {
      return " fora do horário";
    }
  },
};

console.log(funcionario);
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));

// UNION TYPES

let nota: number | string = 10;

console.log(`minha nota é ${nota}!`);
nota = "11";
console.log(`minha nota é ${nota}!`);

// checando tipos
//let valor:number = 30;

//console.log(typeof valor);

//NEVER

function falha(msg: string): never {
  throw new Error(msg);
}
const produto = {
  nome: "sabão",
  preco: 1,
  validarProduto() {
    if (!this.nome || this.nome.trim().length == 0) {
      falha("Prescisa ter um nome");
    }
    if (this.preco <= 0) {
      falha("preco inválido");
    }
  },
};

produto.validarProduto();

let altura = 12;

//altura = null

let alturaOpcional: null | number = 12;

alturaOpcional = null;

type Contato = {
  nome: string;
  tel1: string;
  tel2: string | null;
};

const contato1: Contato = {
  nome: "fulano",
  tel1: "98745165",
  tel2: null,
};

console.log(contato1);

let podeSerNulo = null;

//exercicio
//let valor: number = 500

type Conta = {
  saldo: number;
  depositar: (valor: number) => void;
};
type Correntista = {
  nome: string;
  contaBancaria: Conta;
  contato: number[];
};
let contaBancaria: Conta = {
  saldo:3456,

  depositar(valor) {
    this.saldo += valor;
  },
};

let correntista: Correntista = {
  nome: "Etvaldo",
  contaBancaria: contaBancaria,
  contato: [98745632, 32145698],
};

correntista.contaBancaria.depositar(3000)
console.log(correntista)