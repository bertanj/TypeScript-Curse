const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let num of numeros) {

    if(num === 2){
        console.log('#')
        continue;
    }

    if (num === 7){
        console.log("7 encontrado, saindo...")
        break;
    }

    console.log(num);
    
}