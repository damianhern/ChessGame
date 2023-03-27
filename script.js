var chessBoard = document.createElement('div');
chessBoard.classList.add("chess-board");
chessBoard.id = 'chessBoard';
document.body.appendChild(chessBoard);
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
    console.log(square.id);
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

/* const  blackPieces= [];
const BP = new Image();
BP.src ='BP.png';
blackPieces.push(BP);
const BR = new Image();
BR.src ='BR.png';
blackPieces.push(BR);
const BB = new Image();
BB.src ='BB.png';
blackPieces.push(BB);
const BK = new Image();
BK.src ='BK.png';
blackPieces.push(BK);
const BN = new Image();
BN.src ='BN.png';
blackPieces.push(BN);
const BQ = new Image();
BQ.src ='BQ.png';
blackPieces.push(BQ);


const  whitePieces= [];
const WP = new Image();
WP.src ='WP.png';
blackPieces.push(WP);
const WR = new Image();
WR.src ='WR.png';
blackPieces.push(WR);
const WB = new Image();
WB.src ='WB.png';
blackPieces.push(WB);
const WK = new Image();
WK.src ='WK.png';
blackPieces.push(WK);
const WN = new Image();
WN.src ='WN.png';
blackPieces.push(WN);
const WQ = new Image();
WQ.src ='WQ.png';
blackPieces.push(WQ);
*/