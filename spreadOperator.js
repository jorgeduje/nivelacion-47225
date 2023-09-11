
// copia por valor vs referencia


// COPIA POR VALOR 

let a = 1 
let b = a

console.log( a )
console.log( b )

a += 5

console.log( a )
console.log( b )


// COPIA POR REFERENCIA

// objetos

let auto = {
    marca: "audi",
    modelo: 2021,
    color: "blanco"
}

let copiaAuto = {...auto}

console.log(auto)
console.log(copiaAuto)

auto.modelo = 2022

console.log(auto)
console.log(copiaAuto)


// ARREGLOS

let numeros = [12, 21, 55]
let numeros2 = [ 1, 5, 2]

let copiaNumeros = [...numeros, ...numeros2]

console.log(numeros)
console.log(copiaNumeros)

copiaNumeros.push(37)

console.log(numeros)
console.log(copiaNumeros)