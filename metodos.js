let libros = [
    {
      nombre: "historiasInconscientes",
      autor: "Gabriel Rolón",
      paginas: 352,
    },
    {
      nombre: "operacionMasacre",
      autor: "Rodolfo Walsh",
      paginas: 236,
    },
    {
      nombre: "elAlquimista",
      autor: "Paulo Coehlo",
      paginas: 192,
    },
    {
      nombre: "elCampamento",
      autor: "Blue Jeans",
      paginas: 70,
    },
];

// map ---> devuelve un nuevo arreglo ---> es de la misma longitud

const newArray = libros.map( (elemento, indice)=>{ // [{id:1}, {id:2}]
    return {id: indice + 1 ,nombre: elemento.nombre, autor: elemento.autor}
} )

console.log(newArray)

// filter ---> devuelve un nuevo arreglo ---> no de la misma longitud o si

let formaDeFiltrar = 200

const arrayFiltrado = libros.filter((elemento)=>{ // []
    return elemento.paginas > formaDeFiltrar
})

console.log(arrayFiltrado)

// FIND ---> devuelve el elemento o undefined si no lo encuentra

let id = 2

const elementoEncontrado = newArray.find( (elemento)=> elemento.id === id)
console.log(elementoEncontrado)


// let existe = elementoEncontrado !== undefined 

// SOME ---> devuelve un booleano dependiendo si la condicion se cumple por lo menos una vez

let existe = newArray.some( (elemento)=>{ 
    return elemento.id === id
} )

console.log(existe)