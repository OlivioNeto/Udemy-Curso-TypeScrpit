// 1 - Arrays
let numbers: number[] = [1, 2, 3]

numbers.push(3)

console.log(numbers [2])

// numbers = "teste"

const nomes: string[] = ["Olívio", "Nicolly"]

// nomes.push(4)

// 2 - outra sintaxe array
const nums: Array<number> = [100, 200]

nums.push(300)

console.log(nums)

// nums.push("teste")

console.log(nums[0])


// 3 - Any

const arr1: any = [1, "teste", true, [], {nome: "Olívio"}]

console.log(arr1)

arr1.push([1, 2, 3]) 
console.log(arr1)

// 4 - Parâmetros tipados

function soma(a: number, b: number){
    console.log(a + b)
}

soma(4 , 5)
// soma("a", "b")