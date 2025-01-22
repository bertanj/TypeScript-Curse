function meuEscopo(){
    const resultado = document.querySelector('.resultado')
    const lblpeso = document.getElementById('peso');
    const lblaltura = document.getElementById('altura');

    function receberEvento(evento){
        evento.preventDefault()

        const peso = lblpeso.value;
        const altura = lblaltura.value;

        resultado.innerHTML +=` <p>Peso: ${peso}Kg e altura ${altura}cm </p>`

        const imc = (peso / altura**2);

        if(imc < 18.5){
            resultado.innerHTML += `Você se encontra abaixo do peso. IMC = ${imc}`
        } 
        if(imc >= 18.5 && imc < 25){
            resultado.innerHTML += `Você se encontra no peso normal`
        }
        if(imc >= 25 && imc < 30){
            resultado.innerHTML += `Você se encontra com sobrepeso`
        }
        if(imc >= 30 && imc < 35){
            resultado.innerHTML += `Você se encontra com obesidade grau 1`
        }
        if(imc >= 35 && imc < 40){
            resultado.innerHTML += `Você se encontra com obesidade grau 2`
        }
        if(imc > 40 ){
            resultado.innerHTML += `Você se encontra com obesidade grau 3`
        }
    }

    document.addEventListener('submit', receberEvento);

    
    
}
meuEscopo();