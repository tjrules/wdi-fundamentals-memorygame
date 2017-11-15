
var cards = [
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: 'images/queen-of-hearts.png'
},
{  
 	rank: 'queen',
	suit: 'diamonds',
	cardImage: 'images/queen-of-diamonds.png'
}, 
{
   	rank: 'king',
	suit: 'hearts',
	cardImage: 'images/king-of-hearts.png'
}, 
{
   	rank: 'king',
	suit: 'diamonds',
	cardImage: 'images/king-of-diamonds.png'
}
];
var cardsInPlay = [];
/*
 "king";"queen";
var cardFour  = "king";
*/

/*var cardOne = cards[0];
var cardTwo = cards[1];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo); */
function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("You're really bad at this");
	}
}
function flipCard() {
var cardId = this.getAttribute('data-id');
this.setAttribute('src', cards[cardId].cardImage);
console.log("user flipped " + cards[cardId].rank);
console.log("user flipped " + cards[cardId].suit)
console.log("user flipped " + cards[cardId].cardImage)
cardsInPlay.push(cards[cardId].rank)

if (cardsInPlay.length === 2) {
	checkForMatch();
}

}
function createBoard(){
	
	for (var i = 0; i < cards.length; i++) {
	var cardElement = document.createElement('img');
	//var gameBoard = document.getElementById('game-board');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}

}


createBoard();