const number = document.getElementById('number');

function repeatString(texto, repeticiones){
    let textos = '';
    while(repeticiones>0){
        const p = document.createElement('h1')
        textos.concat(p);
        repeticiones-1;
    }
    number.textContent = textos;
}


repeatString('hola',5);