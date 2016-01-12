/* Dustin Manns 12/28/2015
   All of the base decks as objects */

var KingdomCard = function(name,cost,type,secondType,ability) {
	this.name = name;
	this.cost = cost;
	this.type = type;
	this.secondType = secondType;
	this.ability = ability;
};

var baseCardList = [
	"cellar","chapel","moat","chancellor","village","woodcutter","workshop",
	"bureaucrat","feast","gardens","militia","moneylender","remodel","smithy","spy",
	"thief","throneRoom","councilRoom","festival","library","laboratory","market",
	"witch","mine","adventurer"
];

var cellar = new KingdomCard("Cellar",2,"action","",
	["plusAction(1)","selectCard(hand.length()+1,0)","discard(x)","draw(x.length)"]); //x is array

var chapel = new KingdomCard("Chapel",2,"action","",
 	["checkTrashNumber(x.length,4)","trash(x)"]); //x is an array

var moat = new KingdomCard("Moat",2,"action","reaction", //TODO:decide how to code reactions
 	["draw(2)"]);

var chancellor = new KingdomCard("Chancellor",3,"action","",
 	["plusMoney(2)","deckToDiscard()"]); //May need to pass var here

var village = new KingdomCard("Village",3,"action","",
 	["plusAction(2)","draw(1)"]);

var woodcutter = new KingdomCard("Woodcutter",3,"action","",["plusBuy(1)","plusMoney(2)"]);

var workshop = new KingdomCard("Workshop",3,"action","",
	["selectCard(1,4)","gainCard(x,1,\"discard\")"]);

var bureaucrat = new KingdomCard("Bureaucrat",4,"action","attack",
	["gainCard(\"silver\",1,\"deck\")","victoryOnDeck()"]);

var feast = new KingdomCard("Feast",4,"action","",
	["trashFeast()","selectCard(1,5)","gainCard(x,1,\"discard\")"]); //have to make throne room work with this

var gardens = new KingdomCard("Gardens",4,"victory", //can't play if primary is victory
	"",["plusVictory(Math.floor(totalCards/10))"]);

var militia = new KingdomCard("Militia",4,"action","attack",["plusMoney(2)", "forceDiscardTo(3)"]);

var moneylender = new KingdomCard("Moneylender",4,"action","",["trash(copper)","plusMoney(3)"]);

var remodel = new KingdomCard("Remodel",4,"action","",
	["trash(card)","selectCard(1,card.cost+2)","gainCard(x,1,\"discard\")"]);

var smithy = new KingdomCard("Smithy",4,"action","",["draw(3)"]);

var spy = new KingdomCard("Spy",4,"action","attack",["plusAction(1)","draw(1)","spyAttack()"]);

var thief = new KingdomCard("Thief",4,"action","attack",["thiefAttack()"]);

var throneRoom = new KingdomCard("Throne Room",4,"action","",
	["selectCard(1,0)","cloneCard(x)"]);  //clone card creates a dupe card, plays them both, deletes the dupe

var councilRoom = new KingdomCard("Council Room",5,"action","",
	["draw(4)","plusBuy(1)","opponentDraw(1)"]);

var festival = new KingdomCard("Festival",5,"action","",
	["plusAction(2)","draw(1)","plusMoney(2)"]);

var laboratory = new KingdomCard("Laboratory",5,"action","",["plusAction(1)","draw(2)"]);

var library = new KingdomCard("Library",5,"action","",["drawToSeven()"]);

var market = new KingdomCard("Market",5,"action","",
	["plusAction(1)","plusMoney(1)","draw(1)","plusBuy(1)"]);

var mine = new KingdomCard("Mine",5,"action","",["trashCoin()","gainCoin(x)"]);

var witch = new KingdomCard("Witch",5,"action","attack",["draw(2)","opponentCurse(1)"]);

var adventurer = new KingdomCard("Adventurer",6,"action","",["twoCoins()"]);

