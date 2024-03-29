class Contestant {
    constructor(){
      this.index = null;
      this.name = null;
    }
  
    getCount(){
      var contestantCountRef = database.ref('playerCount');
      contestantCountRef.on("value",(data)=>{
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(){
      var contestantIndex = "contestants/contestant" + this.index;
      database.ref(contestantIndex).set({
        name:this.name
      });
    }
  
    static getcontestantInfo(){
      var contestantInfoRef = database.ref('players');
      contestantInfoRef.on("value",(data)=>{
        allcontestantcontestant = data.val();
      })
    }
  }
  