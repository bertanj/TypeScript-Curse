const data = new Date();
let diaSemana = data.getDay;
let diaSemanatxt

switch (diaSemana){
    case 0 :
    diaSemanatxt = 'Domingo';
    break;

    case 1 :
        diaSemanatxt = 'Segunda';
        break;

    case 2 :
        diaSemanatxt = 'Terça';
        break;

    case 3 :
        diaSemanatxt = 'Quarta';
        break;

    case 4 :
        diaSemanatxt = 'Quinta';
        break;

    case 5 :
        diaSemanatxt = 'Sexta';
        break;

    case 6 :
        diaSemanatxt = 'Sabado';
    }