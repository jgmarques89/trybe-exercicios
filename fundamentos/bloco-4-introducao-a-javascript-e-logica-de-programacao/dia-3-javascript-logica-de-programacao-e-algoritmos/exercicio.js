// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

// O fatorial é representado pelo sinal !

// 4! = 4 x 3 x 2 x 1 = 24

// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

// let word = 'tryber';
// let invertido = word.split('').reverse().join('')

// console.log(invertido);

// 3- Considere o array de strings abaixo:

// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let maiorArray = array[0]

// for(index = 0; index < array.length; index +=1){
     
//         if(  maiorArray.length < array[index].length){
//            maiorArray = array[index]
//         }
// }
//     console.log(maiorArray);

// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

// let numMaior = 0;

// for(divisor = 0; divisor <= 50; divisor+= 1){
//         let primo = true;
//         for(dividendo = 2;dividendo < divisor; dividendo +=1){
//                 if(divisor%dividendo == 0){
//                         primo = false;
//                 }
//         } 
//         if (primo){
//                 numMaior = divisor; 
//         }
// }

// console.log(numMaior);

// 