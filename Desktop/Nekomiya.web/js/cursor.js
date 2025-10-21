// https://codepen.io/JimmyJangers/pen/LYOOwvQ

var bee = document.getElementById("cursor");
document.addEventListener("mousemove", getMouse); 

bee.style.position = "absolute"; //css    
var beepos = {x:0, y:0};

setInterval(followMouse, 30);

var mouse = {x:0, y:0}; //mouse.x, mouse.y

var dir = "right";
function getMouse(e){
  mouse.x = e.pageX;
  mouse.y = e.pageY;
    //Checking directional change
    if(mouse.x > beepos.x){
      dir = "right";
    } else {
      dir = "left";
    }
}

function followMouse(){
  //1. find distance X , distance Y
  var distX = mouse.x - beepos.x;
  var distY = mouse.y - beepos.y;
  //Easing motion
  //Progressive reduction of distance 
  beepos.x += distX/5;
  beepos.y += distY/2;
  
  bee.style.left = (beepos.x + 30) + "px";
  bee.style.top = beepos.y + "px";
  
  
    //Apply css class 
    if (dir == "right"){
      bee.setAttribute("class", "right");
    } else {
      bee.setAttribute("class", "left");        
    }
  
}

let con = document.querySelector('.container'),
    cube = document.querySelector(".image-cube"),
    btnNext = document.getElementById("next"),
    btnPrev = document.getElementById("prev"),
    switch_delay = 3000 //milli-seconds
let pos = 0;
btnNext.addEventListener("click", () => {
  pos -= 90;
  cube.style.transform = `rotateY(${pos}deg)`;
});
btnPrev.addEventListener("click", () => {
  pos += 90;
  cube.style.transform = `rotateY(${pos}deg)`;
});
function autoClick() {
  pos -= 90;
  cube.style.transform = `rotateY(${pos}deg)`;
}
autoClick()
let autoRun = setInterval(autoClick, switch_delay)
con.addEventListener('mouseenter', function(){
  clearInterval(autoRun)
})
con.addEventListener('mouseleave', function(){
  autoRun = setInterval(autoClick, switch_delay)
})
