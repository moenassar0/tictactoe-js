const grid_container = document.getElementById('grid-container');
const rects = grid_container.children;
const turnHeader = document.getElementById("turn");


let x_turn = true;

let xpos = [];
let opos = [];
let images = [];
let winner = '';

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
        console.log(images);
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
    if(checkForWinning3(opos) && opos != []){
        winner = 'o';
        ResetGame();
    }
    if(checkForWinning3(xpos) && xpos != []){
        winner = 'x';
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
    setTimeout(function(){removeImages()}, 250);
}

function showTurn(){
    if(x_turn){
        turnHeader.innerHTML = "Turn: Y";
    }
    else{
        turnHeader.innerHTML = "Turn: X";
    }
}

function removeImages(){
    for(let i = 0; i < images.length; i++){
        images[i].parentNode.removeChild(images[i]);
    }
    images = [];
    alert(winner + " Won!");
}


