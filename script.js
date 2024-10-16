// Ejercicio POO 1
// Crear la clase Persona, con propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.
class Persona{
    constructor(nombre, edad, genero){
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    obtDetalles(){
        console.log(`Nombre: ${this.nombre}. Edad: ${this.edad}. Género: ${this.genero}`);
    }
}

// Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(), que muestre por pantalla el resultado.
class Estudiante extends Persona{
    constructor(nombre, edad, genero, curso, grupo){
        super(nombre, edad, genero)
        this.curso = curso;
        this.grupo = grupo;
    }
    registrar(){
        console.log(`Alumno con nombre ${this.nombre} registrado en el curso ${this.curso}, grupo ${this.grupo}`)
    }
}


// Crear la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar(), que muestre por pantalla el resultado.
class Profesor extends Persona{
    constructor(nombre, edad, genero, asignatura, nivel){
        super(nombre, edad, genero)
        this.asignatura = asignatura;
        this.nivel = nivel;
    }
    asignar(){
        console.log(`El profesor con nombre ${this.nombre} imparte clase de la asignatura ${this.asignatura}, nivel ${this.nivel}`)
    }
}

// Crear los objetos y casos de prueba necesarios para comprobar el correcto funcionamiento de la jerarquía de clases.

let persona = new Persona("María", 26, "Mujer");
let estudiante1 = new Estudiante("Hiria", 13, "Mujer", "2º ESO", "A");
let estudiante2 = new Estudiante("Robin", 12, "Hombre", "1º ESO", "B");
let profesor1 = new Profesor("Ricardo", 42, "Hombre", "Matemáticas", "Básico")

console.log("Clase Persona:")
persona.obtDetalles()
console.log("------")
console.log("Clase Estudiante:")
estudiante1.registrar();
estudiante2.registrar();
console.log("------")
profesor1.asignar();

