const canvas = document.createElement('canvas');
canvas.height = 300;
canvas.width = 400;

const context = canvas.getContext('2d');

const img = new Image();
img.onload = function() {
    context.drawImage(img, 0, 0, canvas.width, canvas.height);
}

const container = document.getElementById('container');
container.appendChild(canvas);

img.src = './avabomb.png';