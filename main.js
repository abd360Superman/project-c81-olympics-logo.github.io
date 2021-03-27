var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 1;
ctx.rect(150, 143, 430, 200);
ctx.stroke();

function circle(x, y, c) {
    ctx.beginPath();
    ctx.strokeStyle = c;
    ctx.lineWidth = 5;
    ctx.arc(x, y, 40, 0, 2*Math.PI);
    ctx.stroke();
}

circle(250, 210, "blue");
circle(275, 250, "yellow");
circle(300, 210, "black");
circle(325, 250, "green");
circle(350, 210, "red");