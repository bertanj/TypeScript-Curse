//const tresHoras = 60 * 60 * 3 * 1000;
//const umDia = 60 * 60 * 24 * 1000;

//const data = new Date(2025, 0, 21, 15, 34, 40); // ano, mês, dia, hora, min, sec, ms
const data = new Date('2025-04-21 15:37')
console.log('Dia', data.getDate());
console.log('mês', data.getMonth() + 1);
console.log('ano', data.getFullYear());
console.log('hora', data.getHours());
console.log('min', data.getMinutes());
console.log('seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('dia semana', data.getDay() + 2);
console.log(data.toString());