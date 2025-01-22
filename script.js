//let nome = 'aaa'
//console.log(`Meu nome é ${nome} . Estou aprendendo JS`);
const alunos = ['Mateus', 'José', 'Cacete'];

console.log(alunos[0])

const raiz = n => n ** 0.5

console.log(raiz(25))

const pessoa1 = {
    nome: 'luiz',
    sobrenome: 'bertani',
    idade: 25
};

function criarPessoa (nome,sobrenome ,idade) {
    return{
        nome:nome,
        sobrenome:sobrenome,
        idade:idade
    };
}

const pessoa1c = criarPessoa("Mateus","Bertani", 18)