//1 - numbers
let x: number = 10

console.log(x)

x = 16 

//vendo se o tipo da variavel esta de acordo com oq defini
console.log(typeof x)

const y: number = 15.965324
console.log(y)
console.log(typeof y)

//arredondando casas após a virgula
console.log(y.toPrecision(3))


//2 - strings
// const firstName: string = "Olívio"
// const lastName: string = "Neto"
// fullName = firstName + " " + lastName

// console.log(fullName)
// console.log(typeof fullName)


// //tudo maiusculo
// console.log(firstName.toUpperCase())

// //variavel tipada mas sem valor nenhum
// let fullName: string

//3 - boolean
let a: boolean = false

console.log(a)
console.log(typeof a)

a = true
console.log(a)

//4 - inference e anottation
let ann: string = "Teste"

let inf = "Teste"


//desafio 2 
let o: number = 10;
let conversao = o.toString();
const primeiro: string = "O número é" 
const segundo = conversao
const frase = primeiro + " " + segundo


console.log(frase)