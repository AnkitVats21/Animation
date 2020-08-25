var box = document.querySelector("#lens");
var love = document.querySelector('#love');
var peace = document.querySelector('#peace');
var code = document.querySelector('#code');
var xPos = 0;
var j=0;
var x=-500;
var si="SOFTWARE INCUBATOR";
function backgroundAnimation(){
  x +=1;
  console.log(x)
  love.style.transform = `translate3d(0,${x*0.1}rem,0)`;
  peace.style.transform = `translate3d(${x*0.1}vh,0,0)`;
  code.style.transform = `translate3d(${x*0.1}vh,${x*0.1}vh,0)`;
  if(Math.abs(x)==100){
    x=-500;
  }
  requestAnimationFrame(backgroundAnimation);
}

backgroundAnimation();

function animate() {
xPos +=0.5;
box.style.transform = `translate3d(${xPos}vh, 0, 0)`;
if(Math.abs(xPos)%10==0){
  box.innerHTML=si.charAt(j);
  j++;
}
if (Math.abs(xPos) >= 220) {
xPos = -10;
j=0;
}
requestAnimationFrame(animate);
}
animate();