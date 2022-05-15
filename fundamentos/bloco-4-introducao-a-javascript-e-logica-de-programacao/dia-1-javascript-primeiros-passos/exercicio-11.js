
// 11. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

let salarioBruto = 4000 


// DESCONTO DO CALCULO DO INSS 

let descontoInss =  null

//Salário bruto até R$ 1.556,94: alíquota de 8%
if ( salarioBruto <= 1556.94){ descontoInss = salarioBruto * 0.08
} else if ( salarioBruto >= 1556.95 && salarioBruto <= 2594.92 ){
    descontoInss = salarioBruto * 0.09
} else if ( salarioBruto >= 2594.93 && salarioBruto <= 5189.82 ){
    descontoInss = salarioBruto * 0.11
} else if ( salarioBruto >= 5189.82) {
    descontoInss = salarioBruto - 570.88
}

// CALCULO DO SALARIO BASE

let salarioBase = salarioBruto - descontoInss

// DESCONTO DE IR

let taxaIr = null;
let taxaDeducao = null;

if (salarioBase <= 1903.98){
    taxaIr = 0;
    taxaDeducao = 0;
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65){
    taxaIr = salarioBase * 0.075
    taxaDeducao = 142.80
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05){
    taxaIr = salarioBase * 0.15
    taxaDeducao = 354.80
} else if (salarioBase >= 3751.06 && 4664.68){
    taxaIr = salarioBase * 0.225
    taxaDeducao = 636.13
} else if (salarioBase >= 4664.68){
    let taxaIr = salarioBase * 0.275
    let taxaDeducao = 869.36
}   

let salarioLiquido = salarioBase - (taxaIr - taxaDeducao);

console.log(`Você recebeu ${salarioBruto} reais e foi descontado ${descontoInss} reais do INSS e ${taxaIr - taxaDeducao} do Imposto de Renda com dedução de ${taxaDeducao} reais. Seu salario liquido é de ${salarioLiquido}`)
