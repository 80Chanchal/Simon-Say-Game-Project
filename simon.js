let gameSeq=[];
let userSeq=[];

let buttons=["red","green","blue","yellow"]
let start = false;
let level = 0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
       if(start==false){
            console.log("Game is started");
            start=true; 

            levelUp();
           
       }
      
});
function userclick(userflash){
    userflash.classList.add("userflash");
    setTimeout(function(){
        userflash.classList.remove("userflash");
    },250);
}

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    } ,250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    
    //choose random value
    let ranIdx=Math.floor(Math.random()*3);
    let randomColor=buttons[ranIdx];
    let randombtn=document.querySelector(`.${randomColor}`);
    //console.log(ranIdx);
    //console.log(randomColor);
    //console.log(randombtn);
    
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randombtn);
}
function checkans(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`Game Over!! Press any key to start.<b><br>High Score Level=${level}</b>`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },250);
        
        reset();
    }

}

function btnpress(){
    let btn=this;
    userclick(btn);
    userColor =btn.getAttribute("id");
    userSeq.push(userColor);
    //console.log(userColor);

    checkans(userSeq.length-1);
}
 
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
    
}

function reset(){
    start=false;
    userSeq=[];
    gameSeq=[];
    level=0;
}