var agora = new Date()
var hora = agora.getHours() //Mostra a hora atual do sistema na tela
console.log(`Agora são exatamente ${hora} horas.`)
if (hora > 5 && hora < 12 ){
    console.log('Bom Dia!')
} else if (hora >= 12 && hora <= 18 ){
    console.log('Boa Tarde!')
}else {
    console.log('Boa Noite!')
}