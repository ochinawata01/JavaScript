


let  cards = [] // array - ordered list of item
let sum =0
let hasBlackJack = false

let isAlive = false
let message ="";
let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")

let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector(".card-el")

let player = {
     Name : "Per",
     Chip : 145
}

let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.Name + ": $" + player.Chip

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1 ;
    if ( randomNumber > 10){
        return 10;
    }else if (randomNumber === 1){
        return 11;
    } else {
      return  randomNumber;
    }
}

function startGame(){
    let isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum =  firstCard + secondCard
    renderGame()
}

 function renderGame(){
    // render out firstCard and secondCard
    cardEl.textContent= "Cards: "  +" " 
    // creatng a for loop that renders out all the cards
     for ( let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " "
     }
    

 // render outall the cards we have
    sumEl.textContent = "Sum:" + sum
    if (sum <= 20){
        message = "Do you want to draw a new card ?"
    }  else if (sum === 21){
        message = "Wahoo! You've got BlackJack !"
        hasBlackJack = true;
    }  else{
        message = "we're logging out "
        isAlive = true
    }
    messageEl.textContent = message 
 }

 function newCard() {
  if(isAlive === true && hasBlackJack === false){
    let card = getRandomCard();
    sum += card
    cards.push(card)

    renderGame()
  }
 }

 
let hands = ["rock", "paper ", "scissor"]

function getHand(){
    let randomIndex = Math.floor(Math.random()*3)
    return hands[randomIndex]
}
console.log(getHand())

  


/*

 let player1Time = 102;
 let player2Time = 107;

 function getFastestRaceTime(){
    if (player1Time < player2Time){
        return player1Time
    } else if (player2Time < player1Time){
        return player2Time
    } else {
        player1Time
    }
 }

 let fastestRace = getFastestRaceTime()
 console.log(fastestRace)

 function totalRacetime(){
   return player1Time + player2Time
 }
let sum = totalRacetime()
console.log(sum)
*/
