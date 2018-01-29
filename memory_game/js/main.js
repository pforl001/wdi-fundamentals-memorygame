console.log("Up and running!");

/*
var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
*/

var cards = [
  {
  rank: "queen",
  suit: "hearts",
  cardImage: "images/queen-of-hearts.png"
  },
  {
  rank: "queen",
  suit: "diamonds",
  cardImage: "images/queen-of-diamonds.png"
  },
  {
  rank: "king",
  suit: "hearts",
  cardImage: "images/king-of-hearts.png"
  },
  {
  rank: "king",
  suit: "diamonds",
  cardImage: "images/king-of-diamonds.png"
  }
];
//var cards = ["queen", "king", "king", "queen"];
var cardsInPlay = [];

var checkForMatch = function() {
  if(cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
};

var flipCard = function(){
  // Function that stores all steps that should happen when user flips a card
  // "cardId" parameter refers to the array index number passed in
  // removing cardId parameter and creating a variable below to dynamically grab the cardId of the card that the user chooses to click on; no longer "hard-coded"
  var cardId = this.getAttribute('data-id'); // "this" refers to what card was just clicked on, from the Event Listener in createBoard() below
  console.log("User flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);

  this.setAttribute('src', cards[cardId].cardImage);

  if(cardsInPlay.length === 2) {
      checkForMatch();
  }
  /*Deleting following block of code:
    var cardOne = cards[0];
    cardsInPlay.push(cardOne);
    console.log("User flipped " + cardsInPlay[0]);
    var cardTwo = cards[2];
    cardsInPlay.push(cardTwo);
    console.log("User flipped " + cardsInPlay[1]);
  */
};

var createBoard = function() {
  for(var i = 0; i < cards.length; i++) { // does this look through cards (array of objects) or cardsInPlay?
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);

    cardElement.addEventListener('click', flipCard); // add a click event to each card
    document.getElementById('game-board').appendChild(cardElement);
  }
};

  createBoard();
  //flipCard(0);
  //flipCard(2);
