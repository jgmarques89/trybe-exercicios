// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

// function testPalindromo(palavra){
//     if (palavra.split('').reverse().join('') === palavra){
//        return 'TRUE'
//     } else {
//         return 'false'
//     }
// }

// // let palavra = 'arara'
// let palavra = 'desenvolvimento'

// console.log(testPalindromo(palavra));

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// let numeros = [2, 3, 6, 7, 10, 1];
// let indice = numeros[0]

// function maiorIndice(num){
//     for ( i = 0; i < numeros.length; i += 1){
//         if ( numeros[i] > indice){
//             indice = i
            
//         }
//     }

//     return 'indice ' + indice
// }

// console.log(maiorIndice(numeros));

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

// let numeros= [2, 4, 6, 7, 10, 0, -3];
// let indice = numeros[0]

// function menorIndice(num){
//     for(i=0; i < numeros.length; i+=1){
//         if (numeros[i] < indice ){
//             indice = i
//         }
//     }

//     return indice
// }

// console.log(menorIndice(numeros));

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

// let arrayNome= ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

// function maiorNome(name){
//     let numNome = [0]
//     for(i = 0; i < name.length; i +=1){
//         if ( name[i].length > numNome.length) {
//             numNome = name[i]
//         }
//     }

//     return numNome
// }

// console.log(maiorNome(arrayNome))

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

// 7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
