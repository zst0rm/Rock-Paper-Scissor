var play = 0;
var score = {
    win : 0,
    lose : 0,
    tie : 0
};
var comp = '';
var userMove;
var resultMove;
function RPS(user){
    var random = Math.random();
    userMove = user;
    var result = '';
        
    if(random < 0.33){
            
        console.log('Computer: Rock');
        comp = 'Rock';
        play += 1;
            
        if(user === 'rock'){
            score.tie += 1;
            result = 'TIE!';
                
                
        }else if(user === 'scissor'){
            score.lose += 1;
            result = 'LOSE!';
                
                
        }else{
            score.win += 1;
            result = 'WIN!';
                
                
        }
    }else if(random < 0.66 && random > 0.33){
        console.log('Computer: Scissor');
        comp = 'Scissor';
        play += 1;
            
        if(user === 'rock'){
            score.win += 1;
            result = 'WIN!';
                
                
        }else if(user === 'scissor'){
            score.tie += 1;
            result = 'TIE!';
                
                
        }else{
            score.lose += 1;
            result = 'LOSE!';
                
                
        }
    }else{
        console.log('Computer: Paper');
        comp = 'Paper';
        play += 1;
            
        if(user === 'rock'){
            score.lose += 1;
            result = 'LOSE!';
                
                
        }else if(user === 'scissor'){
            score.win += 1;
            result = 'WIN!';
                
                
        }else{
            score.tie += 1;
            result = 'TIE!';
                
                
        }
    }
    resultMove = result;
    // if(result === 'win'){
    //     alert(`You Win!\nWins: ${score.win}, Loses: ${score.lose}, Ties: ${score.tie}`);
    // }
    // else if(result === 'lose'){
    //     alert(`You Lose!\nWins: ${score.win}, Loses: ${score.lose}, Ties: ${score.tie}`);
    // }else{
    //     alert(`Tie!\nWins: ${score.win}, Loses: ${score.lose}, Ties: ${score.tie}`);
    // }
    fun();
}
function fun(){
    document.querySelector('.result-move').innerHTML = `${resultMove}`;
    document.querySelector('.score-info').innerHTML = `Turns: ${play} Wins: ${score.win}, Loses: ${score.lose}, Ties: ${score.tie}`;
    document.querySelector('.move-display').innerHTML = `Computer: ${comp} - ${userMove} :You`;
}


