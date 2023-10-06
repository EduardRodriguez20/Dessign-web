function splice () { 
    let texto = document.getElementById('ejemploSplice'). value.split(" "); //.value para solo el valor, .split separa los textos por espacio
    let textoCambio = document.getElementById('cambiosSplice'). value.split(" ");

    let indice = parseInt(textoCambio [0])
    let cantidad = parseInt(textoCambio [1])
    let agregar = (textoCambio [2])

    texto.splice(indice,cantidad,agregar) // hace el cambio del splice

    let resultado = document.createElement("p")

    resultado.textContent="Mis peces = [ " + texto + " ]"

    let mensajes=document.getElementById ("mensajes")
    mensajes.textContent = ""; //quita el contenido que ya se habia mostrado
    mensajes.appendChild(resultado)
}