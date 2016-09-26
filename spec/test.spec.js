function Tennis(){
      var scoreA;
      var scoreB;
      this.start = function(){
        scoreA = 0;
        scoreB = 0;
      }
      this.getScoreA = function(){
       if(scoreA===0){
         scoreA=15;
       }
     }
  }
