/* Dustin Manns 12/28/2015
   All of the base deck as objects */

 var cellar = {
 	"name": "Cellar",
  	"cost": 2,
	"type": "action",
 	"secondType": "",
 	"ability": ["plusAction(1)","discard(x)","draw(x)"]
 };

 var chapel = {
 	"name": "Chapel",
  	"cost": 2,
	"type": "action",
 	"secondType": "",
 	"ability": ["checkTrashNumber(x,4)","trash(x)"]
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
 	"ability": ["plusMoney(2)","decktoDiscard()"] //May need to pass var here
 };

 var village = {
 	"name": "Village",
  	"cost": 3,
	"type": "action",
 	"secondType": "",
 	"ability": ["plusAction(2)","draw(1)"]
 };