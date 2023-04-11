var b  = true;
let Row = 1;
let Column = 'a';
for(var i = 0; i < 64; i++){
    var square = document.createElement('div');
    square.classList.add("square");

   
    if (i == 8) {
     Row = 2;
    } else if (i == 16) {
        Row = 3;
    } else if (i == 24) {
        Row = 4;
    } else if (i == 32) {
        Row = 5;
    } else if (i == 40){
        Row = 6;
    } else if (i == 48) {
        Row = 7;
    } else if (i == 56) {
        Row = 8;
    } 

    if (i == 1 || i == 9 || i == 17 || i == 25 || i == 33 || i == 41 || i == 49 || i == 57) {
        Column = 'b';
       } else if (i == 2 || i == 10 || i == 18 || i == 26 || i == 34|| i == 42 || i == 50 || i == 58) {
           Column = 'c';
       } else if (i == 3 || i == 11 || i == 19 || i == 27 || i == 35 || i == 43 || i == 51 || i == 59) {
           Column = 'd';
       } else if (i == 4 || i == 12 || i == 20 || i == 28 || i == 36 || i == 44 || i == 52 || i == 60) {
           Column = 'e';
       } else if (i == 5 || i == 13 || i == 21 || i == 29 || i == 37 || i == 45 || i == 53 || i == 61){
           Column = 'f';
       } else if (i == 6 || i == 14 || i == 22 || i == 30 || i == 38 || i == 46 || i == 54 || i == 62) {
           Column = 'g';
       } else if (i == 7 || i == 15 || i == 23 || i == 31 || i == 39 || i == 47 || i == 55|| i == 63) {
           Column = 'h';
       } else {
          Column  = 'a';
       }
    square.id = Column + Row;
    if(b){
        square.classList.add("light-bg");
    } else{
        square.classList.add("dark-bg");
    }
    b = !b;
    if((i + 1) % 8 == 0){
        b = !b;
    }
    chessBoard.appendChild(square);
}

chessBoard.addEventListener('click', function(){
 console.log('working');

})



// arrays are both same it goes pawn,rook,bishop,king,knight,queen
const  addedBlackPieces= [];
const blackPiece = new Map();
const bpawn = new Image();
bpawn.src ='assets/black/bpawn.png';
blackPiece.set('bpawn',bpawn);
const brook = new Image();
brook.src ='assets/black/brook.png';
blackPiece.set('brook',brook);
const bbishop = new Image();
bbishop.src ='assets/black/bbishop.png';
blackPiece.set('bbishop',bbishop);
const bking = new Image();
bking.src ='assets/black/bking.png';
blackPiece.set('bking',bking);
const bknight = new Image();
bknight.src ='assets/black/bknight.png';
blackPiece.set('bknight',bknight);
const bqueen = new Image();
bqueen.src ='assets/black/bqueen.png';
blackPiece.set('bqueen',bqueen);

const  addedWhitePieces= [];
const  whitePiece = new Map();
const wpawn = new Image();
wpawn.src ='assets/white/wpawn.png';
whitePiece.set('wpawn',wpawn);
const wrook = new Image();
wrook.src ='assets/white/wrook.png';
whitePiece.set('wrook',wrook);
const wbishop = new Image();
wbishop.src ='assets/white/wbishop.png';
whitePiece.set('wbishop',wbishop);
const wking = new Image();
wking.src ='assets/white/wking.png';
whitePiece.set('wking',wking);
const wknight = new Image();
wknight.src ='assets/white/wknight.png';
whitePiece.set('wknight',wknight);
const wqueen = new Image();
wqueen.src ='assets/white/wqueen.png';
whitePiece.set('wqueen',wqueen);


a1.innerText = "a1";
a2.innerText = "2";
a3.innerText = "3";
a4.innerText = "4";
a5.innerText = "5";
a6.innerText = "6";
a7.innerText = "7";
a8.innerText = "8";
b1.innerText = "b";
c1.innerText = "c";
d1.innerText = "d";
e1.innerText = "e";
f1.innerText = "f";
g1.innerText = "g";
h1.innerText = "h";
function setupBoard(){
  
  
    for(var i = 0; i < 33; i++){
        let name = "wpawn"+i;
        name = whitePiece.get('wpawn'); 
        console.log(name);

    }

//white special pieces    

//white pawns

//black special pieces 

//black pawns 

}

let bpawn2 = blackPiece.get('bpawn');
a1.appendChild(bpawn2);
b1.appendChild(wknight);
c1.appendChild(wbishop);
d1.appendChild(wqueen);
e1.appendChild(wking);
h1.appendChild(wrook);




var timeLimit = 900000;
var timePassed = 0;
var timerInterval = setInterval(updateTimer, 1000);

function updateTimer(){
    
    timePassed += 1000;
    var timeLeft = timeLimit - timePassed;

    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("timerP1").innerText =  minutes + "m " + seconds + "s ";
    document.getElementById("timerP2").innerText =  minutes + "m " + seconds + "s ";
    
    if (timeLeft < 0) {
      clearInterval(timerInterval);
      document.getElementById("timerP1").innerText = "EXPIRED";
      document.getElementById("timerP2").innerText = "EXPIRED";
      alert("Times UP!!");
    }
}




function minutesToMiliSeconds(minutes){
    var num = minutes * 60;
    num *= 1000;
    return num;
}
function reset(){
   setupBoard();
}
function tenMin(){
    timeLimit = 600000;
    timerStartValue = 600000;
   
}
function fifteenMin(){
   timeLimit = 900000;

}
function unlimited(){
    clearInterval(timerInterval);
}
function custom(){
    num = prompt("How many minutes?");
    minutes = parseInt(num)
    finalMinutes = minutesToMiliSeconds(minutes);
    timeLimit = finalMinutes;
}
