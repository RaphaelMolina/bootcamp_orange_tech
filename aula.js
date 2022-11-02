//Comentário
/*Comentário*/
/* Aula 01
let variavel = 10;//Declarando variável.
const constante = 10;//Declarando constante:
console.log('Imprimir algo');//Imprime na tela.
console.log(variavel);//Imprime na tela.
variavel = 20;//Atribuindo valor a uma variável.
console.log(variavel);//Imprime na tela.
variavel = 20 + 20;//Soma.
console.log(variavel);//Imprime na tela.
variavel = 20 - 20;//Subtração.
console.log(variavel);//Imprime na tela.
variavel = 20 * 20;//Multiplicação.
console.log(variavel);//Imprime na tela.
variavel = 20 / 20;//Divisão.
console.log(variavel);//Imprime na tela.

console.log(' ');//Imprime na tela.
const combustivelValor = 5.79;
const gastoCarro = 13;
const distancia = 1738;
const resultado = (distancia / gastoCarro) * combustivelValor;
console.log(resultado);//Imprime na tela.
console.log(resultado.toFixed(2));//toFixed(2) converte o valor para string e arredonda limita o numero de casas.
*/
/*
const numero = 0;
const isnumeroPar = (numero %2 ) === 0;
console.log(isnumeroPar);
if (isnumeroPar) {
	console.log('Número Par');	
}else{
	console.log('Número Ímpar');
}
if (!isnumeroPar) {
	console.log('Número Ímpar');	
}

if (numero === 0) {
	console.log('Número Inválido');	
}else if (isnumeroPar) {
	console.log('Número Par');
}else{
	console.log('Número Ímpar');
}
const tipoCombustivel = 'e';
const etanol = 2.50;
const gasolina = 5;
const gastoKM = 10;
const distancia = 100;
let resultado = 0;
if (tipoCombustivel === 'e') {
	resultado = (distancia/gastoKM)*etanol;
} else {
	resultado = (distancia/gastoKM)*gasolina;
}
console.log(resultado.toFixed(2));
// a String é definida po "",'' ou ``. Utilizar '' ou ``.
//Quando uma variável ou constante é definida dentro de um if ele não pode ser utilizada fora.
*/
/*
const nota1 = 8;
const nota2 = 8;
const nota3 = 8;
const media = (nota1+nota2+nota3)/3;
let status = '';

if (media < 5){
	status = 'Reprovado!';
}else if (media >= 5 && media <= 7){
	status = 'Recuperação!';
}else{
	status = 'Aprovado!';
}
console.log(media);
console.log(status);
*/
/*
const peso = 90;
const altura = 1.80;
const imc = peso / (altura*altura);
let status = '';
if (imc<18.5){
	status = 'Abaixo do peso';
} else if (imc >= 18.5 && imc <= 25){
	status = 'Peso normal';
} else if (imc > 25 && imc <= 30){
	status = 'Acima do peso';
} else if (imc > 30 && imc <= 40){
	status = 'Obeso';
} else {
	status = 'Obesidade grave';
}

console.log(imc);
console.log(status);
console.log(Math.pow(altura,2));
*/
/*
const valor = 100;
const formaPg = '5x';
const formaPag = 4;
let novoValor = 0;

if (formaPg === 'Débito'){
	console.log('À vista no Débito');
	novoValor = valor - ((valor*10)/100);
} else if (formaPg === 'Dinheiro'){
	console.log('À vista no Dinheiro ou Pix');
	novoValor = valor - ((valor*15)/100);
} else if (formaPg === '2x'){
	console.log('Em duas vezes');
	novoValor = valor;
} else	{
	console.log('Acima de duas vezes');
	novoValor = valor + ((valor*10)/100);
}
console.log(novoValor);
if (formaPag === 1){
	console.log('À vista no Débito');
	novoValor = valor - ((valor*10)/100);
} else if (formaPag === 2){
	console.log('À vista no Dinheiro ou Pix');
	novoValor = valor - ((valor*15)/100);
} else if (formaPag === 3){
	console.log('Em duas vezes');
	novoValor = valor;
} else	{
	console.log('Acima de duas vezes');
	novoValor = valor + ((valor*10)/100);
}
console.log(novoValor);
*/
/*
function teste(){
	console.log('Teste');
}

teste();

function sayMyName(name){
	console.log('Your name is ' + name + '.');
}

sayMyName('Davi');

function quadrado(valor){
	return valor * valor;
}

const quadradoNumero = quadrado(10);
console.log(quadradoNumero);

function juros(valor, juros){
	return valor + ((valor*juros)/100)
}

console.log(juros(100,10));
*/
/*
function calcularImc(peso, altura){
	//return peso / (altura*altura);
	return peso / Math.pow(altura,2);
}
function classificarImc(imc){
	if (imc<18.5){
		return 'Abaixo do peso';
	} else if (imc >= 18.5 && imc <= 25){
		return 'Peso normal';
	} else if (imc > 25 && imc <= 30){
		return 'Acima do peso';
	} else if (imc > 30 && imc <= 40){
		return 'Obeso';
	} else {
		return 'Obesidade grave';
	}
}

function main(){
	console.log('Programa principal');
	const peso = 80;
	const altura = 1.80; 
	const imc = calcularImc(peso, altura);
	console.log(classificarImc(imc));
}

main();
console.log(main);
const main2 = main;
console.log(main2);
main2();

main = function() {
	console.log(1);
}
main();

//Main
(function (){
	console.log('Função imediatemente Invocada.')
})
();
*/
/*
function escreverNome(name){
	//console.log('Meu nome é ' + name + '.');
	return 'Meu nome é ' + name + '. ';
}

function verificarMaiorIdade(idade){
	if(idade >= 18){
		//return 'Maior de Idade';
		//console.log('Maior de Idade');
		console.log(escreverNome('Raphael') + 'Maior de Idade');
	} else {
		//return 'Menor de Idade';
		//console.log('Menor de Idade');
		console.log(escreverNome('Raphael') + 'Menor de Idade');
	}
}
(function(){
	//escreverNome('Raphael');
	//console.log(verificarMaiorIdade(33));
	verificarMaiorIdade(33);
})();
*/
/*
function calcularPreco(preco, formaPg){
	if (formaPg === 1){
		console.log('À vista no Débito o novo valor será R$'+ (preco - ((preco*10)/100)).toFixed(2));
	} else if (formaPg === 2){
		console.log('À vista no Dinheiro ou Pix o novo valor será R$' + (preco - ((preco*15)/100)).toFixed(2));
	} else if (formaPg === 3){
		console.log('Em duas vezes o valor será R$' + preco.toFixed(2));
	} else	{
		console.log('Acima de duas vezes o novo valor será R$' + (preco + ((preco*10)/100)).toFixed(2));
	}
}
function calcularDesconto(preco, desconto){
	return (preco - (preco* (desconto/100))).toFixed(2);
}
function calcularJuros(preco, juros){
	return (preco + (preco* (juros/100))).toFixed(2);	
}

function calcularNovoPreco(preco, formaPg){
	if (formaPg === 1){
		console.log('À vista no Débito o novo valor será R$'+ calcularDesconto(preco, 10));
	} else if (formaPg === 2){
		console.log('À vista no Dinheiro ou Pix o novo valor será R$' + calcularDesconto(preco, 15));
	} else if (formaPg === 3){
		console.log('Em duas vezes o valor será R$' + preco.toFixed(2));
	} else	{
		console.log('Acima de duas vezes o novo valor será R$' + calcularJuros(preco, 10));
	}
}
(function (){
	const preco = 100;
	const formaPg = 1;
	calcularPreco(preco, formaPg);
	calcularNovoPreco(preco, formaPg);	
})
();
*/
/*
const pessoa = {
	nome: 'Raphael Molina',
	idade: 32,
	peso: 90.00,
	altura: 1.80,

	descrever: function(){
		console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}.`);
	}
};
pessoa.nascimento = '20/09/1989';
pessoa.empresa = 'Simova';
console.log(pessoa);
delete pessoa.empresa;
console.log(pessoa.nome);
console.log(pessoa.altura);
console.log(pessoa);
pessoa.descrever();
pessoa.nome = 'Molina';
pessoa.idade = 37;
pessoa.descrever();
pessoa.descrever = function(){
	console.log(`Meu nome é ${this.nome}.`);
}
pessoa.descrever();
const atributo = 'idade';
console.log(pessoa[atributo]);
console.log(pessoa['nome']);
pessoa['peso'] = 90.01;
console.log(pessoa);

class Pessoa{
	nome;
	idade;
	peso;
	altura;
	nascimento;
	empresa;
	anoNascimento;
	constructor(nome, idade){
		this.nome = nome;
		this.idade = idade;
		this.anoNascimento = 2022 - idade;
		this.peso = 0;
		this.altura = 0;
		this.nascimento = 'Sem data';
		this.empresa = 'Sem empresa';
	}
	descrever(){
		console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}.`);	
	}
}

const raphael = new Pessoa();
console.log(raphael);
raphael.nome = 'Raphael Molina';
raphael.idade = 33;
raphael.peso = 90.00;
raphael.altura = 1.80;
raphael.nascimento = '20/09/1989';
raphael.empresa = 'Simova';
console.log(raphael);
raphael.descrever();
const pessoinha = new Pessoa('Pessoinha', 27);
console.log(pessoinha);

function compararPessoas(pessoa1, pessoa2){
	if(pessoa1.idade > pessoa2.idade){
		console.log(`${pessoa1.nome} é mais velho(a) que ${pessoa2.nome}.`);
	} else if (pessoa1.idade < pessoa2.idade){
		console.log(`${pessoa2.nome} é mais velho(a) que ${pessoa1.nome}.`);
	} else {
		console.log(`${pessoa1.nome} e ${pessoa2.nome} tem a mesma idade.`);
	}
}

const pessoaX = new Pessoa('Pessoa X', 33);
const pessoaY = new Pessoa('Pessoa Y', 10);

compararPessoas(pessoaX, pessoaY);
*/

class Carro{
	marca;
	cor;
	gastoMedio;

	constructor(marca, cor, gastoMedio){
		this.marca = marca;
		this.cor = cor;
		this.gastoMedio = 1/gastoMedio;
	}

	calcularGasto(km, preco){
		return valor = km*this.gastoMedio*preco; 
		console.log(`O valor gasto foi de R$ ${valor.toFixed(2)}`);
	}
}

const carro1 = new Carro('Fusca', 'Vermelho', 10);
carro1.calcularGasto(100, 5);
console.log(carro1);