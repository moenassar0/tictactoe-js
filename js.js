const grid_container = document.getElementById('grid-container');
const rects = grid_container.children;

let x_turn = true;
console.log(rects);

for(let i = 0; i < rects.length; i++){
    rects[i].setAttribute("id", i);
    rects[i].addEventListener("click", clicked)
}

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
    let id = this.getAttribute("id");
    console.log(id);
    if(x_turn == true){
        positionsOnBoard[id][1] = 'x';
        x_turn = false;
    }
    else{
        positionsOnBoard[id][1] = 'o';
        x_turn = true;
    }
    console.log(positionsOnBoard);
    checkForWinning();
}

function checkForWinning(){

}