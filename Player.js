// class Player{

// constructor(){
// this.name=null;
// this.cards=[];
// this.status=null;
// }

// updatePlayerInfo(){}
// getPlayerCards(){}
// getPlayerStatus(){}
// getPlayerName(){}



// }
class Player {
    constructor(){
      this.index = null;
      this.name = null;
      this.status=null;
      this.score=null;
      this.playerCards=null;
    }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        status:this.status,
        score:this.score
        
      });
    }
  
    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
  }
  