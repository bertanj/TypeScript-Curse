const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];

const [primeiroNumero, segundoNumero, ...resto] = numeros;
console.log(primeiroNumero,segundoNumero);
console.log(resto);

//para pular valores utilizar [um, , tres, , quatro...]

//indices igual de matriz contendo linha e coluna (dois indices)
const numeros2 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]; 
const [lista1, lista2, lista3]= numeros2;
console.log(lista3[2]); //lista 3 indice 2
