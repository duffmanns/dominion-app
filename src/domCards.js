/* Dustin Manns 12/28/2015
   All of the base decks as objects */

 var cellar = {
 	"name": "Cellar",
  	"cost": 2,
	"type": "action",
 	"secondType": "",
 	"ability": ["plusAction(1)","selectCard(hand.length()+1,0)","discard(x)","draw(x.length)"] //x is array
 };

 var chapel = {
 	"name": "Chapel",
  	"cost": 2,
	"type": "action",
 	"secondType": "",
 	"ability": ["checkTrashNumber(x.length,4)","trash(x)"] //x is an array
 };

 var moat = {
 	"name": "Moat",
  	"cost": 2,
	"type": "action",
 	"secondType": "reaction", //TODO:decide how to code reactions
 	"ability": ["draw(2)"]
 };

 var chancellor = {
 	"name": "Chancellor",
  	"cost": 3,
	"type": "action",
 	"secondType": "",
 	"ability": ["plusMoney(2)","deckToDiscard()"] //May need to pass var here
 };

 var village = {
 	"name": "Village",
  	"cost": 3,
	"type": "action",
 	"secondType": "",
 	"ability": ["plusAction(2)","draw(1)"]
 };

var woodcutter = {
	"name": "Woodcutter",
	"cost": 3,
	"type": "action",
	"secondType": "",
	"ability": ["plusBuy(1)","plusMoney(2)"]
};

var workshop = {
	"name": "Workshop",
	"cost": 3,
	"type": "action",
	"secondType": "",
	"ability": ["selectCard(1,4)","gainCard(x,1,\"discard\")"]
};

var bureaucrat = {
	"name": "Bureaucrat",
	"cost": 4,
	"type": "action",
	"secondType": "attack",
	"ability": ["gainCard(\"silver\",1,\"deck\")","victoryOnDeck()"]
};

var feast = {
	"name": "Feast",
	"cost": 4,
	"type": "action",
	"secondType": "",
	"ability": ["trashFeast()","selectCard(1,5)","gainCard(x,1,\"discard\")"] //have to make throne room work with this
};

var gardens = {
	"name": "Gardens",
	"cost": 4,
	"type": "victory", //can't play if primary is victory
	"secondType": "",
	"ability": ["plusVictory(Math.floor(totalCards/10))"]
};

var militia = {
	"name": "Militia",
	"cost": 4,
	"type": "action",
	"secondType": "attack",
	"ability": ["plusMoney(2)", "forceDiscardTo(3)"]
};

var moneylender = {
	"name": "Moneylender",
	"cost": 4,
	"type": "action",
	"secondType": "",
	"ability": ["trash(copper)","plusMoney(3)"]
};

var remodel = {
	"name": "Remodel",
	"cost": 4,
	"type": "action",
	"secondType": "",
	"ability": ["trash(card)","selectCard(1,card.cost+2)","gainCard(x,1,\"discard\")"]
};

var smithy = {
	"name": "Smithy",
	"cost": 4,
	"type": "action",
	"secondType": "",
	"ability": ["draw(3)"]
};

var spy = {
	"name": "Spy",
	"cost": 4,
	"type": "action",
	"secondType": "attack",
	"ability": ["plusAction(1)","draw(1)","spyAttack()"]
};

var thief = {
	"name": "Thief",
	"cost": 4,
	"type": "action",
	"secondType": "attack",
	"ability": ["thiefAttack()"]
}

var throneRoom = {
	"name": "Throne Room",
	"cost": 4,
	"type": "action",
	"secondType": "",
	"ability": ["selectCard(1,0)","cloneCard(x)"]  //clone card creates a dupe card, plays them both, deletes the dupe
};

var councilRoom = {
	"name": "Council Room",
	"cost": 5,
	"type": "action",
	"secondType": "",
	"ability": ["draw(4)","plusBuy(1)","opponentDraw(1)"]
};

var festival = {
	"name": "Festival",
	"cost": 5,
	"type": "action",
	"secondType": "",
	"ability": ["plusAction(2)","draw(1)","plusMoney(2)"]
};

var laboratory = {
	"name": "Laboratory",
	"cost": 5,
	"type": "action",
	"secondType": "",
	"ability": ["plusAction(1)","draw(2)"]
};

var library = {
	"name": "Library",
	"cost": 5,
	"type": "action",
	"secondType": "",
	"ability": ["drawToSeven()"]
};

var market = {
	"name": "Market",
	"cost": 5,
	"type": "action",
	"secondType": "",
	"ability": ["plusAction(1)","plusMoney(1)","draw(1)","plusBuy(1)"]
};

var mine = {
	"name": "Mine",
	"cost": 5,
	"type": "action",
	"secondType": "",
	"ability": ["trashCoin()","gainCoin(x)"]
};

var witch = {
	"name": "Witch",
	"cost": 5,
	"type": "action",
	"secondType": "attack",
	"ability": ["draw(2)","opponentCurse(1)"]
};

var adventurer = {
	"name": "Adventurer",
	"cost": 6,
	"type": "action",
	"secondType": "",
	"ability": ["twoCoins()"]
};
