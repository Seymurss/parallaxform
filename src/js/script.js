let text      = document.getElementById('text');
let treeleft  = document.getElementById('tree-left');
let treeright = document.getElementById('tree-right');
let gateleft  = document.getElementById('gate-left');
let gateright = document.getElementById('gate-right');
window.addEventListener('scroll',()=>{
    let value =window.scrollY;
    text.style.marginTop = value * 2.5 + 'px';
    treeleft.style.left = value * -1.5 + 'px';
    treeright.style.left = value * 1.5 + 'px';
    gateleft.style.left = value * 0.5 + 'px';
    gateright.style.left = value * -0.5 + 'px';
})




//mouse hover

let myDiv = document.getElementById("mouse");
function isTouchDevice() {

  try {
    document.createEvent("TouchEvent");

    return true;

  } catch (e) {

    return false;

  }

}


const move = (e) => {
  try {
    var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;

    var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;

  } catch (e) {}

  myDiv.style.left = x - 30 + "px";

  myDiv.style.top = y - 30 + "px";

};

document.addEventListener("mousemove", (e) => {

  move(e);

});


document.addEventListener("touchmove", (e) => {

  move(e);

});