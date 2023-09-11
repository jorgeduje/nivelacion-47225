// OBJETOS

const persona = {
  nombre: "maria",
  edad: 22,
  esCasada: true,
  direccion: {
    calle: "italia",
    altura: 225
  }
};


// NO IMPORTA EL ORDEN ---> PERO SI EL NOMBRE
const {edad: edadMaria, nombre: nombreMaria, direccion} = persona
const {calle, altura} = direccion

console.log(nombreMaria);
console.log(nombreMaria);
console.log(nombreMaria);
console.log(edadMaria);
console.log(calle)

console.log("-----------")

// ARREGLOS

// NO IMPORTA EL nombre ---> PERO SI EL orden

const personas = ["carmen", "fulanito", "juancito"]

const [  , , persona3  ] = personas

// console.log( personas[2] )

console.log(persona3)

