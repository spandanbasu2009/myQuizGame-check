class Contestant {
    constructor(){
      this.index = null;
      this.name = null;
      //this.button = createButton("Submit");
      this.answer = '';
    }
  
    getCount(){
      var contestantCountRef = database.ref('contestantCount');
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
        name:this.name,
        answer:this.answer
      });
    }
  
    static getContestantInfo(){
      var contestantInfoRef = database.ref('contestant');
      contestantInfoRef.on("value",(data)=>{
        allContestants = data.val();
      })
    }
  }
  