import Cropper from './components/cropper.js'
import Circle from './components/circle.js'

const croppedImg = document.getElementById('cropped-img');

const cropper = new Cropper('container', new Circle);
cropper.init();
cropper.loadImg('./avabomb.png');

const cropBtn = document.getElementById('crop-btn');
cropBtn.addEventListener('click', () => {
    croppedImg.src = cropper.crop();
});