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
       else if(scoreA===15){
          scoreA=30;
        }
        else if(scoreA===30){
          scoreA=40;
        }

     }
     this.getScoreB = function(){
      if(scoreB===0){
        scoreB=15;
        }
      else if(scoreB===15){
        scoreB=30;
      }
      else if(scoreB===30){
        scoreB=40;
      }

    }
     this.echo = function(){
       //0
        if(scoreA===0 && scoreB===0){
          return 'Love - Love';
        }
        else if(scoreA===15&& scoreB===0){
          return 'Fifteen - Love';
        }
        else if(scoreA===30 && scoreB===0){
          return 'Thirty - Love';
        }
        else if(scoreA===40 && scoreB===0){
          scoreA = 0;
          return 'Forty - Love';
        }
        //15
        else if(scoreA===0 && scoreB===15){
          return 'Love - Fifteen';
        }
        else if(scoreA===15&& scoreB===15){
          return 'Fifteen - Fifteen';
        }
        else if(scoreA===30 && scoreB===15){
          return 'Thirty - Fifteen';
        }
        else if(scoreA===40 && scoreB===15){
          return 'Forty - Fifteen';
        }
        //B=o
        else if(scoreA===0 && scoreB===15){
          return 'Love - Fifteen';
        }
        else if(scoreA===0 && scoreB===30){
          return 'Love - Thirty';
        }
        else if(scoreA===0 && scoreB===40){
          return 'Love - Forty';
        }

     }
  }

describe('Tennis game', function(){
  var tennis = new Tennis();
  //A win
        it('should echo Love - Love when 0 - 0 on the game', function(){
              tennis.start();
              expect(tennis.echo()).toEqual('Love - Love');
            })
        it('should echo Fifteen - Love when 15 - 0 on the game', function(){
              tennis.getScoreA();
              expect(tennis.echo()).toEqual('Fifteen - Love');
            })
        it('should echo Thirty - Love when 30 - 0 on the game', function(){
                  tennis.getScoreA();
                  expect(tennis.echo()).toEqual('Thirty - Love');
            })
        it('should echo Forty - Love when 40 - 0 on the game', function(){
                  tennis.getScoreA();
                  expect(tennis.echo()).toEqual('Forty - Love');

            })
        it('should echo Love - Fifteen when 0 - 15 on the game', function(){
                  tennis.getScoreB();
                  expect(tennis.echo()).toEqual('Love - Fifteen');
                })

});
