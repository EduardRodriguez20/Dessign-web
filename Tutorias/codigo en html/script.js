document.getElementById("ejecutar").addEventListener("click", function() {
    var codigo = document.getElementById("codigo").value;
    console.log(codigo);
    try {
        var resultado = eval(codigo);
        document.getElementById("resultado").innerHTML = resultado;
    } catch (error) {
        document.getElementById("resultado").innerHTML = "Error: " + error.message;
    }

});
