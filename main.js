
const Producto = function (linea, precio, stock){
  this.linea = linea;
  this.precio = precio;
  this.stock = stock;
}
  
function verificarLineaExistente(lineas, lineaDeseada) {
  return lineas.some(producto => producto.linea.toUpperCase() === lineaDeseada.toUpperCase());
}
  
function verificarStockDisponible(lineas, lineaDeseada) {
  let lineaEncontrada = lineas.find(producto => producto.linea.toUpperCase() === lineaDeseada.toUpperCase());
  
if (lineaEncontrada && lineaEncontrada.stock > 0) {
  return lineaEncontrada.stock;
  } else {
  return 0;
  }
}
  
function sacarValor (cantidad, valorUnitario) {
  return cantidad * valorUnitario;
}
  
let Producto1 = new Producto ("ENERGIA", 32000, 0);
let Producto2 = new Producto ("LECHE", 34000, 300);
let Producto3 = new Producto ("PROTEINA", 36000, 400);
let Producto4 = new Producto ("PORCINOS", 39000, 50);
  
let lineas = [Producto1, Producto2, Producto3, Producto4];

function realizarVenta() {
  // Pedir la línea deseada al cliente
  const lineaDeseada = prompt("¿Qué línea desea comprar?");

  
// let lineaDeseada = prompt("¿Qué línea desea comprar?");
  
let lineaExistente = verificarLineaExistente(lineas, lineaDeseada);
  
if (!lineaExistente) {
  alert("Lo sentimos, la línea deseada no existe. Por favor escoja entre Energia, Leche, Proteina o Porcinos");
} else {
    
let stockDisponible = verificarStockDisponible(lineas, lineaDeseada);
  
if (stockDisponible === 0) {
  alert("Lo sentimos, no hay stock disponible para la línea deseada.");
} else {
let cantidadComprar = parseInt(prompt(`Hay ${stockDisponible} unidades disponibles. ¿Cuántos bultos quieres comprar? `));
  
if (cantidadComprar > stockDisponible) {
  alert("No es posible hacer la venta. La cantidad a comprar es mayor que el stock disponible.");
} else {
  let lineaEncontrada = lineas.find(producto => producto.linea.toUpperCase() === lineaDeseada.toUpperCase());
  let totalAPagar = sacarValor(cantidadComprar, lineaEncontrada.precio);
    alert(`Total a pagar: $${totalAPagar}`);
}
}
}
} 

