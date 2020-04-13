
const CIRCLE = document.querySelector('.circle');

function mouseCoordinates(e){
    var horizontalPosition = window.innerWidth - e.clientX - 26;
    var verticalPosition = window.innerHeight - e.clientY - 26;
    
    CIRCLE.style.left = horizontalPosition + 'px';
    CIRCLE.style.top = verticalPosition + 'px';
    
}
function changeColorOnTouch(){
    CIRCLE.style.backgroundColor = "blue";
    CIRCLE.style.borderColor = "blue";
}
window.addEventListener('mousemove', mouseCoordinates, false);    

CIRCLE.addEventListener('mouseenter', changeColorOnTouch, false);

CIRCLE.addEventListener('mouseleave', function(){
   CIRCLE.removeAttribute("style");
}, false);