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
p1.button.addEventListener('click', ()=>{updateScores(p1,p2)})
p2.button.addEventListener('click', ()=>{updateScores(p2,p1)})

const select= document.querySelector('select');
const reset= document.querySelector('#reset');
select.addEventListener('change', ()=>{
    winningScore=parseInt(this.value)})