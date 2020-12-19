const cipher = {
  cifrado:function(desplazamiento,texto) { //ARROW FUNCTION es mas corta el () => se sustituye por el function () {}//
  

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

    },
//a partir de aqui es el descifrado//
  descifrado:function(desplazamiento2,texto2) { //ARROW FUNCTION es mas corta el () => se sustituye por el function () {}//
  const textoIngresado2 = texto2.value;
  //texto ingresado (el que el usuario ingresa, el split es para que cada que haya nada, o sea entre letra y letra, repita todo, que lo aplique en cada caracter valorEntero=Valor de Entrada al map)
  return textoIngresado2.split('').map(l => {
    
    let valorEntero2 = l.charCodeAt(0);
      if (valorEntero2 >= 65 && valorEntero2 <= 90) {
        const valorDesplazamiento2 = parseInt(-(desplazamiento2.value));

      if (valorEntero2 + valorDesplazamiento2 < 65)
        valorEntero2 = 90 + (valorEntero2 - 65) + valorDesplazamiento2 + 1;
      

      else
        valorEntero2 = valorEntero2 + valorDesplazamiento2;
    }

    let descifrado = String.fromCharCode(valorEntero2);
    return descifrado;
    }).join("");

}};

export default cipher;
  
