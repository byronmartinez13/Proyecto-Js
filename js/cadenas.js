// Función para agregar un espacio entre cada carácter de la palabra ingresada
function generarEspaciado() {
  // Obtener la palabra ingresada por el usuario
  const palabra = document.getElementById("palabra").value;
  // obtener el control para asignar la respuesta
  const respuesta = document.getElementById("resp");

  // Inicializar una variable para almacenar la nueva palabra con espacios
  let resultado = "";

  // Usar un bucle para recorrer cada carácter de la palabra
  for (let i = 0; i < palabra.length; i++) {
    // Agregar el carácter actual a la variable resultado seguido de un espacio
    // if (palabra[i]=="a")
    resultado += palabra[i] + " ";
  }

  // Mostrar el resultado en el área de texto
  respuesta.innerHTML = resultado.trim(); // Eliminar el último espacio al final
}
function concatenarNombre() {
  // Obtener la palabra ingresada por el usuario
 const nombre = document.getElementById("nombres").value;
  // obtener el control para asignar la respuesta
  const apellido = document.getElementById("apellido").value;
  const respuesta = document.getElementById("resp");

  // Inicializar una variable para almacenar la nueva palabra con espacios
  let resultado =" ";
  resultado= nombre + " " + apellido 

 

  // Mostrar el resultado en el área de texto
  respuesta.innerHTML = resultado.trim(); // Eliminar el último espacio al final
}
function comparaFrase() {
  // Obtener la palabra ingresada por el usuario
 const frase1 = document.getElementById("frase1").value;
  // obtener el control para asignar la respuesta
  const frase2 = document.getElementById("frase2").value;
  const respuesta = document.getElementById("resp");

  if(frase1 == frase2){
    respuesta.innerHTML = "Las frases ingresadas son iguales"
  }else if(frase1<frase2){
   respuesta.innerHTML = `${frase1} **ES MAYOR QUE** ${frase2}`
  } else{
  respuesta.innerHTML = `${frase2} **ES MAYOR QUE** ${frase1}`
  }
}


function codigoASCCI(){
  const frase = document.getElementById("frase").value;
  const respuesta = document.getElementById("resp");

  let resultado = "";

  for (let i = 0; i < frase.length; i++) {
    let codigo = frase.charCodeAt(i); 
    resultado += codigo + " ";
  }

  respuesta.innerHTML = resultado.trim(); // Eliminar el último espacio al final
}

function invertirCad() {
  debugger
  const frase = document.getElementById("frase").value;
  const respuesta = document.getElementById("resp");
  lon = frase.length - 1
  msg=""

  while (lon >= 0) {
    msg  += frase[lon]
    lon = lon - 1
  }

  respuesta.innerHTML = msg
}

function contVoc() {
  debugger
  const frase = document.getElementById("frase").value;
  const respuesta = document.getElementById("resp");
  lon = frase.length

  let cont=0
  let acum=0
  let letra=""

  while (cont<lon){
    letra=frase[cont]

    if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u' || letra == 'A' || letra == 'E' || letra == 'I' || letra == 'O' || letra == 'U'){
      acum=acum+1
    }
    cont=cont+1
  }


  respuesta.innerHTML = `El numero de vocales es : ${acum}`
}
function contLet() {
  debugger
  const frase = document.getElementById("frase").value;
  const respuesta = document.getElementById("resp");
  lon = frase.length

  let cont=0
  let acum=0
  let letra=""

  while (cont<lon){
    letra=frase[cont]

    if (letra >="a" && letra<="z" || letra >="A" && letra<="Z"){
      acum=acum+1
    }
    cont=cont+1
  }


  respuesta.innerHTML = `El numero de letras es : ${acum}`
}

function contDig() {
  debugger
  const frase = document.getElementById("frase").value;
  const respuesta = document.getElementById("resp");
  lon = frase.length

  let cont=0
  let acum=0
  let num=0

  while (cont<lon){
    num=frase[cont]

    if (num>0 && num<9){
      acum=acum+1
    }
    cont=cont+1
  }


  respuesta.innerHTML = `El numero de Digitos en este texto es : ${acum}`
}

function contSig() {
  debugger
  const texto = document.getElementById("texto").value;
  const respuesta = document.getElementById("resp");
  lon = texto.length

  let cont=0
  let acum=0
  let letra=""

  while (cont<lon){
    letra=texto[cont]

    if (letra === '.' || letra == ',' || letra == ';' || letra == ':' || letra === '...' || letra == '¿' || letra == '?' || letra == '¡' || letra == '!' || letra == '_'){
      acum=acum+1
    }
    cont=cont+1
  }


  respuesta.innerHTML = `El numero de signos de puntuación es : ${acum}`
}

function conPalabra() {
  debugger
  const texto = document.getElementById("texto").value.trim();
  const respuesta = document.getElementById("resp");
  lon = texto.length

  let cont=0
  let acum=1
  let palabra=""

  while (cont<lon){
    palabra=texto[cont]

    if (palabra ==' '){
      acum=acum+1
    }
    cont=cont+1
  }


  respuesta.innerHTML = `El numero de palabras es : ${acum}`
}