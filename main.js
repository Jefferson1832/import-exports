const {gets, print} = require('./funcoes-auxi')
let qtd = gets()
const numerosSorteados = []

for(let i = 0; i < qtd; i++){
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado)
}

let maiorValor = 0

for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i]
    if(numeroSorteado > maiorValor){
        maiorValor = numeroSorteado
    }
    
}

print(numerosSorteados)
print(maiorValor)