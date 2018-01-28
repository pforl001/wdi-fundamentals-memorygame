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

var flipCard = function(cardId){
  // Function that stores all steps that should happen when user flips a card
  // "cardId" parameter refers to the array index number passed in

/*Deleting following block of code:
  var cardOne = cards[0];
  cardsInPlay.push(cardOne);
  console.log("User flipped " + cardsInPlay[0]);
  var cardTwo = cards[2];
  cardsInPlay.push(cardTwo);
  console.log("User flipped " + cardsInPlay[1]);
*/
  console.log("User flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);

  if(cardsInPlay.length === 2) {
      checkForMatch();
  }
};

  flipCard(0);
  flipCard(2);
