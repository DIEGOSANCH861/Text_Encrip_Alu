function encriptar (){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
        .replace(/a/gi, "ara")
        .replace(/e/gi, "ete")
        .replace(/i/gi, "imi")
        .replace(/o/gi, "ovo")
        .replace(/u/gi, "ufu")

    if(texto.length !=0){
        document.getElementById("texto").value = textoCifrado;
        //texto = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "./img/encriptado.jpg";
    } else{
        muñeco.src = "./img/muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar"
        swal("Ooops!", "Debes ingresar un texto", "warning");
        //alert ("Debes ingresar algún texto");
    }
}

function desencriptar (){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
    .replace(/ara/gi, "a")
    .replace(/ete/gi, "e")
    .replace(/imi/gi, "i")
    .replace(/ovo/gi, "o")
    .replace(/ufu/gi, "u");

    if (texto.length !=0){
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "./img/desencriptado.jpg";       
    }else {
        muñeco.src = "./img/muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar"
        swal("Ooops!", "Debes ingresar un texto", "warning");
        //alert ("Debes ingresar algún texto");
    }
}