const grid_container = document.getElementById('grid-container');
const rects = grid_container.children;
const turnHeader = document.getElementById("turn");


let x_turn = true;

let xpos = [];
let opos = [];

for(let i = 0; i < rects.length; i++){
    rects[i].setAttribute("id", i);
    rects[i].addEventListener("click", clicked)
}

const winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
]


let positionsOnBoard = [
    [0, null],
    [1, null],
    [2, null],
    [3, null],
    [4, null],
    [5, null],
    [6, null],
    [7, null],
    [8, null]
];

function clicked(){
    turnHeader.innerHTML = "Turn: " + x_turn;
    let id = parseInt(this.getAttribute("id"));
    //console.log(id);
    if(x_turn == true && positionsOnBoard[id][1] == null){
        positionsOnBoard[id][1] = 'x';
        xpos.push(id);
        x_turn = false;
    }
    if(x_turn == false && positionsOnBoard[id][1] == null){
        positionsOnBoard[id][1] = 'o';
        opos.push(id);
        x_turn = true;
    }
    //console.log(positionsOnBoard);
    //console.log(winningPositions[0]);
    console.log(xpos, opos);
    if(checkForWinning3(opos)){
        
    }

}

function checkForWinning3(pos){
    for(let y = 0; y < 3; y++){
        let ar1 = winningPositions[y];
        let ar2 = pos;
        if(ar1.every(r => ar2.includes(r))){
            console.log('Found all of', ar1, 'in', ar2);
          }else{
            console.log('Did not find all of', ar1, 'in', ar2);
          }
    }
}


