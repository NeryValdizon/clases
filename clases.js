// Clase Vehiculo
class Vehiculo {
  constructor(marca, modelo, anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
  }

  arrancar() {
    return `El ${this.marca} ${this.modelo} ha arrancado.`;
  }

  detener() {
    return `El ${this.marca} ${this.modelo} se ha detenido.`;
  }

  calcularEdad() {
    const actual = new Date().getFullYear();
    const edad = actual - this.anio;
    return `El ${this.marca} ${this.modelo} tiene ${edad} años.`;
  }
}

// Clase Persona
class Persona {
  constructor(nombre, apellido, nacimiento) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.nacimiento = nacimiento;
  }

  caminar() {
    return `La persona ${this.nombre} ${this.apellido} está caminando.`;
  }

  edad() {
    const actual = new Date().getFullYear();
    const edad = actual - this.nacimiento;
    return `La edad de ${this.nombre} ${this.apellido} es ${edad} años.`;
  }
}

// Clase Avion
class Avion {
  constructor(marca, color, tipo) {
    this.marca = marca;
    this.color = color;
    this.tipo = tipo;
  }

  mostrarMarca() {
    return `La marca de este avión es: ${this.marca}.`;
  }

  mostrarColor() {
    return `El color de este avión es: ${this.color}.`;
  }
}

// Clase Cliente
class Cliente {
  constructor(nombre, apellido, telefono) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
  }

  mostrarNombre() {
    return `El cliente se llama ${this.nombre} ${this.apellido}.`;
  }

  mostrarTelefono() {
    return `El número de teléfono de ${this.nombre} es ${this.telefono}.`;
  }
}

// Clase Proveedor
class Proveedor {
  constructor(nombre, apellido, correo) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
  }

  mostrarNombre() {
    return `El nombre de nuestro proveedor es: ${this.nombre}.`;
  }

  mostrarApellido() {
    return `El apellido de nuestro proveedor es: ${this.apellido}.`;
  }
}

// Clase Estudiante
class Estudiante {
  constructor(nombre, apellido, estado) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.estado = estado;
  }

  presentarse() {
    return `El estudiante se llama ${this.nombre} ${this.apellido} y está ${this.estado}.`;
  }
}
