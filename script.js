let i = 1;

document.querySelectorAll(".box").forEach(box => {
    box.onclick = () => {
        if (i==1) {
            box.innerText = "X";
            i = -1; 
        } else {
            box.innerText = "O";
            i = 1; 
        }

        setTimeout(checkWinner,2000);
    };
});



function checkWinner(){

    const boxes = document.querySelectorAll(".box");

    winningPattern = [
        [0, 1, 2], 
        [3, 4, 5],
        [6, 7, 8], 
        [0, 3, 6], 
        [1, 4, 7], 
        [2, 5, 8],
        [0, 4, 8], 
        [2, 4, 6]
    ]

    for(let pattern of winningPattern){
        const [a,b,c] = pattern;
        if(boxes[a].innerText && boxes[a].innerText === boxes[b].innerText && boxes[a].innerText === boxes[c].innerText) {
            alert(`${boxes[a].innerText} wins!`);
            resetGame();
            return;
        }
    }

    if([...boxes].every(box => box.innerText!=="")){
        alert(`its a tie!`);
        resetGame();
    }
}


function resetGame(){
    document.querySelectorAll(".box").forEach(box => box.innerText="");
    i=1;
}