let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newGame = document.querySelector("#new");
let msgCont = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turn_O = true; //player O

const winPatterns = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=>{
    box.addEventListener("click", () =>{
        console.log("box was clicked");
        if(turn_O){
            box.innerText = "O";
            turn_O = false;
        } else{
            box.innerText = "X";
            turn_O = true;
        }
    box.disabled = true;

    checkWinner();
    });
});

let checkWinner =() => {
    for(pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("WINNER!",pos1);
                disableBoxes();
                showWinner(pos1);
            }
        }
    }
};

const disableBoxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) =>{
    msg.innerText = `CONGRATULATIONS! WINNER IS ${winner}`;
    msgCont.classList.remove("hide");
};

const reset = () => {
    turn_O = true;
    enableBoxes();
    msgCont.classList.add("hide");
}

newGame.addEventListener("click",reset);
resetbtn.addEventListener("click",reset);