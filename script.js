function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var estado = window.document.getElementById('estado')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 6
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 5 && hora < 12){
        //bom dia
        img.src = './imagens/manha.jpg'
        estado.innerText = 'Bom Dia'
        document.body.style.background = '#fffff7'
    }else if(hora >= 12 && hora < 18){
        //boa tarde
        img.src = './imagens/tarde.jpg'
        estado.innerText = 'Boa Tarde'
        document.body.style.background = '#f88b7e'
    }else if(hora >= 18 && hora <= 23){
        //boa noite
        img.src = './imagens/noite.jpg'
        estado.innerText = 'Boa Noite'
        document.body.style.background = '#20596c'
    }else{
        //boa madrugada
        img.src = './imagens/madrugada.png'
        estado.innerText = 'Boa Madrugada'
        document.body.style.background = '#b4b8bb'
    }
}