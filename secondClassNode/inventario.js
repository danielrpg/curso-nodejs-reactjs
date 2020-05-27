function inventario(nombre) {
  this.nombre = nombre;
  this.articulo = {};

  this.add = function (nombre, cantidad) {
    _articulo[nombre] = cantidad;
  };

  this.borrar = function (nombre) {
    delete _articulo[nombre];
  };

  this.cantidad = function (nombre) {
    return _articulo[nombre];
  };

  this.nombre = function () {
    return _nombre;
  };
}

var libros = inventario("biblioteca");

libros.add("JavaScript", 3);
libros.add("Nodejs", 10);

console.log(libros.cantidad("JavaScript"));
