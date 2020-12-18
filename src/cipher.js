const cifrado = (desplazamiento,texto) => { //ARROW FUNCTION es mas corta el () => se sustituye por el function () {}//
 

  const textoIngresado = texto.value;
  //texto ingresado (el que el usuario ingresa, el split es para que cada que haya nada, o sea entre letra y letra, repita todo, que lo aplique en cada caracter valorEntero=Valor de Entrada al map)
  return textoIngresado.split('').map(l => {
    
    let valorEntero = l.charCodeAt(0);
      if (valorEntero >= 65 && valorEntero <= 90) {
        const valorDesplazamiento = parseInt(desplazamiento.value);

      if (valorEntero + valorDesplazamiento > 90)
        valorEntero = 65 + (valorEntero - 90) + valorDesplazamiento - 1;

      else
        valorEntero = valorEntero + valorDesplazamiento;
    }

    let cifrado = String.fromCharCode(valorEntero);
    return cifrado;
    }).join("");

  }


const cipher = {
  cifrado, 
  descifrado:null
};

export default cipher;
