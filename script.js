var b = true;
let Row = 1;
let Column = 'a';
for (var i = 0; i < 64; i++) {
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
    } else if (i == 40) {
        Row = 6;
    } else if (i == 48) {
        Row = 7;
    } else if (i == 56) {
        Row = 8;
    }

    if (i == 1 || i == 9 || i == 17 || i == 25 || i == 33 || i == 41 || i == 49 || i == 57) {
        Column = 'b';
    } else if (i == 2 || i == 10 || i == 18 || i == 26 || i == 34 || i == 42 || i == 50 || i == 58) {
        Column = 'c';
    } else if (i == 3 || i == 11 || i == 19 || i == 27 || i == 35 || i == 43 || i == 51 || i == 59) {
        Column = 'd';
    } else if (i == 4 || i == 12 || i == 20 || i == 28 || i == 36 || i == 44 || i == 52 || i == 60) {
        Column = 'e';
    } else if (i == 5 || i == 13 || i == 21 || i == 29 || i == 37 || i == 45 || i == 53 || i == 61) {
        Column = 'f';
    } else if (i == 6 || i == 14 || i == 22 || i == 30 || i == 38 || i == 46 || i == 54 || i == 62) {
        Column = 'g';
    } else if (i == 7 || i == 15 || i == 23 || i == 31 || i == 39 || i == 47 || i == 55 || i == 63) {
        Column = 'h';
    } else {
        Column = 'a';
    }
    square.id = Column + Row;
    if (b) {
        square.classList.add("light-bg");
    } else {
        square.classList.add("dark-bg");
    }
    b = !b;
    if ((i + 1) % 8 == 0) {
        b = !b;
    }
    chessBoard.appendChild(square);
}






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

let playerTurn = 1;
window.addEventListener('keypress', event => {
    if (event.keyCode === 32) {
        if (playerTurn == 2) {
            playerTurn = 1;
           
        } else {
            playerTurn = 2;
           
        }
        
    }
});




function setupBoard() {
    const whitePiece = new Map();
    const blackPiece = new Map();


    const brook1 = new Image();
    brook1.src = 'assets/black/brook.png';
    brook1.id = 'brook';
    brook1.classList.add('chessPieces'); -
        blackPiece.set('brook1', brook1);
    const brook2 = new Image();
    brook2.src = 'assets/black/brook.png';
    brook2.id = 'brook';
    brook2.classList.add('chessPieces');
    blackPiece.set('brook2', brook2);

    const bbishop1 = new Image();
    bbishop1.src = 'assets/black/bbishop.png';
    bbishop1.id = 'bbishop';
    bbishop1.classList.add('chessPieces');
    blackPiece.set('bbishop1', bbishop1);
    const bbishop2 = new Image();
    bbishop2.src = 'assets/black/bbishop.png';
    bbishop2.id = 'bbishop';
    bbishop2.classList.add('chessPieces');
    blackPiece.set('bbishop2', bbishop2);


    const bking1 = new Image();
    bking1.src = 'assets/black/bking.png';
    bking1.id = 'bking';
    bking1.classList.add('chessPieces');
    blackPiece.set('bking1', bking1);

    const bknight1 = new Image();
    bknight1.src = 'assets/black/bknight.png';
    bknight1.id = 'bknight';
    bknight1.classList.add('chessPieces');
    blackPiece.set('bknight1', bknight1);
    const bknight2 = new Image();
    bknight2.src = 'assets/black/bknight.png';
    bknight2.id = 'bknight';
    bknight2.classList.add('chessPieces');
    blackPiece.set('bknight2', bknight2);

    const bqueen1 = new Image();
    bqueen1.src = 'assets/black/bqueen.png';
    bqueen1.id = 'bqueen';
    bqueen1.classList.add('chessPieces');
    blackPiece.set('bqueen1', bqueen1);

    const bpawn1 = new Image();
    bpawn1.src = "assets/black/bpawn.png";
    bpawn1.id = 'bpawn';
    bpawn1.classList.add('chessPieces');
    blackPiece.set('bpawn1', bpawn1);
    const bpawn2 = new Image();
    bpawn2.src = "assets/black/bpawn.png";
    bpawn2.id = 'bpawn';
    bpawn2.classList.add('chessPieces');
    blackPiece.set('bpawn2', bpawn2);
    const bpawn3 = new Image();
    bpawn3.src = "assets/black/bpawn.png";
    bpawn3.id = 'bpawn';
    bpawn3.classList.add('chessPieces');
    blackPiece.set('bpawn3', bpawn3);
    const bpawn4 = new Image();
    bpawn4.src = "assets/black/bpawn.png";
    bpawn4.id = 'bpawn';
    bpawn4.classList.add('chessPieces');
    blackPiece.set('bpawn4', bpawn4);
    const bpawn5 = new Image();
    bpawn5.src = "assets/black/bpawn.png";
    bpawn5.id = 'bpawn';
    bpawn5.classList.add('chessPieces');
    blackPiece.set('bpawn5', bpawn5);
    const bpawn6 = new Image();
    bpawn6.src = "assets/black/bpawn.png";
    bpawn6.id = 'bpawn';
    bpawn6.classList.add('chessPieces');
    blackPiece.set('bpawn6', bpawn6);
    const bpawn7 = new Image();
    bpawn7.src = "assets/black/bpawn.png";
    bpawn7.id = 'bpawn';
    bpawn7.classList.add('chessPieces');
    blackPiece.set('bpawn7', bpawn7);
    const bpawn8 = new Image();
    bpawn8.src = "assets/black/bpawn.png";
    bpawn8.id = 'bpawn';
    bpawn8.classList.add('chessPieces');
    blackPiece.set('bpawn8', bpawn8);


    //White Pieces 

    const wrook1 = new Image();
    wrook1.src = 'assets/white/wrook.png';
    wrook1.classList.add('chessPieces');
    wrook1.id = 'wrook';
    whitePiece.set('wrook1', wrook1);
    const wrook2 = new Image();
    wrook2.src = 'assets/white/wrook.png';
    wrook2.id = 'wrook';
    whitePiece.set('wrook2', wrook2);
    wrook2.classList.add('chessPieces');

    const wbishop1 = new Image();
    wbishop1.src = 'assets/white/wbishop.png';
    wbishop1.id = 'wbishop';
    wbishop1.classList.add('chessPieces');
    whitePiece.set('wbishop1', wbishop1);
    const wbishop2 = new Image();
    wbishop2.src = 'assets/white/wbishop.png';
    wbishop2.id = 'wbishop';
    wbishop2.classList.add('chessPieces');
    whitePiece.set('wbishop2', wbishop2);


    const wknight1 = new Image();
    wknight1.src = 'assets/white/wknight.png';
    wknight1.id = 'wknight';
    wknight1.classList.add('chessPieces');
    whitePiece.set('wknight1', wknight1);
    const wknight2 = new Image();
    wknight2.src = 'assets/white/wknight.png';
    wknight2.id = 'wknight';
    whitePiece.set('wknight2', wknight2);
    wknight2.classList.add('chessPieces');

    const wqueen1 = new Image();
    wqueen1.src = 'assets/white/wqueen.png';
    whitePiece.set('wqueen1', wqueen1);
    wqueen1.id = 'wqueen';
    wqueen1.classList.add('chessPieces');

    const wking1 = new Image();
    wking1.src = 'assets/white/wking.png';
    whitePiece.set('wking1', wking1);
    wking1.id = 'wking';
    wking1.classList.add('chessPieces');

    const wpawn1 = new Image();
    wpawn1.src = 'assets/white/wpawn.png';
    wpawn1.classList.add('chessPieces');
    wpawn1.id = 'wpawn';
    whitePiece.set('wpawn1', wpawn1);
    const wpawn2 = new Image();
    wpawn2.src = 'assets/white/wpawn.png';
    wpawn2.classList.add('chessPieces');
    wpawn2.id = 'wpawn';
    whitePiece.set('wpawn2', wpawn2);
    const wpawn3 = new Image();
    wpawn3.src = 'assets/white/wpawn.png';
    wpawn3.classList.add('chessPieces');
    wpawn3.id = 'wpawn';
    whitePiece.set('wpawn3', wpawn3);
    const wpawn4 = new Image();
    wpawn4.src = 'assets/white/wpawn.png';
    wpawn4.classList.add('chessPieces');
    wpawn4.id = 'wpawn';
    whitePiece.set('wpawn4', wpawn4);
    const wpawn5 = new Image();
    wpawn5.src = 'assets/white/wpawn.png';
    wpawn5.classList.add('chessPieces');
    wpawn5.id = 'wpawn';
    whitePiece.set('wpawn5', wpawn5);
    const wpawn6 = new Image();
    wpawn6.src = 'assets/white/wpawn.png';
    wpawn6.classList.add('chessPieces');
    wpawn6.id = 'wpawn';
    whitePiece.set('wpawn6', wpawn6);
    const wpawn7 = new Image();
    wpawn7.src = 'assets/white/wpawn.png';
    wpawn7.classList.add('chessPieces');
    wpawn7.id = 'wpawn';
    whitePiece.set('wpawn7', wpawn7);
    const wpawn8 = new Image();
    wpawn8.src = 'assets/white/wpawn.png';
    wpawn8.id = 'wpawn';
    wpawn8.classList.add('chessPieces');
    whitePiece.set('wpawn8', wpawn8);







    //white special pieces    
    let wtrook1 = whitePiece.get('wrook1');
    let wtrook2 = whitePiece.get('wrook2');
    let wtknight1 = whitePiece.get('wknight1');
    let wtknight2 = whitePiece.get('wknight2');
    let wtbishop1 = whitePiece.get('wbishop1');
    let wtbishop2 = whitePiece.get('wbishop2');
    let wtqueen1 = whitePiece.get('wqueen1');
    let wtking1 = whitePiece.get('wking1');
    //white pawns
    let wtpawn1 = whitePiece.get('wpawn1');
    let wtpawn2 = whitePiece.get('wpawn2');
    let wtpawn3 = whitePiece.get('wpawn3');
    let wtpawn4 = whitePiece.get('wpawn4');
    let wtpawn5 = whitePiece.get('wpawn5');
    let wtpawn6 = whitePiece.get('wpawn6');
    let wtpawn7 = whitePiece.get('wpawn7');
    let wtpawn8 = whitePiece.get('wpawn8');
    //black special pieces 
    let bkrook1 = blackPiece.get('brook1');
    let bkrook2 = blackPiece.get('brook2');
    let bkknight1 = blackPiece.get('bknight1');
    let bkknight2 = blackPiece.get('bknight2');
    let bkbishop1 = blackPiece.get('bbishop1');
    let bkbishop2 = blackPiece.get('bbishop2');
    let bkqueen1 = blackPiece.get('bqueen1');
    let bkking1 = blackPiece.get('bking1');
    //black pawns 
    let bkpawn1 = blackPiece.get('bpawn1');
    let bkpawn2 = blackPiece.get('bpawn2');
    let bkpawn3 = blackPiece.get('bpawn3');
    let bkpawn4 = blackPiece.get('bpawn4');
    let bkpawn5 = blackPiece.get('bpawn5');
    let bkpawn6 = blackPiece.get('bpawn6');
    let bkpawn7 = blackPiece.get('bpawn7');
    let bkpawn8 = blackPiece.get('bpawn8');


    //whites Pawns being set 
    a2.appendChild(wtpawn1);
    b2.appendChild(wtpawn2);
    c2.appendChild(wtpawn3);
    d2.appendChild(wtpawn4);
    e2.appendChild(wtpawn5);
    f2.appendChild(wtpawn6);
    g2.appendChild(wtpawn7);
    h2.appendChild(wtpawn8);
    //white special Pieces Being Set 
    a1.appendChild(wtrook1);
    b1.appendChild(wtknight1);
    c1.appendChild(wtbishop1);
    d1.appendChild(wtqueen1);
    e1.appendChild(wtking1);
    f1.appendChild(wtbishop2);
    g1.appendChild(wtknight2);
    h1.appendChild(wtrook2);
    //black pawns being set
    a7.appendChild(bkpawn1);
    b7.appendChild(bkpawn2);
    c7.appendChild(bkpawn3);
    d7.appendChild(bkpawn4);
    e7.appendChild(bkpawn5);
    f7.appendChild(bkpawn6);
    g7.appendChild(bkpawn7);
    h7.appendChild(bkpawn8);
    //black special pieces being set
    a8.appendChild(bkrook1);
    b8.appendChild(bkknight1);
    c8.appendChild(bkbishop1);
    d8.appendChild(bkqueen1);
    e8.appendChild(bkking1);
    f8.appendChild(bkbishop2);
    g8.appendChild(bkknight2);
    h8.appendChild(bkrook2);

    const kingMoves = [(0, 1), (1, 0), (0, -1), (-1, 0), (1, 1), (-1, -1), (1, -1), (-1, 1)];
    const wpawn = [(0, 2), (0, 1)];
    const bpawn = [(0, -2), (0, -1)];


    /* events fired on the draggable target */
    let pieces = document.getElementsByClassName("chessPieces");
    let selectedPiece;
    let move;
    let chessTiles = document.getElementsByClassName("square");
    let originalPlace;
    let originalSquare;
    let moveBack;
    for (piece of pieces) {


        piece.addEventListener("dragstart", (event) => {
            selectedPiece = event.target;
            originalPlace = selectedPiece.parentElement.id;

            console.log("dragstart");
            console.log(selectedPiece.id);
            if (selectedPiece == wking) {
                // separate letter from number into two variables
                const text = selectedPiece.parentElement.id;
                const myArray = text.split("");
                let letter = myArray[0];
                let num = myArray[1];

                // Convert number to an integer
                num = parseInt(num);

                // Add 1 to integer
                num += 1;
                // Get ascii char code for letter
                letter = letter.charCodeAt(0);

                // Add one
                letter += 1;

                // Convert char code back to ascii
                letter = String.fromCharCode(letter);

                //add highlight
                const validMoves = letter + num;
                move = document.getElementById(validMoves);
                if (move.children.length > 0) {
                    moveBack = true;
                } else if (move.children.length == 0) {
                    move.classList.add("validMoves");
                    moveBack = false;
                }
                console.log(move.children.length == 0);
                console.log(validMoves);


            } else {
                console.log("king not selected ");
            }







        });

        piece.addEventListener("drag", (event) => {
            console.log("dragging");

        });

        piece.addEventListener("dragend", (event) => {
            console.log("dragend");
            if (move != undefined) {
                move.classList.remove("validMoves");
            }



        });


    }


    for (const chessTile of chessTiles) {

        chessTile.addEventListener(
            "dragover",
            (event) => {
                // prevent default to allow drop
                event.preventDefault();
            },
            false
        );

        chessTile.addEventListener("dragenter", (event) => {
            // highlight potential drop target when the draggable element enters it
            chessTile.classList.add("dragover");
        });

        chessTile.addEventListener("dragleave", (event) => {
            // reset background of potential drop target when the draggable element leaves it
            chessTile.classList.remove("dragover");
        });



        chessTile.addEventListener("drop", (event) => {


            event.preventDefault();
            // move dragged element to the selected drop target

            chessTile.appendChild(selectedPiece);
            var movesTraceBox = document.getElementById('movesTraceBox');
            //movesTraceBox.innerHTML = movesTraceBox.innerHTML + ',' +  selectedPiece.id + chessTile.id;
            let h2 = document.createElement("h2");
            h2.classList.add('white');
            h2.innerHTML = selectedPiece.id + " to " + chessTile.id;
            movesTraceBox.appendChild(h2);


            if (chessTile.children.length > 1) {
                chessTile.children[0].remove();

            } else if (moveBack && selectedPiece == wking) {
                originalSquare = document.getElementById(originalPlace);
                originalSquare.appendChild(selectedPiece);
            }


            const text = chessTile.id;
            const arrayCT = text.split("");
            let newNum = arrayCT[1];

            // Convert number to an integer
            newNum = parseInt(newNum);
            if (newNum == 8 && selectedPiece.id == 'wpawn') {
                console.log('queen made');
                selectedPiece.src = "assets/white/wqueen.png";
                selectedPiece.id = 'wqueen';

            }


            if (newNum == 1 && selectedPiece.id == 'bpawn') {
                console.log('queen made');
                selectedPiece.src = "assets/black/bqueen.png";
                selectedPiece.id = 'bqueen';

            }



            chessTile.classList.remove("dragover");
            console.log("drop");




        });

        chessTile.addEventListener('dblclick', function () {
            if (chessTile.classList.contains("priotize")) {
                chessTile.classList.remove("priotize");
            } else {
                chessTile.classList.add("priotize");
            }


        })



    }




}






var timeLimit = 900000;
var timePassedP1 = 0;
var timePassedP2 = 0;
var continueTimerP1;
var continueTimerP2;

function updateTimer() {
    console.log(playerTurn);
if(playerTurn == 1){
    timePassedP1 += 1000;
   
}else if (playerTurn == 2){
    timePassedP2 += 1000;
}
    
    var timeLeftP1 = timeLimit - timePassedP1;
    var timeLeftP2 = timeLimit - timePassedP2;

    var minutesP1 = Math.floor((timeLeftP1 % (1000 * 60 * 60)) / (1000 * 60));
    var secondsP1 = Math.floor((timeLeftP1 % (1000 * 60)) / 1000);

    var minutesP2 = Math.floor((timeLeftP2 % (1000 * 60 * 60)) / (1000 * 60));
    var secondsP2 = Math.floor((timeLeftP2 % (1000 * 60)) / 1000);




    if (timeLeftP1 < 0) {
        clearInterval(timerInterval);
        document.getElementById("timerP1").innerText = "P2 Won";
        document.getElementById("timerP2").innerText = "P2 Won";
        timePassedP1 = 0;
        timePassedP2 = 0;
        alert("Times UP!!");
    } else if (timeLeftP2 < 0) {
        clearInterval(timerInterval);
        document.getElementById("timerP1").innerText = "P1 Won";
        document.getElementById("timerP2").innerText = "P1 Won";
        timePassedP1 = 0;
        timePassedP2 = 0;
        alert("Times UP!!");
    } else {
        document.getElementById("timerP1").innerText = minutesP1 + "m " + secondsP1 + "s ";
        document.getElementById("timerP2").innerText = minutesP2 + "m " + secondsP2 + "s ";

    }



}





















function minutesToMiliSeconds(minutes) {
    var num = minutes * 60;
    num *= 1000;
    return num;
}
var timesClicked = 0;
function reset() {
    if (timesClicked == 0) {
        setupBoard();
    } else { alert('clicked Too many Times Try Reloading Window The click Reset Board!'); }

    timesClicked += 1;


}
function tenMin() {
    timeLimit = 600000;
    timerStartValue = 600000;
    timePassedP1 = 0;
    timePassedP2 = 0;
    timerInterval = setInterval(updateTimer, 1000);


}
function fifteenMin() {
    timeLimit = 900000;
    timePassedP1 = 0;
    timePassedP2 = 0;
    timerInterval = setInterval(updateTimer, 1000);

}
function unlimited() {
    clearInterval(timerInterval);
}
function custom() {
    num = prompt("How many minutes?");
    minutes = parseInt(num)
    finalMinutes = minutesToMiliSeconds(minutes);
    timeLimit = finalMinutes;
    timePassedP1 = 0;
    timePassedP2 = 0;
    timerInterval = setInterval(updateTimer, 1000);
}

