var table = document.querySelector(".table");
var infos = document.querySelector(".infos");
var imagem = document.querySelector(".imagem");
var thanks = document.querySelector(".thankscont")

var psus = document.getElementById("psuccess")
var text = document.getElementById("texto")
var errorr = document.getElementById("error")

function enviar(){
    var email = text.value

    if(email.includes('@') && email.includes(".")){
        
    infos.style.display = "none"
    imagem.style.display = "none"
    thanks.style.display = "flex"

    table.style.width = "450px"
    table.style.height = "450px"

    psus.innerHTML = "A comfirmation email has been sant to <strong>" + email + "</strong>, Please open it and click the button inside to comfirm your subscription"
    }else{
        errorr.style.display = "flex"
        text.style.color = "rgb(255, 69, 56)"
        text.value = ""
    }
}

function voltar(){
    infos.style.display = "flex"
    imagem.style.display = "flex"
    thanks.style.display = "none"
    errorr.style.display = "none"

    table.style.width = "850px"
    table.style.height = "550px"  
    text.value = "" 
    text.style.color = "rgb(0, 0, 0)"
}
