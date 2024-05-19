let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msg = document.querySelector(".msg");
let msgContainer = document.querySelector(".msg-container");
let main = document.querySelector(".mn");
let newGameBtn = document.querySelector(".new-btn");


let turn0 = true;
let count = 0;

const winPattern = [

    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {

     box.addEventListener("click", () => {

         if(turn0 === true) {
            box.innerText = 'O';
            turn0 = false;
         } else {
            box.innerText = 'X';
            turn0 = true;
         }
         count++;
         box.disabled = true;
         let isWinner = checkWinner();
         if(!isWinner && count === 9) drawGame();
     });
});


const checkWinner = () => {

       for(let pattern of winPattern) {

          let box1 = boxes[pattern[0]].innerText;
          let box2 = boxes[pattern[1]].innerText;
          let box3 = boxes[pattern[2]].innerText;

          if(box1 !== "" && box2 !== "" && box3 !== "") {
             if(box1 === box2 && box2 === box3) {
                showWinner(box1);
             }
          }
       }
};

const drawGame = () => {

    disableBoxes();
    setTimeout(() => {
     msg.innerText = `Game Draw`;
     msgContainer.classList.remove("hide");
     
    }, 1000);
}
const showWinner = (winner) => {

    disableBoxes();
    setTimeout(() => {
       msg.innerText = `Congratulations, Winner is ${winner}`;
       msgContainer.classList.remove("hide");
       
    }, 1000);
}

const disableBoxes = () => {

    for(let box of boxes) {
        box.disabled = true;
    }
};
const resetGame = () => {

     turn0 = true;
     count = 0;
     enableBoxes();
     msgContainer.classList.add("hide");
};
const enableBoxes = () => {

    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);