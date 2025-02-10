const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgorundColorBody = estilosBody.backgroundColor;
console.log(backgorundColorBody);

for (const p of ps) {
    p.style.backgroundColor = backgorundColorBody;
    p.style.color = '#FFFF';
}