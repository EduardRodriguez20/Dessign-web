function calculate(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;
    
    let validation = Math.pow(b,2) - (4*(a*c));
    if (a != 0 && validation > 0){
        let x1_calcule = (-b + Math.sqrt(validation))/2*a
        let x2_calcule = (-b - Math.sqrt(validation))/2*a
        let container = document.getElementById("results")
        let text = document.createElement("h2");
        text.textContent = "El valor de X1 = " + x1_calcule.toFixed(3)
        let text_2 = document.createElement("h2");
        text_2.textContent = "El valor de X2 = " + x2_calcule.toFixed(3)
        container.appendChild(text)
        container.appendChild(text_2)

    }else{
        alert("Los numeros no cumplen las condiciones")
    }
}

function change(){
    let select = document.getElementById("select").value;
    console.log(select);
    console.log(localStorage.getItem("styles"));
    let styles = JSON.parse(localStorage.getItem("styles_css"))
    let body = document.body;
    body.removeAttribute("class");
    body.classList.add(styles[select])
}

window.addEventListener("load", function(){
    let styles = {
        1 : "style1",
        2 : "style2",
        3 : "style3"
    }
    let contain = localStorage.getItem("styles_css");

    if (!contain){
        localStorage.setItem("styles_css", JSON.stringify(styles))
    }
})