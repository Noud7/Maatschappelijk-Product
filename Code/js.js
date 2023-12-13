var canvas = document.createElement('canvas');
var context = canvas.getContext("2d");
document.body.appendChild(canvas);
canvas.width = 1820;
canvas.height = 980;

const imageCollection = loadImages()