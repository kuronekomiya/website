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