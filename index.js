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
        alert ("Debes ingresar algún texto");
    }
}