console.log("Up and running!");

/*
var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
*/

var cards = ["queen", "king", "king", "queen"];
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
  console.log("User flipped " + cards[cardId]);
  cardsInPlay.push(cards[cardId]);


  if(cardsInPlay.length === 2) {
      checkForMatch();
  }
};

  flipCard(0);
  flipCard(2);
