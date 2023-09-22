let quantity_cards = [];

function flip(card) {
    if (quantity_cards.length < 2){
        card.classList.toggle("flip");
        quantity_cards.push(card);
        console.log(quantity_cards)

        if (quantity_cards.length === 2) {
            setTimeout(() =>{
                quantity_cards.forEach((card) =>{
                    card.classList.remove("flip");
                });
                quantity_cards = []
            }, 850);
        }
    }
}
