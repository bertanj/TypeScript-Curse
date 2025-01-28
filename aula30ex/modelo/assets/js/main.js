const h1 = document.querySelector('.containerh1')
const data = new Date();
let diaSemana = data.getDay;
let mesAno = data.getMonth;
const resultado = document.querySelector('.container')

function zeroAEsquerda(num){
    return num < 10 ? `0${num}` : num;
}

function getDiaSemanaTxt(diaSemana){
    let diaSemanatxt;

    switch (diaSemana){
        case 0 :
        diaSemanatxt = 'Domingo';
        return diaSemanatxt;

        case 1 :
            diaSemanatxt = 'Segunda';
            return diaSemanatxt;
            

        case 2 :
            diaSemanatxt = 'Terça';
            return diaSemanatxt;

        case 3 :
            diaSemanatxt = 'Quarta';
            return diaSemanatxt;

        case 4 :
            diaSemanatxt = 'Quinta';
            return diaSemanatxt;

        case 5 :
            diaSemanatxt = 'Sexta';
            return diaSemanatxt;

        case 6 :
            diaSemanatxt = 'Sabado';
            return diaSemanatxt;
        }
}

function getNomeMes(mesAno){
    let mesAnotxt;

    switch (mesAno){

        case 0 :
        mesAnotxt = 'Janeiro';
        return mesAnotxt;

        case 1 :
            mesAnotxt = 'Fevereiro';
            return mesAnotxt;

        case 2 :
            mesAnotxt = 'Março';
            return mesAnotxt;

        case 3 :
            mesAnotxt = 'Abril';
            return mesAnotxt;

        case 4 :
            mesAnotxt = 'Maio';
            return mesAnotxt;

        case 5 :
            mesAnotxt = 'Junho';
            return mesAnotxt;

        case 6 :
            mesAnotxt = 'Julho';
            return mesAnotxt;
        case 7 :
            mesAnotxt = 'Agosto';
            return mesAnotxt;

        case 8 :
            mesAnotxt = 'Setembro';
            return mesAnotxt;

        case 9 :
            mesAnotxt = 'Outubro';
            return mesAnotxt;

        case 10 :
            mesAnotxt = 'Novembro';
            return mesAnotxt;

        case 11 :
            mesAnotxt = 'Dezembro';
            return mesAnotxt;
        }
}

function formatarData(){
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTxt(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return `${nomeDia}, ${zeroAEsquerda(data.getDate())} de ${nomeMes} de ${data.getFullYear()} ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}` 
}

h1.innerHTML = formatarData(data);



    