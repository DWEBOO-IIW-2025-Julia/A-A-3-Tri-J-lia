//Ex 1
console.log(10 + 19 + 8 * 4);//61
console.log((10/2) * 4);//20
console.log((2 ** 3 + 1));//9
console.log(20 % 4);//0

//Ex 2
console.log(90 > 10); //verdadeiro
console.log(10 == '10'); //verdadeiro
console.log(10 !== 10); //falso
console.log('ifpr' === 'IFPR');//falso
console.log(5 >= 5 && 3 > 4);//falso
console.log(5 >= 5 || 3 > 4);//verdadeiro
console.log(!(5 >= 5));// falso

//Ex 3
let ano = Number(prompt("Digite um ano:"));
let bissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
console.log("O ano " + ano + (bissexto ? " é bissexto!" : " não é bissexto."));

//Ex 4
let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));
let nota3 = Number(prompt("Digite a terceira nota:"));
let media = (nota1 + nota2 + nota3) / 3;
console.log("Sua média é: " + media.toFixed(1));

