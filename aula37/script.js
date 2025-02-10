const nomes = ['Luiz',  'Otávio', 'Henrique'];

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

console.log('#######')

for (let i in nomes) {
    console.log(nomes[i]);
}

console.log('#######')

for (let value of nomes) {
    console.log(value);
}

console.log('#######')

nomes.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
})