// const string = "String"
// const char = 'c'
// const int = 1
// const double = 2.22
// const boolean = true
// const nulo = null

// //No se utiliza por su scope de función
// var x = 1

// //SI se utiliza, por su scope de bloque
// let y = 2

// function sumar(num1, num2) {
//     return num1 + num2
// }

// const sumar = (num1, num2) => {
//     num1 + num2
// }

// const name = (params) => {
//     console.log(params)
// }

// const bool = false
// const arreglo = ["a", 1, 2.3, bool, true, [1,4,5]]
// arreglo.forEach((dato) => {
//     console.log(dato)
// })

// const david = {
//     nombre: "Oscar David",
//     apellidos: "González Ávila",
//     edad: 21,
//     altura: 1.95,
//     pasatiempos: ["Hacer ejercicio", "Jugar videojuegos", "Dar asesorias"],
//     egresado: false,
//     contacto: {
//         telefono: "4433994806",
//         facebook: "David",
//         github: "dgadave"
//     }
// }

// console.log(david)

// const edad = 18
// if (edad >= 18) {
//     console.log("Eres mayor de edad")
// } else {
//     console.log("Eres menor de edad")
// }

// condition? onTrue : onFalse

// let contador = 0
// while (contador < 10) {
//     console.log(contador)
//     contador ++
// }

// const obj = {
//     propiedad1 : "valor 1",
//     propiedad2 : "valor 2",
//     propiedad3 : "valor 3",
// }

// for (const key in obj) {
//     console.log(key)
//     console.log(obj[key])
// }

// const arreglo = ["a", "b", "c"]
// for (const iterator of arreglo) {
//     console.log(iterator)
// 

// const david = {
//     nombre: "Oscar David",
//     apellidos: "González Ávila",
//     edad: 21,
//     altura: 1.95,
//     pasatiempos: ["Hacer ejercicio", "Jugar videojuegos", "Dar asesorias"],
//     egresado: false,
//     contacto: {
//         telefono: "4433994806",
//         facebook: "David",
//         github: "dgadave"
//     }
// }

// const {altura,apellidos,contacto,edad,egresado,nombre,pasatiempos} = david
// console.log(nombre)

const $seccionTarjetas = document.querySelector("#sectionFacts")
console.log($seccionTarjetas)




fetch("https://catfact.ninja/facts")
    .then(res => res.json())
    .then(datas => {
        for (const data of datas.data) {
            const $fragment = document.createElement("div")
            $fragment.className = "inline-block w-48 h-48 bg-slate-400 border-2 text-white overflow-auto border-slate-700 rounded-3xl drop-shadow-md transition-all duration-200 hover:scale-105 cursor-pointer p-2"
            const $fact = document.createElement("p")
            $fact.textContent = data.fact
            $fragment.appendChild($fact)
            $seccionTarjetas.appendChild($fragment)
        }
    })

fetch("https://api.agify.io/?name=David")
    .then(res => res.json())
    .then(data => console.log(data))

fetch("https://api.agify.io/?name=David")
    .then(res => res.json())
    .then(data => console.log(data))