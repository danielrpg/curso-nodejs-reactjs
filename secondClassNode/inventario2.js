function Inventario(nombre) {
  this.nombre = nombre;
  this.articulo = {};
}

Inventario.prototype = {
  add: function (nombre, cantidad) {
    _articulo[nombre] = cantidad;
  },

  borrar: function (nombre) {
    delete _articulo[nombre];
  },

  cantidad: function (nombre) {
    return _articulo[nombre];
  },

  nombre: function () {
    return _nombre;
  },
};

var libros = inventario("biblioteca");

libros.add("JavaScript", 3);
libros.add("Nodejs", 10);

console.log(libros.cantidad("JavaScript"));
