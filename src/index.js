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

//De aqui es el de descifrado//

const desplazamiento2 = document.getElementById("offsetNumeroD")
const textoSinDescifrar = document.getElementById("mensajeParaDescifrar")
const textoDescifrado = document.getElementById("mensajeYaDescifrado")


const btnDescifrar = document.getElementById("btnDescifrar")

if (btnDescifrar !== null){
  btnDescifrar.addEventListener("click", miFuncionDescifrar)
} 

function miFuncionDescifrar() {
  const texto2 = cipher.descifrado(desplazamiento2, textoSinDescifrar)
  textoDescifrado.innerHTML = texto2
}
