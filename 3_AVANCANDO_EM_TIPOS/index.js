"use strict";
// 1 - Arrays
let numbers = [1, 2, 3];
numbers.push(3);
console.log(numbers[2]);
// numbers = "teste"
const nomes = ["Olívio", "Nicolly"];
// nomes.push(4)
// 2 - outra sintaxe array
const nums = [100, 200];
nums.push(300);
console.log(nums);
// nums.push("teste")
console.log(nums[0]);
// 3 - Any
const arr1 = [1, "teste", true, [], { nome: "Olívio" }];
console.log(arr1);
arr1.push([1, 2, 3]);
console.log(arr1);
// 4 - Parâmetros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
// soma("a", "b")
// 5 - Retorno de função
function greeting(name) {
    return `Olá ${name}`;
}
console.log(greeting("Olívio"));
// 6 - funções anônimas 
setTimeout(function () {
    const sallary = 1000;
    //console.log(parseFloat(sallary)) //metodo utilizado para converter string em float, não number
    console.log(sallary);
}, 20);
// 7 - Tipos de objeto
function passCordinates(coord) {
    console.log("X cordinates: " + coord.x);
    console.log("Y cordinates: " + coord.y);
}
const objCoord = { x: 329, y: 84.2 };
passCordinates(objCoord);
// passCordinates({nome: 1, sobrenome: 2})
const pessoaObj = { nome: "Olívio", sobrenome: "Neto" };
