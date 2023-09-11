
let clima = "lluvioso"

//ANCHOR  CLIMA ESTE LLUVIOSO ---> SI LLEVALO

const llevoParaguas = (clima)=>{

    // if(clima === "lluvioso" ){
    //     return "si, llevalo"
    // }else{
    //     return "no, no hace falta"
    // }

    return clima === "lluvioso" && "si, llevalo" 

}

let res = llevoParaguas(clima)
console.log(res)

// --> se queda con el ultimo Truthy ---> "dsad" {} [] 1 2 3 true 
// --> se queda con el primer Falsy ---> "" 0 false null undefined NaN 

let condiciones = 2 > 1 && 0 && "pepito"

console.log(condiciones)

const isLogged = false

// {
//     isLogged && <h2> hola pepito </h2> 
// }

// --> se queda con el ultimo falsy ---> "dsad" {} [] 1 2 3 true 
// --> se queda con el primer truthy ---> "" 0 false null undefined NaN 

let condicionesOr = 2 < 1 || 0 || undefined

console.log(condicionesOr)