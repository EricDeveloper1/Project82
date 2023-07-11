var mouseEvent= "empty";
width_of_line= "empty";
color= "empty";
radius= "empty";

canvas= document.getElementById("MyCanvas");
ctx= canvas.getContext("2d");

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown (e) {
    color= document.getElementById("color").value;
    width_of_line= document.getElementById("width_of_line").value;
    radius= document.getElementById("radius").value;
    mouseEvent= "mouseDown";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup (e) {
    color= document.getElementById("color").value;
    width_of_line= document.getElementById("width_of_line").value;
    radius= document.getElementById("radius").value;
    mouseEvent= "mouseUP";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave (e) {
    color= document.getElementById("color").value;
    width_of_line= document.getElementById("width_of_line").value;
    radius= document.getElementById("radius").value;
    mouseEvent= "mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove (e) {
current_position_x= e.clientX - canvas.offsetLeft;
current_position_y= e.clientY - canvas.offsetTop;

if (mouseEvent == "mouseDown") {
    console.log("x= "+ current_position_x + "y= " + current_position_y);
    ctx.beginPath();
    ctx.strokeStyle= color;
    ctx.lineWidth= width_of_line;
    ctx.arc(current_position_x, current_position_y, radius, 0, 2*Math.PI);
    ctx.stroke();
}
}