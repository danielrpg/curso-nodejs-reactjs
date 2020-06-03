var miContador = (function () {
  var _contador = 0;

  function incrementar() {
    return _contador++;
  }

  function decrementar() {
    return _contador--;
  }

  function valor() {
    return _contador;
  }

  return {
    incrementar,
    decrementar,
    valor,
  };
})();

miContador.incrementar();
miContador.incrementar();
miContador.decrementar();
console.log(miContador.valor());
