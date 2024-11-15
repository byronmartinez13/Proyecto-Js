function calcularTotal() {
  // Obtener los valores ingresados por el usuario
  const precio = parseFloat(document.getElementById("precio").value);
  const cantidad = parseInt(document.getElementById("cantidad").value);
  const aplicarIva = document.getElementById("iva").checked;
  const resultado = document.getElementById("resultado");
  // Calcular subtotal
  let subtotal = precio * cantidad;
  // Aplicar descuento si la cantidad es mayor a 10
  let descuento = 0 
  if (cantidad > 10){
    descuento=subtotal * 0.10
  }
  // Calcular IVA si el checkbox está seleccionado
  let  iva = 0
  if (aplicarIva==true){
    iva = (subtotal - descuento) * 0.15 
  } 
  // Calcular total
  const total = subtotal - descuento + iva;
  // Mostrar resultados en el área de texto
  resultado.innerHTML = `
                Subtotal: ${subtotal.toFixed(2)} USD
                Descuento: ${descuento.toFixed(2)} USD
                IVA: ${iva.toFixed(2)} USD
                Total a pagar: ${total.toFixed(2)} USD
            `;
}

function verificarRespuesta() {
  // Obtener la opción seleccionada por el usuario
  const respuestaSeleccionada = document.querySelector('input[name="respuesta"]:checked');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar si se seleccionó una respuesta
  if (!respuestaSeleccionada) {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">🙄 ¡Selecciona una opción antes de continuar! 🙄</p>';
    return;
  }

  // La línea correcta que tiene un error es la línea 3
  const respuestaCorrecta = '3';

  // Comprobar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada.value === respuestaCorrecta) {
    resultadoDiv.innerHTML = '<p class="respuesta-correcta">🎉 ¡Correcto! La línea 3 tiene un error 🎉</p>';
  } else {
    resultadoDiv.innerHTML = '<p class="respuesta-incorrecta">❌ Incorrecto. ¡Vuelve a intentarlo! ❌</p>';
  }
}