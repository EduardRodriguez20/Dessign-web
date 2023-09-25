let quantity_cards = [];

function flip(card) {
    card.classList.toggle("flip");

    if (quantity_cards.length < 2){
        quantity_cards.push(card);

        console.log(card.id);
        console.log(quantity_cards[0])

        if (quantity_cards.length === 2) {
            if (quantity_cards[0].id == 1 && quantity_cards[1].id == 3){
                
                console.log("par");

                let card1 = document.getElementById(quantity_cards[0].id);
                let card2 = document.getElementById(quantity_cards[1].id);
                card1.style.pointerEvents = "none";
                card2.style.pointerEvents = "none";
                quantity_cards = [];
                alert("Par");


                //se detiene
            }else{
                setTimeout(() =>{
                    quantity_cards.forEach((card) =>{
                        card.classList.remove("flip");
                    });
                    quantity_cards = []
                }, 850);
            }
        }
    }
}
