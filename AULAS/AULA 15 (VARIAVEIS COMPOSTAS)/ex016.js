var num = [5,8,2,9,3]
num.push(1) //Adiciona um valor na ultima posição (adiciona uma 6 posição com valor 1)
num.sort() //Organiza os números em ordem crescente
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
var pos = num.indexOf(8) //Procura em que posição está o valor 8
if (pos == -1){
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}