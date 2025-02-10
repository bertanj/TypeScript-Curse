const elementos = [
    {tag: 'p', texto: 'Jorge 1'} ,
    {tag: 'div', texto: 'Jorge 2'},
    {tag: 'footer', texto: 'Jorge 3'},
    {tag: 'section', texto: 'Frase 4'}
];

const resultado = document.querySelector('.container');

for (let i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i];
    resultado.innerHTML += `<${tag}> ${texto} </${tag}>`;
}
