let boxes = document.querySelectorAll(".box");
let options = document.querySelector(".option");
let newGameBtn = document.querySelector("#new");
let resetbtn = document.querySelector("#reset");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
// player 1 = O
// player 2 = X
let turnO = true;

const winpatterns = [
  [0,1,2],
  [0,4,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [2,4,6],
[3,4,5],
[6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
       if(turnO) {
        box.innerHTML = "O";box. style. color = '#fb5607';
         turnO = false;
       } else {
    box.innerHTML ="X";box. style. color = '#3a86ff';
    turnO = true;
}
       box.disabled = true;
       checkwinner();
    });
})
const resetgame12 = () => {
    turnO = true;
    enableboxes();
    msgcontainer.classList.add("hide");
}
const enableboxes = () => {
    for(let box of boxes) {
        box.disabled = false
        box.innerHTML = ""
        
    };
}
const disableboxes = () => {
    for(let box of boxes) {
        box.disabled = true 
    };
}
const showwinner = (winner) => {
    msg.innerHTML = `Congratulation, Winnert is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
    
}
const checkwinner = ()=> {
    for(let pattern of winpatterns) {
    // console.log(,boxes[pattern[1]],boxes[pattern[2]]);
    let pos1val = boxes[pattern[0]].innerHTML;
    let pos2val = boxes[pattern[1]].innerHTML;
    let pos3val = boxes[pattern[2]].innerHTML;

    if(pos1val != "" && pos2val != "" && pos3val != "") {
        if(pos1val === pos2val && pos2val === pos3val) {
        console.log("winner" , pos1val);
        showwinner(pos1val);
        }
    }
    }
};
newGameBtn.addEventListener("click", resetgame12);
resetbtn.addEventListener("click", resetgame12);
// options.addEventListener("click", resetgame12);