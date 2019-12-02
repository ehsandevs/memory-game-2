const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let FirstCard, secondCard;

function flipCard() {
    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        FirstCard = this;
    }
}

cards.forEach(card => card.addEventListener('click', flipCard));