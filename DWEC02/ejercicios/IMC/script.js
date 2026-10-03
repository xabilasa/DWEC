'use strict'

function calcula(){
    const estatura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const imc = peso/(estatura*estatura);
    document.getElementById('resultado').innerText = `Tu IMC es de ${imc.toFixed(2)}`;
}
