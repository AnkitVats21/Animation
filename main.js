var box = document.querySelector("#lens");
var love = document.querySelector('#love');
var peace = document.querySelector('#peace');
var code = document.querySelector('#code');
var line =document.querySelector('#container')

var xPos = 0, j=0, x=-500, si="SOFTWARE INCUBATOR";
function backgroundAnimation(){
  x +=1;
  love.style.transform = `translate3d(0,${x*0.1}vh,0)`;
  peace.style.transform = `translate3d(${x*0.1}vh,0,0)`;
  code.style.transform = `translate3d(${x*0.1}vh,${x*0.1}vh,0)`;
  if(Math.abs(x)==200){
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
  line.innerHTML += si.charAt(j);
  j++;
}
if (Math.abs(xPos) >= 200) {
xPos = 0;
j=0;
line.innerHTML = "";
}
requestAnimationFrame(animate);
}

animate();

var r=0,g=0,b=0,a=0;

function color(){
  r=Math.floor(Math.random()*255+1);
  g=Math.floor(Math.random()*255+1);
  b=Math.floor(Math.random()*255+1);
  let color="rgba("+ Number(r) + "," + Number(g) + "," + Number(b) + ")"
  line.style.color= color;
  box.style.color=color;
  document.getElementById("btn2").style.backgroundColor=color;
}

function modes() {
  var element = document.body;
  document.getElementById('btn').classList.toggle('btn');
  element.classList.toggle("dark-mode");
}
