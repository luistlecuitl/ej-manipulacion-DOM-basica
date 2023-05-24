const h1 = document.querySelector('h1');
const formulario = document.querySelector('#formulario');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const presult = document.querySelector('#result');

formulario.addEventListener('submit', sumarInputValues); /* 'addEventListener' es un escuchador de eventos, se tienen que dar dos argumentos, el primero es el nombre del evento que se quiere ejecutar y el segundo es el codigo JS que se quiere llamar cuando suceda el evento en cuestion */

function sumarInputValues(event) {
    console.log({event});
    event.preventDefault();
    const sumaInputs =  input1.value + " " + input2.value;  /* parseInt(input1.value) parseInt(input2.value) estas variables con para sumar números y no strings */ 
    presult.innerText = "Resultado: " + sumaInputs 
}
