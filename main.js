var mouseevent="";
var lastX,lastY,curX,curY;

canvas=document.getElementById("canvoos");
ctx=canvas.getContext("2d");

color="black";
lWidth=1;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown (e){
    color=document.getElementById("tColor").value;
    lWidth=document.getElementById("lWidth").value;
    radius=document.getElementById("radius").value;
    mouseevent="mouseDown";
}


canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove (e){
    curX=e.clientX-canvas.offsetLeft;
    curY=e.clientY-canvas.offsetTop;
    if(mouseevent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=lWidth;
        console.log("X Y Coordinates = ");
        console.log("LastX="+lastX+" LastY="+lastY+" CurrentX="+curX+" CurrentY="+curY);
        ctx.moveTo(lastX,lastY);
        ctx.lineTo(curX,curY);
        ctx.stroke();
    }
    lastX=curX;
    lastY=curY;
}

function clearFF (){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}