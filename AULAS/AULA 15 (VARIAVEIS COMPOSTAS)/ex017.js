var valores = [8,1,7,4,2,9]

console.log(valores)

/*
for(var pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
O código acima é igual o de baixo
*/

for(var pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}