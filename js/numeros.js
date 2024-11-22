// Función para verificar si un número es primo
function primos() {
  debugger
  let resp = "", num = "", r = 0, divisor = 2, primo = 1

  // Obtiene el valor en "numero" y lo convierte a entero
  num = document.getElementById("numero").value
  resp = document.getElementById("resp")
  num = parseInt(num)

  // Bucle para verificar si num es divisible por algún número menor a sí mismo
  while (divisor < num && primo == 1) {
    r = num % divisor
    if (r == 0) {     // Si el residuo es 0, entonces no es primo
      primo = 0
    } else {
      divisor = divisor + 1
    }
  }

  // Muestra si el número es primo o no
  if (primo == 1) {
    resp.innerHTML = `😊${num} Es Primo`
  } else {
    resp.innerHTML = `😞${num} No Es Primo`
  }
}

function impares() {
  debugger
  let resp = "", r = 0, contador = 1, msg=""

  // Obtiene el valor en "numero" y lo convierte a entero
  resp = document.getElementById("resp")
  contador = parseInt(contador)

  // Bucle para verificar si num es divisible por algún número menor a sí mismo
  while (contador<=50) {
    r = contador
    msg = msg +"  " + r
      contador = contador + 2
}
  

    resp.innerHTML = msg
}
function Divisores() {
  // Obtener los valores ingresados por el usuario
  const numerosStr = document.getElementById("numero").value;
  const respuesta = document.getElementById("resp");

  // Convertir la lista de números y el límite en enteros
  const numero = parseInt(numerosStr)

  let div = "";

  // Recorrer el arreglo de números y calcular la suma de los que son mayores al límite
  for (let i = 1; i < numero; i++) {
    if (numero % i ===0 ){
    div += i + " " ;
    }
    
  }
  respuesta.innerHTML = `los divisores de ${numero } son: ${div}`;
}

function divisibles() {

  const respuesta = document.getElementById("resp");

  let numero = 100
  numero= parseInt(numero)

  let div="";

  // Recorrer el arreglo de números y calcular la suma de los que son mayores al límite
  for (let i = 1; i < numero; i++) {
    if (i % 3 ===0 && i % 5===0 ){
      div += i + " "
    }
  }
  respuesta.innerHTML = `  los numeros divisibles para 3 y 5 a la vez son:
   ${div}`;
}

function suma1al100() {
  const respuesta = document.getElementById("resp");
  let cont = 0;

  for (let i = 1; i <= 100; i++) {
    cont += i; 
  }

  respuesta.innerHTML = `La suma de los números del 1 al 100 es: ${cont}`;
}

function SumaPar() {
  const numerosStr = document.getElementById("numero").value;
  const respuesta = document.getElementById("resp");

  const numero = parseInt(numerosStr);
  
  let suma = 0;  

  for (let i = 2; i <= numero; i += 2) {
    suma += i; 
  }

  respuesta.innerHTML = `La suma de los números pares desde el 2 hasta ${numero} es: ${suma}`;
}

function tablamultip() {
  const numero = document.getElementById("numero").value;
  const hasta = document.getElementById("hasta").value;
  const respuesta = document.getElementById("resp");

   let msg="";


  for (let i = 1; i <= hasta; i ++) {; 
    msg += `${numero} * ${i} = ${numero*i} \n` ;
  }

  respuesta.innerHTML = `Esta es la tabla de multiplicar de ${numero}
   ${msg}`;
}

function fibonacci() {
  // Obtener el valor de 'n' (la cantidad de números de Fibonacci a generar)
  const numero =document.getElementById("numero").value;
  const respuesta = document.getElementById("resp");


  let a = 0, b = 1;

  let msg = "" + a;

  if (numero > 1) {
    msg += " " + b;
  }

  for (let i = 2; i < numero; i++) {
    let c = a + b;  
    msg += " " + c;  
    a = b; 
    b = c;  
  }

  respuesta.innerHTML = `Esta es la secuencia fibonacci 
   ${msg}`;
}

function multipNu() {
  
  const respuesta = document.getElementById("resp");

  let numero = 10;
  let resultado = 1;

  // Calcular la multiplicación de los números del 1 hasta 'numero'
  for (let i = 1; i <= numero; i++) {
    resultado *= i;  // Multiplicamos el resultado por el número actual
  }

  // Mostrar el resultado en el div de respuesta
  respuesta.innerHTML = `El resultado de multiplicar los números del 1 al ${numero} es: ${resultado}`;
}

function factorialN() {
  
  const numero =document.getElementById("numero").value;
  const respuesta = document.getElementById("resp");

  let resultado = 1;
  let acum = "" ;

  for (let i = numero;  i>=1; i--) {
    resultado *= i; 
    
    if (i === numero) {
      acum += i; 
    } else {
      acum += " * " + i;  
    }
  }

  respuesta.innerHTML = `El resultado de realizar el factorial de ${numero} es:
   ${acum}  = ${resultado}`;
}

function divis() {
 
  const numero = parseInt(document.getElementById("numero").value);
  const respuesta = document.getElementById("resp");

  let divisores = ""; 

  for (let i = 1; i <= 20; i++) {
    if (numero % i === 0) { 
      divisores += " " + i; 
    }
  }

    respuesta.innerHTML = `los divisores entre el 1 y el 20 de ${numero} son: ${divisores}`;
  
}

function Perfecto() {
 
  const numero = parseInt(document.getElementById("numero").value);
  const respuesta = document.getElementById("resp");


  let sumaDivisores = 0; // Para almacenar la suma de los divisores

  for (let i = 1; i < numero; i++) {
    if (numero % i === 0) {  
      sumaDivisores += i;  
    }
  }

  if (sumaDivisores === numero) {
    respuesta.innerHTML = `${numero} es un número perfecto 😊.`;
  } else {
    respuesta.innerHTML = `${numero} no es un número perfecto 😞.`;
  }
}

function numeroinv() {
  // Obtener el valor del número ingresado
  const numero = document.getElementById("numero").value;
  const respuesta = document.getElementById("resp");


  let numeroInvertido = "";  

  for (let i = numero.length - 1; i >= 0; i--) {
    numeroInvertido += numero[i];  
  }

  respuesta.innerHTML = `El número invertido de ${numero} es: ${numeroInvertido}`;
}

function contdigitos() {
  // Obtener el valor del número ingresado
  const numero = document.getElementById("numero").value;
  const respuesta = document.getElementById("resp");


  let cont = 0;  

  for (let i = 0;i<numero.length; i++ ) {
    cont ++;  
  }

  respuesta.innerHTML = `El número ${numero} tiene: ${cont} digitos`;
}


function Triangulo() {
  // Obtener el valor de la altura 'n' del triángulo
  const altura = parseInt(document.getElementById("numero").value);
  const respuesta = document.getElementById("resp");

  let resultado = ""; 

  // Bucle para crear el triángulo
  for (let i = 1; i <= altura; i++) {
    for (let linea=1; linea<=i; linea++){
      resultado += "*"
    }
     resultado += "\n"
  }

  // Mostrar el triángulo en el div de respuesta
  respuesta.innerHTML = `${resultado}\n`;
}



