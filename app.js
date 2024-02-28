let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container"); 
let msg = document.querySelector("#msg");

let turno=true;
let count=0;

const winpat=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
]; 


const resetgame=()=>
{
turno=true;
count=0;
enableboxes();
msgcontainer.classList.add("hide");
};


boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    if(turno)
    {
      box.innerText="O";
      turno=false;
     
    }
    else{
      box.innerText="X";
      turno=true;
     
    }
    box.disabled=true;
    count++;

    let isWinner=checkWinner();
    if (count===9 && !isWinner)
    {
      gameDraw();
    }

  });
});

let gameDraw=()=>{
  msg.innerHTML=`DRAW`;
  msgcontainer.classList.remove("hide");
  disableBoxes();
};



const disableboxes=()=>
{
  for(let box of boxes)
  {
    box.disabled=true;
  }
};

const enableboxes=()=>
{
  for(let box of boxes)
  {
    box.disabled=false;
    box.innerHTML="";
  }
};






showWinner=(pos1)=>{
msg.innerHTML=`Congratulations the Winner is ${pos1}`;
msgcontainer.classList.remove("hide");
disableboxes();

}
const checkWinner=()=>{
  for(let patterns of winpat)
  {
    let pos1=boxes[patterns[0]].innerText;
    let pos2=boxes[patterns[1]].innerText;
    let pos3=boxes[patterns[2]].innerText;

    if(pos1 !=="" &&pos2!=="" && pos3!=="")
    {
      if(pos1===pos2 && pos2===pos3)
      {
        console.log(pos1," is the  Winner.....");
        disableboxes();
        showWinner(pos1);
        return true;

        
      };
    };
  };
}
newgamebtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);