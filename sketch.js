var gameState = 0;
var fm,chatcp,chatncp;
var allPlayers;
var database, cardInGame, cards, y = 10, count = 0, div,playerCount,player,totalCards=0;
function setup() {

    //createCanvas(displayWidth - 50, displayHeight - 50);
    database = firebase.database();
    game = new game();
    game.getState();
    game.start();
    cards = new card();
    
    document.getElementById("play").addEventListener("click",updateplayerInfo);


}

function draw() {
    //background(100,100,234);
    
    
    if(playerCount === 2){
        game.update(1);
      }
      if(gameState === 1){
        clear();
        game.play();
      }
}




function printshuffledarray(cardInGame) {
    for (var i = 0; i < cardInGame.length, count < cardInGame.length; i++) {
        div = createDiv(cardInGame[i].cardContent)
        div.position(100, 100 * (i + 1));
        div.class('cards');
        count++;
    }
}

function updateplayerInfo(){

   // this.input.hide();
    //this.button.hide();
    
    entername.style.display="none";
    //player.name=entername.value;
    //console.log(player.name);
    document.getElementById("play").style.display="none";
    document.getElementById("howto").style.display="none";
    
    
    // player.name = this.input.value();
    // playerCount+=1;
    // player.index = playerCount;
    // if(playerCount === 1){
    //     player.status="current"
    // }else player.status="other"
    // player.score=0;
    // player.update();
    // player.updateCount(playerCount);
    // this.greeting.html("Hello " + player.name)
    // this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    // cards.addCard();


}