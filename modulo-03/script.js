let nota1 = prompt("Digite o conceito do 1º trimestre (A, B, C ou D):").toUpperCase();
let nota2 = prompt("Digite o conceito do 2º trimestre (A, B, C ou D):").toUpperCase();
let nota3 = prompt("Digite o conceito do 3º trimestre (A, B, C ou D):").toUpperCase();

let freq1 = Number(prompt("Digite a frequência do 1º trimestre:"));
let freq2 = Number(prompt("Digite a frequência do 2º trimestre:"));
let freq3 = Number(prompt("Digite a frequência do 3º trimestre:"));

if (
    (nota1 == "A" || nota1 == "B" || nota1 == "C") &&
    (nota2 == "A" || nota2 == "B" || nota2 == "C") &&
    (nota3 == "A" || nota3 == "B" || nota3 == "C") &&
    freq1 >= 75 &&
    freq2 >= 75 &&
    freq3 >= 75
) {
    console.log("APROVADO(A) EM LAEC!");
} else {
    console.log("REPROVADO(A) EM LAEC!");
}
