// 1.

const factorial = (number) => {
  let result = 1;

  for (let index = 2; index <= number; index += 1) {
    result *= index;
  }

  return result;
};

console.log(factorial(4));

// 2.

let longestWord = (str) => {
  str = str.split(" ");

  return str.sort((a, b) => b.length - a.length)[0];
};

console.log(
  longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")
); 

// 3.

{/* <span id="text"></span> */}

{/* <button id="button_test">click aqui!</button> */}

let clickCount = 0;
const textToDisplay = document.getElementById("text");
const buttonTest = document.getElementById("button_test");

buttonTest.addEventListener(
  "click",
  () => (textToDisplay.innerHTML = clickCount += 1)
); 

// 4.

// função 1

const substituaX = (nome) => {
  const frase = 'Tryber x aqui!';
  const fraseArray = frase.split(' ');
  for (let index = 0; index < fraseArray.length; index += 1) {
    if (fraseArray[index] === 'x') {
      fraseArray[index] = nome;
    }
  }  
  return fraseArray.join(' ');
};

console.log(substituaX('Bebeto'));

// função 2 

const minhasSkills = (func) => {
  const skills = ['JavaScript', 'HTML', 'CSS'];
  let resultado = `
{func}

  Minhas três principais habilidades são:`;

  skills.forEach((skill) => { // estrutura de repetição para iterar sobre o array de skills
    resultado = `${resultado}
    - ${skill}`;
  }); // reatribui e adiciona a skill atual a variável resultado
  return resultado;
};

console.log(minhasSkills(substituaX('Bebeto')));