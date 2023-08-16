const p1= {
    score:0,
    button: document.querySelector("#p1button"),
    display: document.querySelector("#p1score")
};
const p2= {
    score:0,
    button: document.querySelector("#p2button"),
    display: document.querySelector("#p2score")
};
let isGameOver=false;
let winningScore=5;

const updateScores(player,opponent){
    if(!isGameOver){
        player.score +=1;
    }
    if(player.score===winningScore){
        isGameOver=true;
        player.button.disabled=true;
        opponent.button.disabled=true;
        player.display.classList.add("has-text-success");
        opponent.display.classList.add("has-text-danger");
    }
    player.display.textContent=player.score;
}