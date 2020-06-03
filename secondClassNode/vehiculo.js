class Vehiculo {
  constructor(tipo, nombre, ruedas) {
    this.tipo = tipo;
    this.nombre = nombre;
    this.ruedas = ruedas;
  }

  getRuedas() {
    return this.ruedas;
  }

  arrancar() {
    console.log(`arrancando el ${this.nombre}`);
  }

  aparcar() {
    console.log(`Aparcando el ${this.nombre}`);
  }
}

class Coche extends Vehiculo {
  constructor(nombre) {
    super("Coche", nombre, 4);
  }
}

class Motocicleta extends Vehiculo {
  constructor(nombre) {
    super("Motocicleta", nombre, 2);
  }
}

let ford = new Coche("Ford Focus");
ford.getRuedas(); //4
ford.arrancar();

let harleyDavidson = new Motocicleta(`Harley Davidson`);
harleyDavidson.getRuedas(); // 2
