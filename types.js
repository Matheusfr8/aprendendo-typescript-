"use strict";
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
let hobbies = ["cozinhar", "andar de moto", "sair"];
console.log(hobbies[0]);
console.log(hobbies[1]);
console.log(hobbies[2]);
console.log(typeof hobbies);
///tuplas
let endereco = ["5th avenue", 99];
console.log(endereco);
// um array que é necessário a especificação de tipo para cada posição
// enums
var Cor;
(function (Cor) {
    Cor[Cor["cinza"] = 0] = "cinza";
    Cor[Cor["azul"] = 1] = "azul";
    Cor[Cor["verde"] = 2] = "verde";
})(Cor || (Cor = {}));
let minhaCor = Cor.verde;
console.log(minhaCor);
// any
let carro = " BMW";
console.log(carro);
carro = {
    marca: "bmw",
    ano: 2019,
};
console.log(carro);
// functions
function retornaMeuNome() {
    return nome;
}
console.log(nome);
function digaOi() {
    console.log("oi");
}
// objects
let usuario = {
    nome: "joão",
    idade: 27,
};
console.log(usuario);
let funcionario = {
    nome: "denver",
    cargo: "técnico",
    salario: 5800,
    supervisores: ["doria", "cristo", "alonso"],
    baterPonto(horas) {
        if (horas <= 8) {
            return "ponto normal";
        }
        else {
            return " fora do horário";
        }
    },
};
console.log(funcionario);
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
// UNION TYPES
let nota = 10;
console.log(`minha nota é ${nota}!`);
nota = "11";
console.log(`minha nota é ${nota}!`);
// checando tipos
let valor = 30;
console.log(typeof valor);
//NEVER
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: "sabão",
    preco: 1,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Prescisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('preco inválido');
        }
    },
};
produto.validarProduto();
let altura = 12;
//altura = null
let alturaOpcional = 12;
alturaOpcional = null;
const contato1 = {
    nome: 'fulano',
    tel1: '98745165',
    tel2: null,
};
console.log(contato1);
let podeSerNulo = null;
