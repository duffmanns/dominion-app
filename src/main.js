/* Dustin Manns 01/07/2015
   main class

   01/07/2015: Add
 */

var numPlayers = 2;

// This function will return an array of 10 random kingdom cards
function randomize () {
	var cardList = [];
	var availableCards = baseCardList; //Concat new decks here when they are created

	for (i=0; i < 10; i++) {
		var x = Math.floor(Math.random()*availableCards.length);
		cardList.push(availableCards[x]);
		availableCards = availableCards.splice(x,1);
	}

	return cardList;
}

function Main () {
	var supply = new InitSupply;

	if (numPlayers >= 3) {
		supply.numEstate = 12;
		supply.numDuchy = 12;
		supply.numProvince = 12;
		supply.numCurse = 20;
	}

	if (numPlayers >= 4) {
		supply.numCurse = 30;
	}

	supply.kingdomCards = randomize();
}