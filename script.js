
let cards = []
let sum = 0
let hasBlackJack = false
let isALive = false
let message = " "

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.querySelector('#cards-el')

function getRandomCard() {
    let randomCard = Math.floor( Math.random()*13) + 1
    return randomCard
    if(randomCard === 1){
        return 11
    }else if(randomCard < 10){
        return 10
    }else{
        return randomCard
    }
}

function start(){
    isALive = true

    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
     cards = [firstCard, secondCard]
     sum = firstCard + secondCard
    render()
}

function render(){
    cardsEl.textContent = "cards:"
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + ", "
    }
   sumEl.textContent = "Sum: " + sum
    
if(sum <= 20) {
    message = "Do you want to draw a new card?"
} else if (sum === 21) {
    message = "You have got blackjack!"
    hasBlackJack = true 
}else {
    message = "You`re out of the game!"
    isALive = false
}

   messageEl.textContent = message
  
}

function newCard() {
    if(isALive ===true && hasBlackJack === false ){
    let newcards = getRandomCard()
    sum += newcards
    cards.push(newcards)
    render()
    }
}
