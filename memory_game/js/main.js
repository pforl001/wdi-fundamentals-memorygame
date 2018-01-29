console.log("Up and running!");

// -cards- is an array of 4 card objects, which include the properties: rank, suit, and cardImage
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

// -cardsInPlay- is an empty array
// when a user flips a card, that card's rank will be pushed to this array
var cardsInPlay = [];

// -checkForMatch- is a function which checks the equivalence of the first 2 card ranks in the cardsInPlay array
// It provides an alert to tell the user if it's a match or if they should try again
var checkForMatch = function() {
  if(cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
};

// -flipCard- is a function that stores all the steps that will happen when a user flips a card
// There is no cardId parameter; rather, the cardId variable will dynamically get the id of the flipped card, rather than being hard-coded
var flipCard = function() {

  var cardId = this.getAttribute('data-id'); // "this" refers to the card that was just clicked on, from the Event Listener in createBoard() below
  console.log("User flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);

  // when the user flips a card, set it to the corresponding cardImage, replacing the back image
  this.setAttribute('src', cards[cardId].cardImage);

  if(cardsInPlay.length === 2) {
      checkForMatch();
  }
};

// -createBoard- function creates a brand new game board
// loop through each object in the cards array, and set them up with the back image
// wait/listen for the user to click on a card and when they do, call the flipCard function
var createBoard = function() {
  for(var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);

    cardElement.addEventListener('click', flipCard); // add a click event to each card
    document.getElementById('game-board').appendChild(cardElement);
  }
};

  // call createBoard() function to kick off the game!
  createBoard();
