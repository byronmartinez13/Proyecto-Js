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

