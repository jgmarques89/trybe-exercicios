// 9. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.

// Bonus: use somente um if.

const n1 = 2
const n2 = 6
const n3 = 9

if( n1 % 2 === 1 || n2 % 2 === 1 || n3 % 2 === 1 ){
    console.log('true');
} else{
    console.log('false');
}