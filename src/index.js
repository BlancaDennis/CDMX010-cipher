
import cipher from './cipher.js';


const desplazamiento = document.getElementById("offsetNumero")
const textoCifrado = document.getElementById("mensajeYaCifrado")
const textoSinCifrar = document.getElementById("mensajeParaCifrar")

const btnCifrar = document.getElementById("btnCifrar")

if (btnCifrar !== null){
    btnCifrar.addEventListener("click", miFuncionCifrar) 
}


function miFuncionCifrar() {
  const texto = cipher.cifrado(desplazamiento, textoSinCifrar)
  textoCifrado.innerHTML = texto
}





//console.log(mensajeYaCifrado);
