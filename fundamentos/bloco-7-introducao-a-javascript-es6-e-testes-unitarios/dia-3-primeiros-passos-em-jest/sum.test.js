const { sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate } = require("./sum.js");

// 1.

// describe('testa a função sum', () => {
//   it("retorna o resultado da soma", () => {
//     expect(sum(4, 5)).toEqual(9);
//     expect(sum(0, 0)).toEqual(0);
//   });

//   it('dispara um erro recebendo um parâmetro como string', () => {
//     expect(()=> sum(4,'5')).toThrowError();
//     expect(()=> sum(4,'5')).toThrowErrow('parameters must be numbers')
//   });

// });

// 2.

// describe("verifica se a função myRemove", () => {
//   it("retorna removendo o item", () => {
//     expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
//   });
//   it("não retorna o array", () => {
//     expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
//   });
//   it("retorna removendo o item", () => {
//     expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
//   });
// });

// 3.

// describe("Verifica se a função retorna o esperado", () => {
//   it("verifica o numero divisivel por 3 e 5 retorna fizzbuzz", () => {
//     expect(myFizzBuzz(45)).toEqual("fizzbuzz");
//   });

//   it("verifica o numero divisivel por 3 retorna fizz", () => {
//     expect(myFizzBuzz(9)).toEqual("fizz");
//   });

//   it("verifica o numero divisivel por 5 retorna buzz", () => {
//     expect(myFizzBuzz(25)).toEqual("buzz");
//   });

//   it("verifica que o numero não divisivel por 3 e 5", () => {
//     expect(myFizzBuzz(1)).toEqual(1);
//   });

//   it("verifica que não é um numero válido", () => {
//     expect(myFizzBuzz("5")).toEqual(false);
//   });
// });

// 4.

describe('Testa a função encode e decode', () => {
  it('a função encode é definida', () => {
    expect(encode).toBeDefined();
  });
  it('encode é uma função', () => {
    expect(typeof encode).toEqual('function');
  });
  it('converte apenas a vogal "a" no número 1', () => {
    expect(encode('ana')).toEqual('1n1');
  });
  it('converte a vogal "e" no número 2', () => {
    expect(encode('ele')).toEqual('2l2');
  });
  it('converte a vogal "i" no número 3', () => {
    expect(encode('xixi')).toEqual('x3x3');
  });
  it('converte a vogal "o" no número 4', () => {
    expect(encode('ovo')).toEqual('4v4');
  });
  it('converte a vogal "u" no número 5', () => {
    expect(encode('nu')).toEqual('n5');
  });
  it('checa se o retorno da função tem o mesmo número de caracteres', () => {
    expect(encode('trybe').length).toEqual(5);;
  });

  it('a função decode é definida', () => {
    expect(decode).toBeDefined();
  });
  it('decode é uma função', () => {
    expect(typeof decode).toEqual('function');
  });
  it('converte apenas o número 1 na vogal a', () => {
    expect(decode('1n1')).toEqual('ana');
  });
  it('converte apenas o número 2 na vogal e', () => {
    expect(decode('2l2')).toEqual('ele');
  });
  it('converte apenas o número 3 na vogal i', () => {
    expect(decode('x3x3')).toEqual('xixi');
  });
  it('converte apenas o número 4 na vogal o', () => {
    expect(decode('4v4')).toEqual('ovo');
  });
  it('converte apenas o número 5 na vogal u', () => {
    expect(decode('n5')).toEqual('nu');
  });
  it('checa se o retorno da função tem o mesmo número de caracteres', () => {
    expect(decode('trybe').length).toEqual(5);
  });
});
