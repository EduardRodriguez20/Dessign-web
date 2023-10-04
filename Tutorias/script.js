let prices = [];

function add() {
    let counter = document.getElementById("counter");
    let input = document.getElementById("price");
    let price = input.value;
    if (price.trim() === ""){
        alert("No ingreses datos vacios")
    }else{
        prices.push(price);
    }
    counter.textContent ="Cantidad de productos ingresados: " + prices.length;
}

function calculate() {
    const contain = document.querySelector(".container");
    contain.textContent = "";
    let discount = document.getElementById("discount").value;
    let porcentage = discount/100;

    for(let x = 0; x < prices.length; x++){
        let text = document.createElement("p");
        let calculate = prices[x] - (prices[x]*porcentage);
        text.textContent = (x+1) + " Precio sin descuento: " + prices[x] + " / Precio con descuento =  " + calculate.toString();
        contain.appendChild(text);
    }
}

const b_add = document.getElementById("add");
b_add.addEventListener("click", add);

const b_discount = document.getElementById("calculate");
b_discount.addEventListener("click", calculate)