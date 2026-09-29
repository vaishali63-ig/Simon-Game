
let level=0;
let maxscore=0;
let started=false;

let userseq=[];
let gameseq=[];

let colours=["red","green","yellow","purple"]
let h2=document.querySelector("h2");

let btns =document.querySelectorAll(".btn");
let start_btn=document.getElementById("start-btn");


function resetgame(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}


function checkseq(){
    let idx=userseq.length-1;
    if(gameseq[idx]==userseq[idx]){
        if(idx==gameseq.length-1){
            setTimeout(levelup,1000);
        }
    }
    else{
        maxscore=Math.max(maxscore,level);
        h2.innerText=`Game over ! Your Score: ${level} Max Score: ${maxscore} Press Start button to restart`;
        let btncontaner=document.querySelector("body");
        btncontaner.classList.add("overflesh");
    setTimeout(function(){
        btncontaner.classList.remove("overflesh");
    },250);
    
        resetgame();
    }
}


function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randcolorindex=Math.floor(Math.random()*4);
      let  randomcolour=colours[randcolorindex];
    let btn=document.querySelector(`.${randomcolour}`);
    gameseq.push(btn);
    fleshbtn(btn);

}

function userflesh(btn){
    console.log(btn);
    btn.classList.add("userflesh");
    setTimeout(function(){
        btn.classList.remove("userflesh");
    },240);
}

function fleshbtn(btn){
    console.log(btn);
    btn.classList.add("flesh");
    setTimeout(function(){
        btn.classList.remove("flesh");
    },240);
}

for(btn of btns){
    btn.addEventListener("click",function(){
        console.log("button pressed");
        let clickedbtn= this;
        userflesh(clickedbtn);
        userseq.push(clickedbtn);
        checkseq();
    }
    );
   
}
start_btn.addEventListener("click",function(){
    console.log("started");
    if(started==false){
        started=true;
        userflesh(start_btn);
        setTimeout(levelup,450);
    }
});