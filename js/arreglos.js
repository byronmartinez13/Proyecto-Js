// Función simplificada para calcular el promedio de números mayores a un valor dado
function calcularPromedio() {
  // Obtener los valores ingresados por el usuario
  const numerosStr = document.getElementById("numeros").value;
  const limiteStr = document.getElementById("limite").value;
  const respuesta = document.getElementById("resp");

  // Convertir la lista de números y el límite en enteros
  const numeros = numerosStr.split(';').map(num => parseFloat(num.trim()));
  const limite = parseFloat(limiteStr);

  // Inicializar variables para la suma y el conteo
  let suma = 0;
  let conteo = 0;

  // Recorrer el arreglo de números y calcular la suma de los que son mayores al límite
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > limite) {
      suma += numeros[i];
      conteo++;
    }
  }

  // Calcular el promedio si hay números que cumplan la condición
  let promedio = 0;
  if (conteo > 0) {
    promedio = suma / conteo;
    respuesta.innerHTML = `Promedio: ${promedio.toFixed(2)}`;
  } else {
    respuesta.innerHTML = "No hay números mayores que el límite.";
  }
}

function numGen() {
  let arreglo = []; 
  let msg = "";

// Obtener los valores ingresados por el usuario
  const respuesta = document.getElementById("resp");

  for (let i = 0; i < 10; i++) {
      arreglo.push(Math.floor(Math.random() * 100)); // Número aleatorio entre 0 y 100
  }
  

  for (let i = 0; i < arreglo.length; i++) {
    msg += arreglo[i] + " ";
  }
  respuesta.innerHTML = msg .trim()
}

// Función simplificada para calcular el promedio de números mayores a un valor dado
function calcuProm() {
  // Obtener los valores ingresados por el usuario
  const numerosStr = document.getElementById("numeros").value;
  const respuesta = document.getElementById("resp");

  // Convertir la lista de números y el límite en enteros
  const numeros = numerosStr.split(';').map(num => parseFloat(num.trim()));

  // Inicializar variables para la suma y el conteo
  let suma = 0;
  let conteo = 0;

  // Recorrer el arreglo de números y calcular la suma de los que son mayores al límite
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
    conteo++;

  }

  // Calcular el promedio si hay números que cumplan la condición
  let promedio = 0;
  if (conteo > 0) {
    promedio = suma / conteo;
    respuesta.innerHTML = `Tu Promedio es de: ${promedio.toFixed(2)}`;
  }
}
function numMax() {
  // Obtener los valores ingresados por el usuario
  const numerosStr = document.getElementById("numeros").value;
  const respuesta = document.getElementById("resp");

  // Convertir la lista de números y el límite en enteros
  const numeros = numerosStr.split(';').map(num => parseFloat(num.trim()));

  // Inicializar variables para la suma y el conteo
  let numeroMay = numeros[0]

  // Recorrer el arreglo de números y calcular la suma de los que son mayores al límite
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > numeroMay) {
        numeroMay = numeros[i];
    }
  }

  respuesta.innerHTML= `El número más alto ingresado es: ${numeroMay}`
}

function numMin() {
  // Obtener los valores ingresados por el usuario
  const numerosStr = document.getElementById("numeros").value;
  const respuesta = document.getElementById("resp");

  // Convertir la lista de números y el límite en enteros
  const numeros = numerosStr.split(';').map(num => parseFloat(num.trim()));

  // Inicializar variables para la suma y el conteo
  let numeroMin = numeros[0]

  // Recorrer el arreglo de números y calcular la suma de los que son mayores al límite
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < numeroMin) {
        numeroMin = numeros[i];
    }
  }

  respuesta.innerHTML= `El número más bajo ingresado es: ${numeroMin}`
}

function calcuSum() {
  // Obtener los valores ingresados por el usuario
  const numerosStr = document.getElementById("numeros").value;
  const respuesta = document.getElementById("resp");

  const numeros = numerosStr;

  // Inicializar variables para la suma y el conteo
  let suma = 0;

  // Recorrer el arreglo de números y calcular la suma de los que son mayores al límite
  for (let i = 0; i < numeros.length; i++) {
    suma += parseInt(numeros[i]);
  }

  respuesta.innerHTML = `El resultado es : ${suma}`;
  
}

function calcuPromPar() {
  // Obtener los valores ingresados por el usuario
  const numerosStr = document.getElementById("numeros").value;
  const respuesta = document.getElementById("resp");

  // Convertir la lista de números y el límite en enteros
  const numeros = numerosStr.split(';').map(num => parseFloat(num.trim()));

  // Inicializar variables para la suma y el conteo
  let suma = 0;
  let conteo = 0;

  // Recorrer el arreglo de números y calcular la suma de los que son mayores al límite
  for (let i = 0; i < numeros.length; i++) {
    if ( numeros[i] % 2 ===0){
      suma += numeros[i];
      conteo++;

    }

  }

  // Calcular el promedio si hay números que cumplan la condición
  let promedio = 0;
  if (conteo > 0) {
    promedio = suma / conteo;
    respuesta.innerHTML = `El Promedio de los números pares es de: ${promedio.toFixed(2)}`;
  }
}

function sumNums() {
  // Obtener los valores ingresados por el usuario (suponiendo que están separados por comas)
  const numerosStr = document.getElementById("numeros").value;
  const respuesta = document.getElementById("resp");

  // Convertir los valores ingresados en un arreglo de números
  const numeros = numerosStr.split(";").map(num => parseInt(num.trim()));
  if (numeros.length !==10){
    respuesta.innerHTML = "Debes ingresar 10 números por favor"
    return;
  }

  let numpos = 0;
  let numneg = 0;
  let sumPos = 0;
  let sumNeg = 0;

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 0) {
      numpos++;
      sumPos += numeros[i];
    } else if (numeros[i] < 0) {
      numneg++;
      sumNeg += numeros[i];
    }
  }

  respuesta.innerHTML = `
    Cantidad de números positivos: ${numpos}
    Suma de números positivos: ${sumPos}
    Cantidad de números negativos: ${numneg}
    Suma de números negativos: ${sumNeg}
  `;
}

function calcuCuad() {
  // Obtener los valores ingresados por el usuario
  const numerosStr = document.getElementById("numeros").value;
  const respuesta = document.getElementById("resp");

  // Convertir la lista de números y el límite en enteros
  const numeros = numerosStr.split(';').map(num => parseFloat(num.trim()));
  let cuadrado =0
  let msg="";

  // Recorrer el arreglo de números y calcular la suma de los que son mayores al límite
  for (let i = 0; i < numeros.length; i++) {
    cuadrado = numeros[i] * numeros[i]
    msg += cuadrado + " "
  }

    respuesta.innerHTML = `estos son los cuadrdados de los numeros ingresados: ${msg}`;
  
}

// Función simplificada para calcular el promedio de números mayores a un valor dado
function sumArreglos() {
  // Obtener los valores ingresados por el usuario
  const arreglo1 = document.getElementById("arreglos1").value;
  const arreglo2 = document.getElementById("arreglos2").value;
  const respuesta = document.getElementById("resp");

  // Convertir la lista de números y el límite en enteros
  const numeros1 = arreglo1.split(';').map(num => parseFloat(num.trim()));
  const numeros2 = arreglo2.split(';').map(num => parseFloat(num.trim()));

  // Inicializar variables para la suma y el conteo
 
  if (numeros1.length !==numeros2.length){
    respuesta.innerHTML = "Debes ingresar la misma cantidad de numeros en los dos arreglos por favor"
    return;
  } 
  let msg="";
  // Recorrer el arreglo de números y calcular la suma de los que son mayores al límite
  for (let i = 0; i < numeros1.length; i++) {
   const suma = numeros1[i] + numeros2[i];
    msg += suma + "   "
  }

  respuesta.innerHTML = `estas son las sumas de los numeros ingresados: ${msg}`;

}