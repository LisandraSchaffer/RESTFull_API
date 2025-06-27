class Producto {
    #stock;
  
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
      this.categoria = null;
      this.#stock = 0;
    }
  
    setStock(cantidad) {
      if (!Number.isInteger(cantidad) || cantidad < 0) {
        throw new Error("El stock debe ser un número entero positivo.");
      }
      this.#stock = cantidad;
    }
  
    getStock() {
      return this.#stock;
    }
  
    setCategoria(categoria) {
      this.categoria = categoria.nombre;
    }
  
    info() {
      return `Producto: ${this.nombre}, Precio: $${this.precio}, Categoría: ${this.categoria || "Sin categoría"}`;
    }
  
    static aplicarDescuento(producto, porcentaje) {
      const descuento = producto.precio * (porcentaje / 100);
      const precioFinal = producto.precio - descuento;
      return `Precio con ${porcentaje}% de descuento: $${precioFinal.toFixed(2)}`;
    }
  }
  
  class Categoria {
    constructor(nombre) {
      this.nombre = nombre;
      this.productos = [];
    }
  
    agregarProducto(producto) {
      producto.setCategoria(this);
      this.productos.push(producto);
    }
  
    listarProductos() {
      return this.productos.map(p => p.nombre);
    }
  }
  
  // Creando las categorías
const yerbaMate = new Categoria("Yerba");
const accesorios = new Categoria("Accesorios");

// Creando los productos
const yerbaClasica = new Producto("Yerba Mate Clásica 1kg", 1800);
const yerbaEspecial = new Producto("Yerba Premium 500g", 2500);
const mateImperial = new Producto("Mate Imperial de Madera", 5500);
const bombillaAcero = new Producto("Bombilla de Acero Inoxidable", 1200);
const termo = new Producto("Termo 1L Acero", 8500);

// Asignando un stock
yerbaClasica.setStock(50);
yerbaEspecial.setStock(30);
mateImperial.setStock(15);
bombillaAcero.setStock(40);
termo.setStock(20);

// Asignando las categorías
yerbaMate.agregarProducto(yerbaClasica);
yerbaMate.agregarProducto(yerbaEspecial);
accesorios.agregarProducto(mateImperial);
accesorios.agregarProducto(bombillaAcero);
accesorios.agregarProducto(termo);

// Mostrando la información
console.log(yerbaClasica.info());
console.log(mateImperial.info());
console.log(termo.info());

// Aplicando descuentos
console.log(Producto.aplicarDescuento(yerbaEspecial, 10));
console.log(Producto.aplicarDescuento(bombillaAcero, 5));

// Listando productos por categoría
console.log("Productos en Yerbas:", yerbaMate.listarProductos());
console.log("Productos en Accesorios:", accesorios.listarProductos());

function actualizarStock(producto, nuevoStock) {
    try {
      producto.setStock(nuevoStock);
      console.log(`Stock actualizado correctamente a ${producto.getStock()} unidades para "${producto.nombre}".`);
    } catch (error) {
      console.error(`Error al actualizar el stock de "${producto.nombre}": ${error.message}`);
    }
  }
  

  
  
  
  
  
  