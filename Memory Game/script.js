const main = document.querySelector(".main");
const game = document.querySelector(".game");
const config = document.querySelector(".config");
let quantity_cards = [];

function flip(card) {
    card.classList.toggle("flip");
    if (quantity_cards.length < 2){
        quantity_cards.push(card);
        if (quantity_cards.length === 2) {
            if(quantity_cards[0] === quantity_cards[1]){
                setTimeout(() =>{
                    quantity_cards.forEach((card) =>{
                        card.classList.remove("flip");
                    });
                    quantity_cards = [];
                }, 850);
            }else {
                let card1 = quantity_cards[0].getAttribute("data-id");
                let card2 = quantity_cards[1].getAttribute("data-id");
                if (card1 === card2){
                    setTimeout(() =>{
                        alert("Par");

                        quantity_cards.forEach((card) => {
                            card.classList.add("flipped");
                        });
                        quantity_cards = [];quantity_cards.forEach((card) => {
                        card.classList.add("flipped");
                        });
                    quantity_cards = [];
                    }, 500);
            
                }else{
                    setTimeout(() =>{
                        quantity_cards.forEach((card) =>{
                            card.classList.remove("flip");
                        });
                        quantity_cards = [];
                    }, 850);
                }
            }
        }
    }
}

function show(present, hide1, hide2) {
    hide1.classList.remove("show");
    hide2.classList.remove("show");
    present.classList.add("show");
}

function content(){
    const quantity_in = document.getElementById("quantity");
    const quantity = parseInt(quantity_in.value);
    const info = document.getElementById("info");
    const questions = document.getElementById("question");
    const answers = document.getElementById("answer");
    let button_q = document.getElementById("button_q");
    let label_q = document.getElementById("label_q");

    if (quantity % 2 === 0 && quantity >= 4 && quantity <= 12){
        label_q.style.pointerEvents = "none";
        button_q.style.display = "none";
        quantity_in.style.pointerEvents = "none";
        info.classList.add("show");
        for (var x = 0;x < quantity/2; x++){
            const input_1 = document.createElement("input");
            const input_2 = document.createElement("input");
            input_1.setAttribute("id", x+1);
            input_2.setAttribute("id", x+1+"value");
            questions.appendChild(input_1);            
            answers.appendChild(input_2);
        }

        const inputs = document.querySelectorAll('#info input');
        const save = document.getElementById('save');
        let change = document.getElementById('change');
        save.addEventListener('click', function() {
            let contain_i = true;
            inputs.forEach((input) => {
                if (input.value.trim() === '') {
                    contain_i = false;
                }
            });
            if (contain_i){
                const cards_data = [];
                inputs.forEach((input) => {
                    cards_data.push([input.id, input.value]);
                });
                localStorage.setItem("data", JSON.stringify(cards_data));
                alert("Los datos han sido guardados")
                change.textContent = "Volver al menu"
                
            } else {
                alert("No debes dejar cartas vacias!")
            }  
        });

        change.textContent = "Reiniciar"
        change.addEventListener("click", function() {
            location.reload();
        });
    } else{
        alert("Ingresa un valor valido")
    }

}

function validation(){
    let data = JSON.parse(localStorage.getItem("data"));
    if (data){
        alert("Datos cargados correctamente");
    } else {
        alert("No existen datos, ve a configuracion antes!");
        show(main, game, config);
    }
}

function start(){
    let data = JSON.parse(localStorage.getItem("data"));
    const cards = document.getElementById("cards");
    cards.classList.add("show");
    let button_g = document.getElementById("start");
    button_g.style.display = "none";
    
    const numbers = random_numbers(data.length-1);

    for (var x = 0;x < data.length; x++){
        const card = document.createElement("div");
        card.setAttribute("onclick", "flip(this)");
        card.classList.add("card");
        let indicator = numbers[0];
        let id = data[indicator][0][0];
        card.setAttribute("data-id", id);
        cards.appendChild(card);

        const front = document.createElement("div");
        const back = document.createElement("div");
        front.classList.add("card-face");
        front.classList.add("front");
        back.classList.add("card-face");
        back.classList.add("back");
        card.appendChild(front);
        card.appendChild(back);

        let card_text = data[indicator][1];
        const content_c = document.createElement("h2");
        content_c.textContent = card_text;
        back.appendChild(content_c);
        numbers.splice(0,1);
    }

    if (data.length == 4) cards.classList.add("four");
    if (data.length == 6) cards.classList.add("six");
    if (data.length == 8) cards.classList.add("eight");
    if (data.length == 10) cards.classList.add("ten");
    if (data.length == 12) cards.classList.add("twelve");

    let restart = document.getElementById("restart");
    restart.textContent = "Reiniciar Juego"
    restart.addEventListener("click", function() {
        location.reload();
    });
}

function random_numbers(quantity) {
    let numbers = [];
    for (var x = 0; x <= quantity; x++){
        numbers.push(x);
    }
    
    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }

    return numbers;
}


// window.addEventListener("beforeunload", function() {
//     localStorage.removeItem("data");
// });