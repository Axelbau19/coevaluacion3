//variables 
const boton = document.querySelector('button');
const alturaEntrada = document.getElementById('alturaHumano');
const pesoEntrada = document.getElementById('pesoHumano');
const resultado = document.getElementById('resultadoIMCalculo');
const popup = document.getElementById('mensajeOculto');



//functions / funciones
boton.addEventListener('click', e => {
    e.preventDefault();
    const altura = parseFloat(alturaEntrada.value);
    const peso = parseFloat (pesoEntrada.value);
    
    if(!altura || !peso){
        console.log('Por favor, ingrese su altura y peso.')
        return;
    } else if(altura <= 0 || peso <= 0){
        console.log('La altura y peso deben ser positivos.');
        return;
    } else{
        const imc = peso / Math.pow(altura, 2);
        resultado.value = imc.toFixed(3);
        if(imc < 18.5){
            popup.innerHTML = "&nbsp Bajo Peso";
        }else if(imc < 25){ 
            popup.innerHTML = "&nbsp Peso normal";
        }else if (imc < 30){
            popup.innerHTML = "&nbsp Sobrepeso";
        }else{
            popup.innerHTML = "&nbsp Obesidad";
        }
    }
    

    

})
