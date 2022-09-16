const grid_container = document.getElementById('grid-container');
const rects = grid_container.children;
const turnHeader = document.getElementById("turn");


let x_turn = true;

let xpos = [];
let opos = [];
let images = [];

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
    showTurn();
    let id = parseInt(this.getAttribute("id"));
    //console.log(id);
    if(x_turn == true && positionsOnBoard[id][1] == null){
        positionsOnBoard[id][1] = 'x';
        xpos.push(id);
        x_turn = false;
        let image = document.createElement('img');
        image.setAttribute('src', './img/red.png');
        image.classList.add('img');
        images.push(image);
        this.appendChild(image);
    }
    if(x_turn == false && positionsOnBoard[id][1] == null){
        positionsOnBoard[id][1] = 'o';
        opos.push(id);
        x_turn = true;
        let image = document.createElement('img');
        image.setAttribute('src', './img/yellow.png');
        image.classList.add('img');
        images.push(image);
        this.appendChild(image);
    }
    console.log(xpos, opos);
    if(checkForWinning3(opos)){
        alert("o won");
        setInterval(function(){}, 500);
        ResetGame();
    }
    if(checkForWinning3(xpos)){
        alert("x won");
        setInterval(function(){}, 500);
        ResetGame();
    }
}

function checkForWinning3(pos){
    for(let y = 0; y < 3; y++){
        let ar1 = winningPositions[y];
        let ar2 = pos;
        if(ar1.every(r => ar2.includes(r))){
            return true;
        }
    }
    return false;
}

function ResetGame(){
    xpos = [];
    opos = [];
    for(let i = 0; i < images.length; i++){
        images[i].parentNode.removeChild(images[i]);
    }
    positionsOnBoard = [
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
    x_turn = true;
}

function showTurn(){
    if(x_turn){
        turnHeader.innerHTML = "Turn: X";
    }
    else{
        turnHeader.innerHTML = "Turn: Y";
    }
    
}


