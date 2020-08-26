class game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
      console.log(gameState);
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
          form = new Form()
      form.display();
        
          
        }
      }

    }
  
    play(){
      
      //distribute 5 cards each to both players
      //distribution logic, adding them to players card list

      Player.getPlayerInfo();
    // console.log(Array.isArray(allPlayers)) ;
     // console.log(allPlayers);
      if(allPlayers !== undefined){
          
         for(var i in allPlayers){
            console.log(i,player.index);
            if ( i === "player"+player.index){
                if(allPlayers[i].status === "current")
                //console.log("i am current player");
                
                chatcp.display();
                else 
                //console.log("i am non current  player");
                chatncp.display();
              }
         }
    

         
    
      }
  
  
      drawSprites();
    }

  playIsClicked(){

   // this.input.hide();
    //this.button.hide();
    var entername=document.getElementById("entername")
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
  }
  