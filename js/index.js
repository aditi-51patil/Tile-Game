var game_over=false;
var active_tile=null;
var active_element=null;
var score = 0;
var scoreElement = document.getElementById("score");
var runProcessBlock=null;
var level=4;
var lastBlock=0;
var colours=["red","silver","purple","gold","blue","cyan","orange","pink","brown","#7FFF00","crimson","#B8860B","#90EE90","#00FF00","#9370DB","#191970"]
var difficultyElement = document.getElementById("difficulty");
function startGame(){
    var btn = document.getElementById("start");
    btn.setAttribute("disabled",true)
    difficultyElement.setAttribute("disabled",true)
    runProcessBlock = setInterval(function(){
        // do{
            if(active_element)
            {
                // active_element.classList.remove("green");
                active_element.style.backgroundColor="black";
            }
             active_tile= getRandomArbitrary(1,level);
             active_element = document.getElementById(active_tile);
            //  active_element.classList.add("green");
            active_element.style.backgroundColor=colours[getRandomArbitrary(0,colours.length-1)]
            
        // }while(!game_over)
    },120)
}
function onBlockClick(id){
    if(id!=active_tile){
        game_over=true;
        resetGame();
        alert("Game Over")
    }else if(lastBlock!=id){
        lastBlock=id
        score+=2;
        scoreElement.innerHTML=`Score:${score}`
        if(score>localStorage.getItem("high_score")){
            localStorage.setItem("high_score",score)
            let hS = document.getElementById("highScore");
            hS.innerHTML=`High Score${localStorage.getItem("high_score")}`
        }
    }
}
function resetGame(){
    score=0;
    scoreElement.innerHTML=`Score:${score}`
    clearInterval(runProcessBlock)
        var btn = document.getElementById("start");
        btn.removeAttribute("disabled");
        difficultyElement.removeAttribute("disabled")
        if(active_element)
        {
            // active_element.classList.remove("green");
            active_element.style.backgroundColor="black"
        }
}
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
function formFrid(lvl){
    level=lvl
var arena =  document.getElementById("arena");
    arena.innerHTML =``;
    for(let j=0;j<level;j++){
        arena.innerHTML+=`<div id=${j} class="game_blocks game_block_level_${lvl}" onclick="onBlockClick(${j})"></div>`;
      
    }
}