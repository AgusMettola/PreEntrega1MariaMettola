// Calcular el costo de productos en carrito de compras
// Definir el carrito de compras con los productos y sus precios
 let  carrito = [
    { producto: 'Remera', precio: 1500 },
    { producto: 'Buzo', precio: 2000 },
    { producto: 'Lentes', precio: 800 }
  ];
  
  // Función para calcular el costo total del carrito
  function calcularCostoTotal(carrito) {
    let costoTotal = 0;
    
    // Iterar sobre cada producto en el carrito y sumar los precios
    for (var i = 0; i < carrito.length; i++) {
      costoTotal += carrito[i].precio;
    }
    
    return costoTotal;
  }
  
  // Calcular el costo total del carrito
  let costoTotalCarrito = calcularCostoTotal(carrito);
  
  // Imprimir el resultado
  console.log("El costo total del carrito es: $" + costoTotalCarrito);