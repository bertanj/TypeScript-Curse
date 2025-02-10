const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero:320
    }
};

const {nome: teste, sobrenome, idade} = pessoa;
const{endereco: {rua, numero}} = pessoa;
console.log(teste, idade);
console.log(rua, numero);