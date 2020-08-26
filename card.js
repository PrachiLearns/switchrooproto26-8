class card{

constructor(){
this.cardID=null;//unique identifier
this.cardType=null;//subject card/letter card
this.cardContent=null;//written on card
this.cardWith=null;//player1/player2/deck/face up card

}

 
getCardsInGame(shufflecards){

    var cardInGameRef =  database.ref('cardsInGame');
     cardInGameRef.on("value",(data)=>{
      cardInGame = data.val();
    });
    setTimeout(shufflecards,3000);
    }


    addCard(){
    database.ref("cardsInGame").update(
      {
        "cardContent" : "s card",
        "cardID" : 8,
        "cardType" : "subject"
      }
    );

    }
    

   /*shufflecards() {
      cardInGame = shuffle(cardInGame);
      totalCards=cardInGame.length;
      console.log("total cards", totalCards);
  
      printshuffledarray(cardInGame);
  
  }*/

}


