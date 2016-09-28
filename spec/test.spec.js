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
        else if(scoreA===40){
          scoreA=41;
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
      else if(scoreB===40){
        scoreB=41;
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
          return 'Forty - Love';
        }
        else if(scoreA>40 && scoreB===0){
          scoreA = 0;
          scoreB = 0;
          return 'Player A won';
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
        else if(scoreA===0 && scoreB>40){
          scoreA = 0;
          scoreB = 0;
          return 'Player B won';
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
        it('should echo Player A won when score A> 40 and B<40 the game', function(){
              tennis.getScoreA();
              expect(tennis.echo()).toEqual('Player A won');
            })

        //B
        it('should echo Love - Fifteen when 0 - 15 on the game', function(){
              tennis.getScoreB();
              expect(tennis.echo()).toEqual('Love - Fifteen');
                })
        it('should echo Love - Thirty when 0 - 30 on the game', function(){
              tennis.getScoreB();
              expect(tennis.echo()).toEqual('Love - Thirty');
                })
        it('should echo Love - Forty when 0 - 40 on the game', function(){
              tennis.getScoreB();
              expect(tennis.echo()).toEqual('Love - Forty');
                })
        it('should echo Player B won when score B> 40 and A<40 the game', function(){
              tennis.getScoreB();
              expect(tennis.echo()).toEqual('Player B won');
                })
          //15-15,30-15
        it('should echo Fifteen - Fifteen when 15 - 15 on the game', function(){
              tennis.getScoreA();
              tennis.getScoreB();
              expect(tennis.echo()).toEqual('Fifteen - Fifteen');
                })
        it('should echo Thirty - Fifteen when 30 - 15 on the game', function(){
              tennis.getScoreA();
              expect(tennis.echo()).toEqual('Thirty - Fifteen');
                })
});
