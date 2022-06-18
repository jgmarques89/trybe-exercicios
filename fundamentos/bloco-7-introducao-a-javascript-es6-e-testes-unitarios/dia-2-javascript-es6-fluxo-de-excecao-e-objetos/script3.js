const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercício 1

let funcao = (param1, param2, param3) => {

  console.log(param1[param2] = param3);

}

// funcao(lesson2, 'turno', 'noite')

// console.log(lesson2);

// Exercício 2

let keys = (obj) => {

  console.log(Object.keys(obj))

}

// keys(lesson3)

// Exercício 3

let sizeObj = (param1) => {

  console.log(Object.keys(param1).length)

}

// tamanho(lesson1)

// Exercício 4

let printValue = (param1) => {

  console.log(Object.values(param1));

}

// printValue(lesson1)

// Exercício 5

let allLessons = {}

Object.assign(allLessons, { lesson1, lesson2, lesson3 })

// console.log(allLessons);

// Exercício 6

let numTotalStudent = (param1) => {

  let key = Object.keys(param1);
  total = 0;

  for (let index = 0; index < key.length; index += 1) {
    let currentKey = key[index];

    total += param1[currentKey].numeroEstudantes
  }

  return total
}

// console.log(numTotalStudent(allLessons));


// Exercício 7

let valueNumber = (param1,param2) => {

Object.values(param1)[param2]

}

// console.log( valueNumber(lesson1,0))


// Exercício 8

const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (let index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
  }
  return isEqual;
};
console.log(verifyPair(lesson2,'professor','Carlos'));
