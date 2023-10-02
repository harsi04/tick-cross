/*let turn="x";
let gameover = false;
logic();
// for turn
const changeturn = ()=>{
    return turn=="x"?"0":"x";
}


const checkwin=()=>{
    let boxtext=document.getElementsByClassName("boxtext")
let win=
[
    [0,1,2],[3,4,5,],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];
win.forEach((e)=>{

    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) 
{
    //turn=changeturn();
   
    document.getElementsByClassName("info")[0].innerText  =  "congratulation  "+changeturn();+'  won';
    setTimeout(rest,5000);
    gameover=true;
    setTimeout(logic,8000);
    
   
   
}


})
}
function logic()
{
    
let boxes=document.getElementsByClassName("box")
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector(".boxtext");
   
   
    element.addEventListener('click',()=>{
        
        if(boxtext.innerText === '')
        {
            boxtext.innerText=turn;
            document.getElementsByClassName("info")[0].innerText  = "Turn to " + turn;
            turn=changeturn();
            checkwin();
           console.log(turn)


if(gameover!=true)
document.getElementsByClassName("info")[0].innerText  = "Turn to " + turn;
         
    } })
})
}
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
       
    });
    Turn="x";
    document.getElementsByClassName("info")[0].innerText  = "Turn to " + turn;
})
function rem(){
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    Turn="0";
    document.getElementsByClassName("info")[0].innerText  = "Turn to " + turn;
   
}
function gm()
{
    return gameover=true;
}
 function rest()
 {
    console.log("train")
    turn=changeturn();
 

    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
       
    });
   
    turn=changeturn(); 
    document.getElementsByClassName("info")[0].innerText  = "Turn is " +turn;
    
    
    
 }


*/
let turn = "x";
let gameover = false;

// Function to change turn
const changeTurn = () => {
    return turn === "x" ? "0" : "x";
};

// Function to check for a win
const checkWin = () => {
    let boxText = document.getElementsByClassName("boxtext");
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    win.forEach((e) => {
        if (
            boxText[e[0]].innerText === boxText[e[1]].innerText &&
            boxText[e[2]].innerText === boxText[e[1]].innerText &&
            boxText[e[0]].innerText !== ""
        ) {
            document.getElementsByClassName("info")[0].innerText =
                "Congratulations " + boxText[e[0]].innerText + " won!";
            setTimeout(rest, 5000);
            gameover = true;
        }
    });
};

// Function to handle game logic
function logic() {
    let boxes = document.getElementsByClassName("box");
    Array.from(boxes).forEach((element) => {
        let boxText = element.querySelector(".boxtext");

        element.addEventListener("click", () => {
            if (boxText.innerText === "" && !gameover) {
                boxText.innerText = turn;
                document.getElementsByClassName("info")[0].innerText =
                    "Turn to " + changeTurn();
                turn = changeTurn();
                checkWin();
            }
        });
    });
}

// Function to reset the game
function rest() {
    let boxTexts = document.querySelectorAll(".boxtext");
    Array.from(boxTexts).forEach((element) => {
        element.innerText = "";
    });
    gameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn to " + turn;
}

// Initial call to game logic function
logic();



 reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
       
    });
    Turn="x";
    document.getElementsByClassName("info")[0].innerText  = "Turn to " + turn;
})