// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

let xadrez = 'dama';

switch (xadrez.toLowerCase()){
        case 'rei':
        console.log(`O rei é a peça de xadrez mais importante.`);
        break;
    case 'penhao':
        console.log(`Os peões das Brancas estão localizados na segunda fileira, enquanto os peões das Negras estão localizados na sétima fileira.`);
        break;
    case 'bispo':
        console.log('Cada lado começa com dois bispos, um em uma casa clara e outro em uma casa escura.');
        break;
    case 'cavalo':
        console.log('Cada lado começa com dois cavalos - um cavalo do rei e um da dama. ');
        break;
    case 'dama':
        console.log(' dama é considerada uma peça maior (como a torre) e vale nove pontos. ');
        break;
    case 'torre':
        console.log('A torre é considerada uma peça maior (como a dama) e vale cinco pontos.');
        break;
    default:
        console.log('Nome de peça invalida');

    }