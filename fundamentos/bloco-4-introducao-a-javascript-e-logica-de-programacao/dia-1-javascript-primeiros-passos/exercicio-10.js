const custoProduto = 10
const valorVenda = 20
const impostoSobreOCusto = 1.20
const numerosVendas = 1000


if (custoProduto < 0 || valorVenda < 0 ){
    console.log('Erro');
} else{
    const lucroUnitario = valorVenda - (custoProduto * impostoSobreOCusto)
    const lucroTotal = (lucroUnitario * numerosVendas)
    console.log(` em ${numerosVendas} vendas o lucro total foi de ${lucroTotal}`);
}