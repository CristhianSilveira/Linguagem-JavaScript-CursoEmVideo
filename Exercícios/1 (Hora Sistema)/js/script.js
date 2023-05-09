function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora > 5 && hora < 12 ) {
        //Bom Dia
        img.src = 'imagens/foto-manha.png'
        document.body.style.background = '#B4C6C6'
    } else if (hora >= 12 && hora <= 18 ) {
        //Boa tarde
        img.src = 'imagens/foto-tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        //Boa noite
        img.src = 'imagens/foto-noite.png'
        document.body.style.background = '#533E5F'
    }
}