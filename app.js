 let gameSeq=[];
 let userSeq=[];

let btnColors=["red", "blue", "green", "yellow"];

 let started=false; 
 let level=0;

 let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
   if (started==false){
    console.log("Game is Started");
    started=true;
    levelUp();
   }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);

}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 250);

}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText =`Level ${level}`;

    let randIDx = Math.floor(Math.random()*4);
    let randcolor = btnColors[randIDx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameSeq.push(randcolor);    
    console.log(gameSeq);
    btnFlash(randbtn);
}

function checkAns(idx){
    //console.log("curr level: ", level);
    if (userSeq[idx]===gameSeq[idx]){
        if (userSeq.length===gameSeq.length){
            setTimeout(levelUp, 1000)}
    }else{
        h2.innerHTML=`Game Over! Your Score was <b>${level}</b> <br>    Press Any Key to Restart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="White";
        }, 200);
        startOver();
    }
}

function btnPress(){
    console.log(this);
    let btn = this;
    userFlash(btn);
    
    userColor =btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns= document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}


function startOver(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

